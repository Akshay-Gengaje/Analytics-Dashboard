const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./Database/db");
const ProductRouter = require("./Routes/ProductRouter");
var cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
const origins = [...process.env.ORIGINS] || "*";
app.use(
  cors({
    origin: origins,
    methods: ["GET"],
    credentials: true,
  })
);
app.use("/products", ProductRouter.router);
app.get("/", (req, res) => {
  res.json("Hello").status(400);
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));