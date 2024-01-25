const express = require("express");
const { createNewService, getAllService, updateService, deleteService } = require("../controller/service.controller");




const router = express.Router();

router.post("/", createNewService);
router.get("/", getAllService);
router.put("/", updateService);
router.delete("/:id", deleteService)

module.exports = router;