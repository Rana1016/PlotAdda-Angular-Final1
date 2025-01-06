// routes/register.js
var express = require('express');
var router = express.Router();
const User = require("../models/users.model");

router.post('/register', async function(req, res) {
    const { name, email, password, role, city, agency_name, company_email,  phone,  agency_address, profile_pic } = req.body;

    // if (password !== confirm_password) {
    //     return res.status(400).send({ message: "Passwords do not match" });
    // }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).send({ message: "Email already registered" });
        }
        user = new User({ name, email, password, role, city, agency_name, company_email,  phone,  agency_address, profile_pic  });
        await user.save();
        res.status(201).send({ message: "User registered successfully", userId: user._id });
    } catch (error) {
        res.status(500).send({ message: "Registration failed", error: error.message });
    }
});

module.exports = router;
