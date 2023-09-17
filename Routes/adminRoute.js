const express = require('express')
const router = express.Router();
const Admin = require('../models/Contact')


router.get("/getContact",  async (req, res) => {
    try {

        const contact = await Admin.find();
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