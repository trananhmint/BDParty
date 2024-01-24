const userModel = require("../model/user.model");

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});

    // find / findOne({_id}) / find({status: "Active"})

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewUser = async (req, res) => {
  try {
    const { username, password, address, roleID, status } = req.body;

    const user = new userModel({
      username,
      password,
      address,
      roleID,
      status,
    });

    await user.save();

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json("Cannot create user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id, newUsername } = req.body;

    console.log(_id);
    console.log(newUsername);

    const checkUpdate = await userModel.updateOne(
      { _id },
      { username: newUsername }
    );

    console.log(checkUpdate);

    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(400).json("Cannot update user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;

    console.log(_id);

    const checkDelete = await userModel.deleteOne({ _id: _id });

    console.log(checkDelete);

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(400).json("Cannot delete user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllUser, createNewUser, deleteUser, updateUser };
