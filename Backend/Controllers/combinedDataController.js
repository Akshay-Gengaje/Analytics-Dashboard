const axios = require("axios");
const { getTransections } = require("./transactionsController");
const { getstatistics } = require("./statisticsController");
const { getBarChartData } = require("./barChartController");
const { getPieChartData } = require("./pieChartController");

// Combined Data Controller method
exports.getCombinedData = async (req, res) => {
  try {
    const statistics = await getstatistics(req, res);
    const barChartData = await getBarChartData(req, res);
    const pieChartData = await getPieChartData(req, res);
    const combinedData = {
      statistics,
      barChartData,
      pieChartData,
    };
    res.json(combinedData);
  } catch (error) {
    console.error("Error retrieving combined data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
