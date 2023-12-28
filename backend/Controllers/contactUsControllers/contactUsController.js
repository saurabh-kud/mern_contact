const asyncHandler = require("express-async-handler");

const ContactUs = require("../../models/contactUsModel");

// create a user in database
const createContactUs = asyncHandler(async (req, res) => {
  //if user not put name or email or phone number

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400);
    throw new Error("name email and message number is required");
  }

  //setting sended data into database
  const userSet = await ContactUs.create({
    name,
    email,
    message,
  });
  res.status(200).json(userSet);
});

module.exports = createContactUs;
