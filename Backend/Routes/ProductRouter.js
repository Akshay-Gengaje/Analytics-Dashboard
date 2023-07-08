const express = require("express");
const axios = require("axios");
const { getTransections } = require("../Controllers/transactionsController");
const { getCombinedData } = require("../Controllers/combinedDataController");
const router = express.Router();

router.get("/transections", getTransections).get("/combined", getCombinedData);
exports.router = router;
