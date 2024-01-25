const express = require("express");
const { getAllPromotion, createNewPromotion, updatePromotion, deletePromotion } = require("../controller/promotion.controller");
const router = express.Router();

router.get("/",getAllPromotion);
router.post("/", createNewPromotion);
router.put("/", updatePromotion);
router.delete("/:id", deletePromotion);

module.exports = router;