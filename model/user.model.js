const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  address: { type: String, require: true },
  role: { type: String, enum: { values: ["Customer", "Admin"] } },
  status: { type: String, enum: { values: ["Active", "Inactive"] } },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
