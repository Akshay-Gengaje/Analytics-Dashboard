const model = require("../Model/ProductSchema");
const Product = model.Product;

exports.getTransections = async (req, res) => {
  try {
    const body = JSON.parse(req.query.body);
    const search = body.search || "";
    const _page = body.page || 1;
    const _limit = body.limit || 10;
    const _month = body.month || "";
    const _skip = (_page - 1) * _limit;

    const products = await Product.find(
      _month !== ""
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { price: search },
            ],
            $expr: {
              $eq: [{ $month: "$dateOfSale" }, _month],
            },
          }
        : {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { price: search },
            ],
          }
    )
      .skip(parseInt(_skip, 10))
      .limit(parseInt(_limit));

    const total = await Product.countDocuments(
      _month != ""
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { price: search },
            ],
            $expr: {
              $eq: [{ $month: "$dateOfSale" }, _month],
            },
          }
        : {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              { price: search },
            ],
          }
    );
    res.json({ products: [...products], total: total });
  } catch (error) {
    res.json(error);
  }
};
