const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
    balance: {type: Number, require: true},
    userID: {type: String, require: true}
})

const walletModel = mongoose.model("Wallet", walletSchema);

module.exports = walletModel;