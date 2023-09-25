# USER API DOCUMENTATION

## INTRODUCTION

 This API provides endpoints for creating, retrieving, updating, and deleting user records. 
 It is designed to be user-friendly and can be integrated into various applications that require basic person management functionality.

## API FEATURES
The User API offers the following features:
  Create a User:
  
          Create a new user record with a name.

Retrieve Users Information:

          Retrieve the record of the user stored in the database using their unique ID.

Update a users Information:

          Update a user's record by providing their unique ID.

Delete a user:

        Delete a user's record by specifying their unique ID.

## PREREQUISITES
Before you start using the User API, ensure you have the following:

  Node.js and npm installed on your system.
  MongoDB installed and running (if you are using MongoDB as your database).
  Basic knowledge of RESTful API concepts.

## GETTING STARTED
To begin using the User API, follow these steps:

1. Clone the GitHub repository: git clone https://github.com/Kmart002/jamortBackend
2. cd into hng-track2 folder if you used a command line to clone.
3. Install project dependencies using npm install.
4. Navigate to the server.js file.
5. Install and Import your mongodb to the server.js file: 
           require('dotenv').config()
          const express = require('express');
          const app = express();
          const port = process.env.PORT || 4001;
          
          const mongoose = require('mongoose');
          mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
          
          const db = mongoose.connection
          db.on('error', (error)=> console.error(error))
          db.once('open', ()=> console.log('Connected to database'))
          
          app.use(express.json())
          
          const usersRouter = require('./routes/route')
           app.use('/users', usersRouter)
           
           app.get('/api', (req,res)=>{
          res.json('success')
           })          
          app.listen(port,() =>console.log(`server is running on port ${port}`) )

6. Start the server using: npm server.js

## API ENDPOINTS
### Create a User

    HTTP Method: POST
    Endpoint: https://jamort-backend.onrender.com
    Description: Create a new person with a name property.
    Request Body:


          {
         "firstName": "Timi",
         "lastName": "Topsy",
         "userName": "james123",
         "email": "password@gmail.com",
         "phone": "12345531234",
         "techSchoolAttended": "anwa kdendj",
         "skillSet": "frontend",
         "internshipPackage": "Backend Development",
         "reasonToGetOnboarded": "i am good",
         "file": "jdnjedniefuneu"  
     }

     
   Response:
   
      Status Code: 201
      Body: 
       {
      "firstName": "Timi",
      "lastName": "Topsy",
      "userName": "james123",
      "email": "password@gmail.com",
      "phone": "12345531234",
      "techSchoolAttended": "anwa kdendj",
      "skillSet": "frontend",
      "file": "jdnjedniefuneu",
      "internshipPackage": "Backend Development",
      "reasonToGetOnboarded": "i am good",
      "_id": "6509b8f42373f9f3aae6eca2",
      "__v": 0
      }
      
 ### Retrieve a User
 
    HTTP Method: GET
     Endpoint: https://jamort-backend.onrender.com/users/:userId
     Description: Retrieve the record of person stored in the database.
     
      Response:
      Status Code: 201
      Body: 
          {
          "_id": "6509b8f42373f9f3aae6eca2",
          "firstName": "Timi",
          "lastName": "Topsy",
          "userName": "james123",
          "email": "password@gmail.com",
          "phone": "12345531234",
          "techSchoolAttended": "anwa kdendj",
          "skillSet": "frontend",
          "file": "jdnjedniefuneu",
          "internshipPackage": "Backend Development",
          "reasonToGetOnboarded": "i am good",
          "__v": 0
      }
    
### Update User Information
       
       HTTP Method: PUT
       Endpoint:  https://jamort-backend.onrender.com/users/:userId
       Description: Update a person's name by providing their unique ID.
       Request Body:
       {
           "firstName": "Walter",  // new first name
           "lastName": "John",     // new last name
           "userName": "james123",
           "email": "password@gmail.com",
           "phone": "12345531234",
           "techSchoolAttended": "anwa kdendj",
           "skillSet": "frontend",
           "internshipPackage": "Backend Development",
           "reasonToGetOnboarded": "i am good",
           "file": "jdnjedniefuneu"
           
       }
       
       Response:
       
         {
           "_id": "6509b8f42373f9f3aae6eca2",
           "firstName": "Walter",  
           "lastName": "John",    
           "userName": "james123",
           "email": "password@gmail.com",
           "phone": "12345531234",
           "techSchoolAttended": "anwa kdendj",
           "skillSet": "frontend",
           "file": "jdnjedniefuneu",
           "internshipPackage": "Backend Development",
           "reasonToGetOnboarded": "i am good",
           "__v": 0
       }
       
   ## Delete User
       
       HTTP Method: DELETE
       Endpoint: https://jamort-backend.onrender.com/users/:userId
       Description: Delete a person's record by specifying their unique ID.
       Response:
       Status Code: 201
       Body: 
           {
             "message": "Deleted Successfully"
             }

## KNOWN LIMITATIONS AND ASSUMPTIONS
  This API uses mongoDB atlas for demonstration purposes.
  Input validation is handled by simple IF statements. It is important to use more robust validation and error handling in a production application.
  No userAuth of any kind. Ensure secure access to your API in a real-world scenario.
  This documentation assumes that the developer is well acquainted with MongoDB/Mongoose, NodeJs and Express

## CONCLUSION
The User API simplifies the process of managing a users record within your application.
Whether you're building a personal information management system, a contact list, or any other application that requires person-related data, 
the User API can help you get started quickly.
