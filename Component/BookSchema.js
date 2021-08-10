'use strict'

const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model

// create a schema
const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    image : String
  });



module.exports = BookSchema