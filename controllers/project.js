const express = require('express');
const router = express.Router();
const Project = require('../models/project.js');
const projectData = require('../utilities/projectdata.js')

// Remember INDUCES

// Seeding...
router.get('/seed', async (req, res) => {
    await Project.deleteMany({})
    await Project.create(projectData);
    // res.redirect("/api/v1/music")
});


// Index
router.get('/', (req, res)=>{
    Project.find({}, (err, foundProject)=>{
        res.json(foundProject);
    });
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Project.findByIdAndRemove(req.params.id, (err, deletedProject)=>{
        res.json(deletedProject);
    });
});
// Update
router.put('/:id', (req, res)=>{
    Project.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedProject);
    });
});
// Create
router.post('/', (req, res)=>{
    Project.create(req.body, (err, createdProject)=>{
        res.json(createdProject); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Project.findById(req.params.id, (err, foundProject)=>{
        res.json(foundProject);
    });
});


module.exports = router;