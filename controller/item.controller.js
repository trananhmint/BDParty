const itemModel = require("../model/item.model");

const getAllItem = async (req, res) => {
  try {
    const items = await itemModel.find({});

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewItem = async (req, res) => {
  try {
    const { name, quantity, price, serviceID, status } = req.body;

    const total = quantity * price;

    const item = new itemModel({
      name,
      quantity,
      price,
      total,
      serviceID,
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
    const { _id, name, quantity, price, serviceID, status } = req.body;

    const total = quantity * price;

    console.log(_id);
    console.log(name);
    console.log(quantity);
    console.log(price);
    console.log(total);
    console.log(serviceID);
    console.log(status);

    const checkUpdate = await itemModel.updateOne(
      { _id },
      // { name: name },
      // {quantity: quantity},
      // {price: price},
      // {total: total},
      // {status: status}
      {
        $set: {
          name: name,
          quantity: quantity,
          price: price,
          total: total,
          serviceID: serviceID,
          status: status,
        },
      }
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

module.exports = { getAllItem, createNewItem,  deleteItem, updateItem };
