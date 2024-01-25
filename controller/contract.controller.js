const contractModel = require("../model/contract.model");


const getAllContract = async (req, res) => {
    try {
        const contracts = await contractModel.find({});

        // find / findOne({_id}) / find({status: "Active"})

        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json(error);
    }
};
const createNewContract = async (req, res) => {
    try {
        const { serviceID, linkFile, status } = req.body;

        const contract = new contractModel({
            serviceID,
            linkFile,
            status
        });
        await contract.save();

        if (contract) {
            res.status(200).json(contract);
        } else {
            res.status(400).json("Cannot create contract");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateContract = async (req, res) => {
    try {
        const { _id, newLinkFile, newStatus } = req.body;

        const checkUpdate = await contractModel.updateOne(
            { _id },
            { linkFile: newLinkFile },
            { status: newStatus }
        );

        if (checkUpdate.modifiedCount > 0) {
            res.status(200).json(checkUpdate);
        } else {
            res.status(400).json("Cannot update contract");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteContract = async (req, res) => {
    try {
      const _id = req.params.id;
  
      console.log(_id);
  
      const checkDelete = await contractModel.deleteOne({ _id: _id });
  
      console.log(checkDelete);
  
      if (checkDelete.deletedCount > 0) {
        res.status(200).json(checkDelete);
      } else {
        res.status(400).json("Cannot delete contract");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = { getAllContract, createNewContract, updateContract, deleteContract};