const express = require('express')
const router = express.Router();
const About = require('../models/About')


router.get("/getDetails",  async (req, res) => {
    try {

        const about = await About.find().sort({ createdAt: -1 });
        console.log(about.data)
        return res.send({
            success: true,
            data: about,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;