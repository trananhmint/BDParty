const express = require("express");
const {
  getAllUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createNewUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
