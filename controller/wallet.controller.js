
const walletModel = require("../model/wallet.model")

const getAllWallet = async (req, res) => {
  try {
    const wallets = await walletModel.find({});

    // find / findOne({_id}) / find({status: "Active"})

    res.status(200).json(wallets);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewWallet = async (req, res) => {
  try {
    const { balance, userID  } = req.body;

    const wallet = new walletModel({
      balance,
      userID
    });

    await wallet.save();

    if (wallet) {
      res.status(200).json(wallet);
    } else {
      res.status(400).json("Cannot create wallet");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateWallet = async (req, res) => {
  try {
    const { _id, newBalance } = req.body;

    console.log(_id);
    console.log(newBalance);

    const checkUpdate = await walletModel.updateOne(
      { _id },
      { balance: newBalance }
    );

    console.log(checkUpdate);

    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(400).json("Cannot update wallet");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteWallet = async (req, res) => {
  try {
    const _id = req.params.id;

    console.log(_id);

    const checkDelete = await walletModel.deleteOne({ _id: _id });

    console.log(checkDelete);

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(400).json("Cannot delete wallet");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllWallet, createNewWallet, deleteWallet, updateWallet };
