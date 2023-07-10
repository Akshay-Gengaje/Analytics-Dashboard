const model = require("../Model/ProductSchema");
const Product = model.Product;

exports.getTransections = async (req, res) => {
  try {
    const body = req.query.body;
    const search = body.search;
    const _page = body.page || 1;
    const _limit = body.limit || 10;
    const _month = body.month || 0;
    const _skip = (_page - 1) * _limit;
    const regexPattern = new RegExp(`.*${search}.*`);
    const isNumericField = Number(search);
    console.log(isNumericField);
    console.log(regexPattern);
    const products = await Product.find(
      _month != 0
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              {
                $expr: {
                  $regexMatch: {
                    input: { $toString: "$price" },
                    regex: `^${search.toString()}`,
                  },
                },
              },
            ],
            $expr: {
              $eq: [{ $month: "$dateOfSale" }, _month],
            },
          }
        : {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              {
                $expr: {
                  $regexMatch: {
                    input: { $toString: "$price" },
                    regex: `^${search.toString()}`,
                  },
                },
              },
            ],
          }
    )
      .skip(parseInt(_skip, 10))
      .limit(parseInt(_limit));

    const total = await Product.countDocuments(
      _month != 0
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              {
                $expr: {
                  $regexMatch: {
                    input: { $toString: "$price" },
                    regex: `^${search.toString()}`,
                  },
                },
              },
            ],
            $expr: {
              $eq: [{ $month: "$dateOfSale" }, _month],
            },
          }
        : {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { description: { $regex: search, $options: "i" } },
              {
                $expr: {
                  $regexMatch: {
                    input: { $toString: "$price" },
                    regex: `^${search.toString()}`,
                  },
                },
              },
            ],
          }
    );
    res.json(
      products.length > 0
        ? { products: [...products], total: total, status: "Found" }
        : { products: [], total: total, status: "NotFound" }
    );
  } catch (error) {
    console.log(r);
    res.json(error);
  }
};
