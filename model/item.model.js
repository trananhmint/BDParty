const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name: {type: String, require: true},
    quantity: {type: Number, require: true},
    price: {type: Number, require: true},
    total: {type: Number, require: true},
    status: {type: String, enum: {values: ["Available", "Unavailable"]}},
})

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;