const express = require("express");
const { createNewBookingService, getAllBookingService, deleteBookingService, updatebookingService} = require("../controller/bookingService.controller");
const router = express.Router();

router.post("/", createNewBookingService);
router.get("/",getAllBookingService);
router.put("/", updatebookingService);
router.delete("/:id", deleteBookingService);      

module.exports = router;