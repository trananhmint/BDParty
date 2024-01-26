const express = require("express");
const {
  getAllPayment,
  createdPayment,
  updatePayment,
  deletePayment,
} = require("../controller/payment.controller");

const router = express.Router();

router.get("/", getAllPayment);
router.post("/", createdPayment);
router.put("/", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
