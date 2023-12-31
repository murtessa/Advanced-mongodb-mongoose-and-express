// Import the express module
const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
// Create an instance of the express application
const app = express();

// Middleware to parse JSON in request body
app.use(express.json()); 

app.use ((req, res, next) => {
  console.log( " Hello from the middleWare awesome ");
  next();
});
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){

  app.use(morgan('dev'));
}







// app.get('/posts', getAllposts);


// app.get('/posts/:id', getPosts);


// app.post('/posts', postUser);


// app.put('/posts/:id',putUser );


// app.delete('/posts', deleteAllPost);


// app.delete('/posts/:id',deletePost );





  app.use('/posts', postRouter);
  app.use('/users', userRouter);

// Create a route for the root
app.get('/', (req, res) => {
  res.send('Hello, this is the root!');
});

module.exports = app;
