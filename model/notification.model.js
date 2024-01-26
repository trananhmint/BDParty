const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  notificationID: { type: mongoose.Types.ObjectId },
  content: { type: String, require: true },
  title: { type: String, required: true },
  userID: { type: mongoose.Types.ObjectId },
});

const notificationModel = mongoose.model("Notification", notificationSchema);
module.exports = notificationModel;
