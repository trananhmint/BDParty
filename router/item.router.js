const express = require("express");
const {
  getAllItem,
  createNewItem,
  deleteItem,
  updateItem,
} = require("../controller/wallet.controller");

const router = express.Router();

router.get("/", getAllItem);
router.post("/", createNewItem);
router.put("/", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
