const express = require("express");
const router = express.Router();
const {
  getUser,
  getSingleUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../../Controllers/UserControllers/userControllers");

router.route("/").get(getUser).post(setUser);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
