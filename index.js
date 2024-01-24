const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const userRouter = require("./router/user.router");

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/user", userRouter);

app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});

db.connect();
