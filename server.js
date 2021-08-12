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
mongoose.connect('mongodb://localhost:27017/Book-collection', {useNewUrlParser: true, useUnifiedTopology: true});

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
server.post('/addbook',addBookHandler);
// server.delete('/deleteBook/:index',deleteBookHandler);

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
res.send('test');
  console.log(req.body);

  const {title,description,image,status,email}= req.body;

  myBookModel.find({email:email},(err,resultData)=>{
    if(err){
      res.send('not working');
    }
    else
    {
      resultData[0].books.push({
        title: title,
        description: description,
        status: status,
        image: image,
      })
      resultData[0].save();
      res.send(resultData[0].books);
    }
  })
}



server.listen(PORT,() => {
  console.log(`Listening on PORT ${PORT}`);
})
