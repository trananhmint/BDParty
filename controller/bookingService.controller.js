const bookingServiceModel = require("../model/bookingService.model");


const getAllBookingService = async (req, res) => {
    try {
        const bookingService = await bookingServiceModel.find({});

        res.status(200).json(bookingService);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createNewBookingService = async (req, res) => {
    try {
        const { customerID, serviceID, status } = req.body;

        const bookingService = new bookingServiceModel({
            customerID,
            serviceID,
            status,
        });

        await bookingService.save();

        if (bookingService) {
            res.status(200).json(bookingService);
        } else {
            res.status(400).json("Can not create booking services")
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const updatebookingService = async (req, res) => {
    try {
        const { _id, newStatus } = req.body;

        console.log(_id);
        console.log(newStatus);

        const checkUpdate = await bookingServiceModel.updateOne(
            { _id:_id },
            { status: newStatus}
        );

        if (checkUpdate.modifiedCount > 0) {
            res.status(200).json(checkUpdate);
        } else {
            res.status(400).json("Can not update user's status")
        }
    } catch (error) {
        res.status(500).json(error)
    }


}

const deleteBookingService = async (req, res) => {
    try {
        const _id = req.params.id;

        const deletedUser = await bookingServiceModel.deleteOne({ _id: _id });

        console.log(_id);


        if (deletedUser.deleteCount > 0) {
            res.status(200).json(deletedUser)
        } else {
            res.status(400).json("Can not delete booking")
        }

    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = { createNewBookingService, getAllBookingService, deleteBookingService, updatebookingService}