const express = require("express");
const {
  getNotificationByUser,
  createNewNotification,
  updateNotification,
  deleteNotification,
} = require("../controller/notification.controller");

const router = express.Router();

router.get("/:userID", getNotificationByUser);
router.post("/", createNewNotification);
router.put("/", updateNotification);
router.delete("/:id", deleteNotification);

module.exports = router;
