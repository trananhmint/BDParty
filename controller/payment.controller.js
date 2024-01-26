const paymentModel = require("../model/payment.model");

const getAllPayment = async (req, res) => {
  try {
    const payment = await paymentModel.find({});
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createdPayment = async (req, res) => {
  try {
    const { accountNumber, accountNumberOfOpponent } = req.body;
    const payment = new paymentModel({
      accountNumber,
      accountNumberOfOpponent,
    });

    await payment.save();
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(500).json("Error creating new payment");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { _id, newAccountNumber, newAccountNumberOfOpponent } = req.body;

    const checkUpdate = await paymentModel.updateOne(
      { _id },
      {
        $set: {
          accountNumber: newAccountNumber,
          accountNumberOfOpponent: newAccountNumberOfOpponent,
        },
      }
    );
    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(200).json("Error update payment");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePayment = async (req, res) => {
  try {
    const _id = req.params.id;

    const checkDelete = await paymentModel.deleteOne({
      _id: _id,
    });

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(500).json("Error delete payment");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllPayment,
  createdPayment,
  updatePayment,
  deletePayment,
};
