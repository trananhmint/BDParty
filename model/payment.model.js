const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  accountNumber: { type: String, required: true },
  accountNumberOfOpponent: { type: String, required: true },
});

const paymentModel = mongoose.model("Payment", paymentSchema);
module.exports = paymentModel;
