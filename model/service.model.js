const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    name: {type: String, require: true},
    creator: {type: mongoose.Types.ObjectId},
    imgURL: {type: String, require: true},
    category: {type: String, enum: {values: ["Decoration", "Food", "Room"]}},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    status: {type: String, enum: {values: ["Active", "Inactive"]}},
})

const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = serviceModel;