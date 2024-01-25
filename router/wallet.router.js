const express = require("express");
const {
  getAllWallet,
  createNewWallet,
  deleteWallet,
  updateWallet,
} = require("../controller/wallet.controller");

const router = express.Router();

router.get("/", getAllWallet);
router.post("/", createNewWallet);
router.put("/", updateWallet);
router.delete("/:id", deleteWallet);

module.exports = router;