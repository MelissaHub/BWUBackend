// Dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')


// Environment Variables
const app = express();
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

const db = mongoose.connection

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)


// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))
// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!





// Routes
// const userController = require('./controllers/user.js')
const projectController = require('./controllers/project.js')

// app.use('/user', userController);
app.use('/project', projectController)


// app.get('/', (req, res) => {
//   res.send('Home Page');
// })


// //login form
// app.get('/login', (req, res) => {
//   res.send(userData)
// })
// //only local for if statement


//edit
// app.get('/:id/edit', (req, res) => {

//   Project.findById(req.params.projectid, (err, foundProjects) => {
//     res.send(foundProjects)
//     if (!err) {
//       res.send(foundProjects)
//     }  
//     else {
//         res.send({message:err.message})
//     }
//   })
//   //gives all projects with userid
// })


//create /update
// app.post('/create', (req, res) => {
//   Project.create(req.body, (err, createdProjects) => {
//     res.redirect('/:id')
//   })
// })

// app.delete('/:id', (req, res) => {

//   Project.findOneAndRemove(req.params.id, (err, data) => {
//     res.redirect('/:id')
//   })

// })


// app.get('/seed', async (req, res) => {
//   await User.deleteMany({});
//   await User.insertMany(userData);
//   res.send('done!');
// });

// app.get('/seed', async (req, res) => {
//   await Project.deleteMany({});
//   await Project.insertMany(projectData);
//   res.send('done!');
// });

// //projectshow
// app.get('/user/:id/project/:projectid', (req, res) => {

//   Project.findById(req.params.projectid, (err, foundProjects) => {
//     res.send(foundProjects)
//   })
//   //gives all projects with userid
// })


// //user profile show
// app.get('/user/:id', (req, res) => {

//   Project.find({ userid: req.params.id }, (err, allProjects) => {
//     res.send(allProjects)
//   })
//   //gives all projects with userid
// })

// //put
// app.put('/user/:id/project/:projectid', (req, res) => {

//   Project.findByIdAndUpdate(req.params.projectid,req.body,{new:true}, (err, allProjects) => {
//     res.redirect(`/user/:id/project/${req.params.projectid}`)
//   })
//   //gives all projects with userid
// })







app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})