const model = require("../Model/ProductSchema");
const Product = model.Product;

exports.getstatistics = async (req, res) => {
  try {
    const _month = req.query.month || 0;
    const products = await Product.find(
      _month != 0
        ? {
            $expr: { $eq: [{ $month: "$dateOfSale" }, _month] },
          }
        : {}
    );
    let amount = 0;
    const soldItems = products.filter((product) => product.sold === true);
    products.forEach((product) => {
      amount += product.price;
    });
    const sold = soldItems.length;
    const unsold = products.length - soldItems.length;
    return { sold, unsold, amount };
  } catch (error) {
    return error;
  }
};
