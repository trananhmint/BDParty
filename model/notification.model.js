const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId },
  title: { type: String },
  content: { type: String },
});

const notificationModel = mongoose.model("Notification", notificationSchema);

module.exports = notificationModel;
