const express = require("express");
const {
  getAllNotification,
  createNewNotification,
  updateNotification,
  deleteNotification,
} = require("../controller/notification.controller");

const router = express.Router();

router.get("/", getAllNotification);
router.post("/", createNewNotification);
router.put("/", updateNotification);
router.delete("/", deleteNotification);

module.exports = router;
