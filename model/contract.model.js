const mongoose = require("mongoose")

const contractSchema = mongoose.Schema({
    serviceID : {type : mongoose.Types.ObjectId},
    linkFile : {type : String, require: true},
    status : {type: String, enum: ["Active", "Inactive"]}
});

const contractModel = mongoose.model("Contract", contractSchema);
module.exports = contractModel;