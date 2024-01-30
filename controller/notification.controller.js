const notificationModel = require("../model/notification.model");

const getNotificationByUser = async (req, res) => {
  try {
    const userID = req.params.userID;
    const notification = await notificationModel.find({ userID });

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewNotification = async (req, res) => {
  try {
    const { userID, title, content } = req.body;

    const notification = new notificationModel({
      userID,
      title,
      content,
    });

    await notification.save();

    if (notification) {
      res.status(200).json(notification);
    } else {
      res.status(400).json("Cannot create notification");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateNotification = async (req, res) => {
  try {
    const { _id, content, title } = req.body;

    const checkUpdate = await notificationModel.updateOne(
      { _id },
      { content, title }
    );

    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(400).json("Cannot update user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteNotification = async (req, res) => {
  try {
    const _id = req.params.id;

    const checkDelete = await notificationModel.deleteOne({ _id: _id });

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(400).json("Cannot delete user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getNotificationByUser,
  createNewNotification,
  deleteNotification,
  updateNotification,
};
