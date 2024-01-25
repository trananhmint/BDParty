const mongoose = require('mongoose');

const bookingServiceSchema = mongoose.Schema({
     customerID: {type: mongoose.Types.ObjectId},
     serviceID: {type: mongoose.Types.ObjectId},
     status: {type: String, enum: { values:["Pending", "Fullfilled", "Rejected"] } }
});

const bookingServiceModel = mongoose.model("BookingService", bookingServiceSchema);

module.exports = bookingServiceModel;