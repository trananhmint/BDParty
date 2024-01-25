const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
    balance: {type: Float32Array, require: true},
    userID: {type: String, require: true}
})

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;