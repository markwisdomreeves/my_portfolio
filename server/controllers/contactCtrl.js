
const Contacts = require("../models/contactModel");
const asyncHandler = require("express-async-handler");


const contactCtrl = {
  // @desc    Send contact
  // @route   POST /api/contact
  // @access  Public
  createContact: asyncHandler (async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message)
        return res.status(400).json({error: "All fields are required"})

      if (!validateEmail(email))
        return res.status(400).json({error: "Please enter a valid email"})

      const contact = new Contacts({
        name: name,
        email: email,
        subject: subject,
        message: message
      })

      await contact.save()
      res.json({message: "Thanks for contacting me. I will get in touch with you sooner."})

    }catch(err) {
      return res.status(500).json({message: err.message})
    }
  })

}

// Email validation helper functions
function validateEmail(email) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}


module.exports = contactCtrl;
