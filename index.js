const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const userRouter = require("./router/user.router");
<<<<<<< HEAD
const serviceRouter = require("./router/service.router");
const contractRouter = require("./router/contract.router");
const itemRouter = require("./router/item.router");
const walletRouter = require("./router/wallet.router");
const bookingServiceRouter = require("./router/bookingService.router")
const promotionRouter = require("./router/promotion.router")
=======
const notificationRouter = require("./router/notification.router");

>>>>>>> Son
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/user", userRouter);
<<<<<<< HEAD
app.use("/service", serviceRouter);
app.use("/contract", contractRouter);
app.use("/item", itemRouter);
app.use("/wallet", walletRouter);
app.use("/bookingService", bookingServiceRouter);
app.use("/promotion", promotionRouter);
=======
app.use("/notification", notificationRouter);
>>>>>>> Son

app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});

db.connect();
