const mongoose = require('mongoose');

const promotionSchema = mongoose.Schema({
    percent:{type: Number, require:true},
    min: {type: Number, require:true},
    max:{type: Number, require:true},
    require:{type: Number, require:true},
    status: {type:String, enum: { values:["Accepted", "Denied"] }}
});

const promotionModel = mongoose.model("Promotion", promotionSchema);

module.exports = promotionModel;