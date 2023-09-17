const express = require('express')
const router = express.Router();
const Project = require('../models/Project')


router.post("/post-project",  async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        return res.send({
            success: true,
            message:"Project Information Sent",
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/getProjectDetails",  async (req, res) => {
    try {

        const project = await Project.find().sort({ createdAt: -1 });
        console.log(project.data)
        return res.send({
            success: true,
            data: project,
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;