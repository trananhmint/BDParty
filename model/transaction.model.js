const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel;
