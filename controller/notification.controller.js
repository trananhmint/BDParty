const notificationModel = require("../model/notification.model");
const getAllNotification = async (req, res) => {
  try {
    const notification = await notificationModel.find({});
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createNewNotification = async (req, res) => {
  try {
    const { notificationID, content, title, userID } = req.body;
    const notification = new notificationModel({
      notificationID,
      content,
      title,
      userID,
    });
    await notification.save();
    if (notification) {
      res.status(200).json(notification);
    } else {
      res.status(500).json("Error creatting notification");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateNotification = async (req, res) => {
  try {
    const { _id, newContent, newTitle, newUserID } = req.body;
    const checkUpdate = await notificationModel.updateOne(
      { _id },
      { content: newContent },
      { title: newTitle },
      { userID: newUserID }
    );
    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(500).json("Cannot update notification");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteNotification = async (req, res) => {
  try {
    const _id = req.params.id;

    const checkDelete = await notificationModel.deleteOne({
      _id: _id,
    });

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(500).json("Error deleting notification");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllNotification,
  createNewNotification,
  updateNotification,
  deleteNotification,
};
