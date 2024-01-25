const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const userRouter = require("./router/user.router");
const serviceRouter = require("./router/service.router");
const contractRouter = require("./router/contract.router");

const itemRouter = require("./router/item.router");
const walletRouter = require("./router/wallet.router");

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/user", userRouter);
app.use("/service", serviceRouter);
app.use("/contract", contractRouter);
app.use("/item", itemRouter);
app.use("/wallet", walletRouter);

app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});

db.connect();
