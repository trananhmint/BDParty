const transactionModel = require("../model/transaction.model");

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await transactionModel.find({});
    res.status(200).json(transactions);
  } catch (err) {
    restart.status(500).json(err);
  }
};

const createNewTransaction = async (req, res) => {
  try {
    const { content } = req.body;

    const transaction = new transactionModel({
      content,
    });

    await transaction.save();
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(500).json("Cannot create new transaction");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { _id, newContent } = req.body;

    const checkUpdate = await transactionModel.updateOne(
      { _id },
      { content: newContent }
    );
    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(500).json("Error updating transaction");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const _id = req.params.id;

    const checkDelete = await transactionModel.deleteOne({
      _id: _id,
    });

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(500).json("Error deleting transaction");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTransaction,
  createNewTransaction,
  updateTransaction,
  deleteTransaction,
};
