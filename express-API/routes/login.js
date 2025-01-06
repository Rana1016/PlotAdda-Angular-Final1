// routes/login.js
var express = require('express');
var router = express.Router();
const User = require("../models/users.model");
const bcrypt = require("bcryptjs");

router.post('/login', async function(req, res) {
    try {
        const { email, password } = req.body;
        console.log("in api",{email,password})
        const user = await User.findOne({ email });

        console.log('api', user)
        // if (!user || !(await bcrypt.compare(password, user.password))) {
        //     return res.status(401).send({ message: "Invalid credentials" });
        // }
        res.send({ message: "Logged in successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Login failed", error: error.message });
    }
});

module.exports = router;
