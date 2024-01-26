const express = require("express");
const { getAllWallet, createNewWallet, updateWallet, deleteWallet } = require("../controller/wallet.controller");



const router = express.Router();
 router.get("/", getAllWallet);
 router.post("/",createNewWallet);
 router.put("/",updateWallet);
 router.delete("/:id", deleteWallet);

module.exports = router;