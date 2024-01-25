const promotionModel = require("../model/bookingService.model");


const getAllPromotion = async (req, res) => {
    try {
        const promotion = await promotionModel.find({});

        res.status(200).json(promotion);

    } catch (error) {
        res.status(500).json(error);
    }

}

const createNewPromotion = async (req, res) => {
    try {
        const { percent, min, max, require, status } = req.body

        const promotion = new promotionModel({
            percent,
            min,
            max,
            require,
            status
        })

        await promotion.save();

        if (promotion) {
            res.status(200).json(promotion);
        } else {
            res.status(400).json("Can not create prommotion");
        }


    } catch (error) {
        res.status(500).json(error);
    }
}

const updatePromotion = async(req, res) =>{
    try {
        const{_id, newMin} = req.body;

        console.log(_id);
        console.log(newMin);
        

        const checkUpdate = await promotionModel.updateOne(
            { _id: _id },
            { $set:{min : newMin}}
        );

        if(checkUpdate.modifiedCount > 0 ){
            res.status(200).json(checkUpdate);
        }else{
            res.status(400).json('Can not update Promotion');
        }

    }catch (error) {
        res.status(500).json(error);
    }
}

const deletePromotion = async (req, res) =>{
    try{
        const _id = req.params.id;
        
        const deletePromotion = await promotionModel.deleteOne({_id: _id});

        console.log(_id);

        if(deletePromotion.deleteCount > 0){
            res.status(200).json(deletePromotion)
        }else{
            res.status(400).json("Can not delete Promotion")
        }

    }catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllPromotion, createNewPromotion, updatePromotion, deletePromotion};

