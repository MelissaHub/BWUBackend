const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    Image: Array, // How to set this up?
    
});

const Project = mongoose.model('Project', projectSchema)

module.exports = Project