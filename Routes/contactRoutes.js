const express = require('express')
const router = express.Router();
const Contact = require('../models/Contact')


router.post("/contactus",  async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        return res.send({
            success: true,
            message:"Contact Information Sent",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;