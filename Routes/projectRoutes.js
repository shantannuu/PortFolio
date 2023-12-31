const express = require('express')
const router = express.Router();
const Project = require('../models/Project')
const authMiddleware = require('../controllers/authMiddleware')


router.post("/post-project", authMiddleware ,async (req, res) => {
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

router.post("/addDescription", authMiddleware ,async (req, res) => {
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

router.put("/update-Project-Details/:id", authMiddleware ,async (req, res) => {
    try {
        
        await Project.findByIdAndUpdate(req.params.id, req.body);
        return res.send({
            success: true,
            message: "Project Updated Successfully !"
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

router.put("/update-Project-Description/:id", authMiddleware ,async (req, res) => {
    try {
        
        await Project.findByIdAndUpdate(req.params.id, req.body);
        return res.send({
            success: true,
            message: "Project Description Updated Successfully !"
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
})

module.exports = router;