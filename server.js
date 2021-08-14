'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');

const server = express();
server.use(cors());

server.use(express.json()); // 3shan l post droree

const PORT = process.env.PORT;

// const BookSchema= require('./Component/BookSchema');
const userModel= require('./Component/BookModel');

//MongoDB , To connect our server with mongoDB
mongoose.connect('mongodb://localhost:27017/Book-collections', {useNewUrlParser: true, useUnifiedTopology: true});

// to test connection
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });


 // Routes
// http://localhost:3010/
server.get('/',homeHandler);
server.get('/books',getBooksHandler);
server.post('/addbooks',addBookHandler);
server.delete('/deleteBook/:index',deleteBookHandler);

//Handlers
function homeHandler(req,res) {
  res.send('Home Route');
}

// http://localhost:3010/books?email=
function getBooksHandler(req,res) {
  const reqBookEmail = req.query.email;
  // search
  userModel.find({email:reqBookEmail},function(err,resultData){
      if(err) {
          console.log('Error');
      }
      else {
          console.log(resultData[0].books);
          res.send(resultData[0].books);
      }
  })
}

//http://localhost:3010/addbook?..
function addBookHandler(req,res){

 

  const {title,image,description,status,email}= req.body;

  userModel.find({email:email},(err,resultData)=>{
    if(err){
      res.send('not working');
      console.log(`didnt work the post method `);
    }
    else
    {
      
        
        resultData[0].books.push({
          title: title,
          description: description,
          image:image,
          status: status,
        })
        // console.log(resultData[0]);
        resultData[0].save();
        res.send(resultData[0].books);
      
    
    }
  });
}


function deleteBookHandler(req,res) {

  try {

    const idx = req.params.index;
    const email = 'shkokany98@gmail.com' ;
console.log(idx);
    userModel.findOne({email:email}, (error,deleteData)=>{
let arr = deleteData.books;
arr.splice(idx,1);
arr.save();
      res.json(arr)
    })

  }
  catch (error){
res.send(error);
  }
  
}



server.listen(PORT,() => {
  console.log(`Listening on PORT ${PORT}`);
})
