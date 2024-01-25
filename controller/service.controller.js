const serviceModel = require("../model/service.model");

const getAllService = async (req, res) => {
    try {
        const services = await serviceModel.find({});

        // find / findOne({_id}) / find({status: "Active"})

        res.status(200).json(services);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createNewService = async (req, res) => {
    try {
        const { name, creator, imgURL, category, price, description, status } = req.body;

        const service = new serviceModel({
            name,
            creator,
            imgURL,
            category,
            price,
            description,
            status,
        });

        await service.save();

        if (service) {
            res.status(200).json(service);
        } else {
            res.status(400).json("Cannot create service");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateService = async (req, res) => {
    try {
        const { _id, newDescription } = req.body;
        const checkUpdate = await serviceModel.updateOne(
            { _id },
            { description: newDescription }
        );


        if (checkUpdate.modifiedCount > 0) {
            res.status(200).json(checkUpdate);
        } else {
            res.status(400).json("Cannot update service");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteService = async (req, res) => {
    try {
        const _id = req.params.id;

        const checkDelete = await serviceModel.deleteOne({ _id: _id });

        console.log(checkDelete);

        if (checkDelete.deletedCount > 0) {
            res.status(200).json(checkDelete);
        } else {
            res.status(400).json("Cannot delete service");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { createNewService, getAllService, updateService, deleteService }