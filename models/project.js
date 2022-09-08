const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    img1:String,
    img2:String, // How to set this up?
    img3:String, // How to set this up?
     // How to set this up?
    // projectid: String,
    // userid: String
    //parse
    
});

const Project = mongoose.model('Project', projectSchema)

module.exports = Project