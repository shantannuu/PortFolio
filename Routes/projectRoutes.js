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

router.get("/get-project-by-id/:id", async (req, res) => {
    try {

        const project = await Project.findById(req.params.id);
        return res.send({
            success: true,
            data: project
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.post("/addDescription", async (req, res) => {
    try {
        
        const project = await Project.findById(req.body._id).then(
            (project) => {
                if (!project) {
                  console.log('Project not found');
                  return;
                }

                project.description.push({
                    title: req.body.title,
                    content: req.body.content,
                })

                project.save();


            }
        );

        return res.send({
            success: true,
            data: project
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;