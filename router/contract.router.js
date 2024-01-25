const express = require("express");
const { getAllContract, createNewContract, updateContract, deleteContract } = require("../controller/contract.controller");

const router = express.Router();

router.get("/", getAllContract);
router.post("/", createNewContract);
router.put("/", updateContract);
router.delete("/", deleteContract);

module.exports = router;