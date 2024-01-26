const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const transactionRouter = require("./router/transaction.router");
const paymentRouter = require("./router/payment.router");
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/transaction", transactionRouter);
app.use("/payment", paymentRouter);

app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});

db.connect();
