'use strict'

const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model

const BookSchema= require('./BookSchema')
//compile the schema into a model
// const myBookModel = mongoose.model('Book', BookSchema);

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [BookSchema] // a field that is an array of cat Schemas 
  });

  const userModel = mongoose.model('users', userSchema);
  mongoose.set('useCreateIndex', true);


function seedUserCollection() {
    const doaa = new userModel({
        email: 'doaadaban993@gmail.com',
        books : [
            {
                title: `Attack on Titan 1`,
                description: ` humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind`,
                status: `action`,
                image : 'https://i.pinimg.com/originals/e4/2e/66/e42e66591377e4719b9ba4fc44123ddd.jpg'
            },
            {
                title: `My Hero Academia 1`,
                description:`Midoriya inherits the superpower of the world's greatest hero, but greatness won't come easy.`,
                status: `comidy`,
                image : 'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
            },
            {
                title: `The Promised Neverland 1`,
                description: `The children of the Grace Field House orphanage must escape a macabre fate before it's too late.`,
                status: `drama & horror`,
                image :'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
            }
        ]
    })

    const khair = new userModel({
        email: 'shkokany98@gmail.com',
        books : [
            {
                title: `Attack on Titan 2`,
                description: ` humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind`,
                status: `action`,
                image :'https://i.pinimg.com/originals/e4/2e/66/e42e66591377e4719b9ba4fc44123ddd.jpg',
               
            },
            {
                title: `My Hero Academia 2`,
                description:`Midoriya inherits the superpower of the world's greatest hero, but greatness won't come easy.`,
                status: `comidy`,
                image :'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'

            },
            {
                title: `The Promised Neverland 2`,
                description: `The children of the Grace Field House orphanage must escape a macabre fate before it's too late.`,
                status: `drama & horror`,
                image : 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'

            }
        ]
    })
    console.log(doaa);
    doaa.save();
    khair.save();
}

// seedUserCollection();

 module.exports =userModel;