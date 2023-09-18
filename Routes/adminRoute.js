const express = require('express')
const router = express.Router();
const Contact = require('../models/Contact')
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("/Admin-register", async (req, res) => {
    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                success: false,
                message: "User already exists",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;

        const newUser = new Admin(req.body);
        await newUser.save();
        return res.send({
            success: true,
            message: "Admin Created Successfully !",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/Admin-login", async (req, res) => {
    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists !",
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {
            return res.send({
                success: false,
                message: "Invalid Password",
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.jwt_token, { expiresIn: "1d" })

        return res.send({
            success: true,
            message: "Login Successfully !",
            data: token,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/getContact",  async (req, res) => {
    try {

        const contact = await Contact.find();
        console.log(contact.data)
        return res.send({
            success: true,
            data: contact,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})



module.exports = router;