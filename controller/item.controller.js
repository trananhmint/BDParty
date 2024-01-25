const itemModel = require("../model/item.model");

const getAllItem = async (req, res) => {
  try {
    const items = await itemModel.find({});

    // find / findOne({_id}) / find({status: "Active"})

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewItem = async (req, res) => {
  try {
    const { name, quantity, price, total, status } = req.body;

    const item = new itemModel({
      name,
      quantity,
      price,
      total,
      status,
    });

    await item.save();

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(400).json("Cannot create item");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateItem = async (req, res) => {
  try {
    const { _id, newName, newQuantity, newPrice } = req.body;

    console.log(_id);
    console.log(newName);
    console.log(newQuantity);
    console.log(newPrice)

    const checkUpdate = await itemModel.updateOne(
      { _id },
      { name: newName },
      { quantity: newQuantity},
      { price: newPrice}
    );

    console.log(checkUpdate);

    if (checkUpdate.modifiedCount > 0) {
      res.status(200).json(checkUpdate);
    } else {
      res.status(400).json("Cannot update item");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const _id = req.params.id;

    console.log(_id);

    const checkDelete = await itemModel.deleteOne({ _id: _id });

    console.log(checkDelete);

    if (checkDelete.deletedCount > 0) {
      res.status(200).json(checkDelete);
    } else {
      res.status(400).json("Cannot delete item");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllItem, createNewItem, deleteItem, updateItem };
