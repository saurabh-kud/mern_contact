const express = require("express");
const router = express.Router();
const ContactUs = require("../../Controllers/contactUsControllers/contactUsController");
const { protect } = require("../../middleware/userAuthMiddleware");

router.route("/").post(ContactUs);
module.exports = router;
