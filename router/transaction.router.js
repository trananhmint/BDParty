const express = require("express");
const {
  getAllTransaction,
  createNewTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controller/transaction.controller");

const router = express.Router();

router.get("/", getAllTransaction);
router.post("/", createNewTransaction);
router.put("/", updateTransaction);
router.delete("/", deleteTransaction);

module.exports = router;
