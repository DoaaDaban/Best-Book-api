'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');

const server = express();
server.use(cors());

const PORT = process.env.PORT;

// const BookSchema= require('./Component/BookSchema');
const myBookModel= require('./Component/BookModel');



//MongoDB , To connect our server with mongoDB
mongoose.connect('mongodb://localhost:27017/Book-collection', {useNewUrlParser: true, useUnifiedTopology: true});

// to test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});



 // Routes
// http://localhost:3010/
server.get('/',homeHandler);
server.get('/books',getBooksHandler);

//Handlers
function homeHandler(req,res) {
  res.send('Home Route');
}

// http://localhost:3010/books?email=doaadaban993@gmail.com
function getBooksHandler(req,res) {
  const reqBookEmail = req.query.email;
  // search
  console.log(reqBookEmail)

  myBookModel.findOne({email:reqBookEmail},function(err,resultData){
      if(err) {
          console.log('Error');
      }
      else {
         //  console.log(resultData[0].books);
          console.log(resultData);
          res.send(resultData);
      }
  })
}

server.listen(PORT,() => {
  console.log(`Listening on PORT ${PORT}`);
})