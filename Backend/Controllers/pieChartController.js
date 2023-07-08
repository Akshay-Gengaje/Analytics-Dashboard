const model = require("../Model/ProductSchema");
const Product = model.Product;

exports.getPieChartData = async (req, res) => {
  try {
    const _month = req.query.month || 0;
    const products = await Product.aggregate(
      _month != 0
        ? [
            {
              $match: {
                $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(_month)] },
              },
            },
            {
              $group: {
                _id: "$category",
                count: { $sum: 1 },
              },
            },
          ]
        : [
            {
              $group: {
                _id: "$category",
                count: { $sum: 1 },
              },
            },
          ]
    );
    // res.json(products);
    return products;
  } catch (error) {
    return error;
  }
};
