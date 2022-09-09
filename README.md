## Backend

----------
Backend routes for the App. Goal is to make a Pitch site for any and all pitches a user would want to keep organized.

----------

## Getting started / Prerequistes

### Express Installations
- npm init -y 
- npm i cors
- npm i dotenv
- npm i express
- npm i mongoose


### Mongoose
-----------
- In your .env PORT = 3000
- Add your MONG URI = (link)




### Create these files and folders

- server.js
- .env
- .gitignore ( move created .env and node_modules/ into here)

- (folder)Controller (Routes)
   -- Index.jsx
   -- Show.jsx
- (folder) models (Schema)
    --project.js
- (folder) utilities (Seed)
  -- projectdata.js



  ### Server.js starter
  -----
  - Place your Install requires, controllers, uses, and port at very bottom
  - make sure to call your controller to app.use it


  ### controllers/ project.js

  - Import Project schema from Models and projectdata.js from utilities
  ## Create routes in controller
  -----
  - Seeding
  - Index
  - Delete
  - Update
  - Create
  - Show


  ## in folder run nodemon

