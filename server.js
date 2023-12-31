const mongoose = require('mongoose');

const dotenv = require('dotenv')

const app = require('./app');
const { Double } = require('mongodb');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD); 
mongoose.connect(DB, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log("DB Connection successful !");
});


// const testpost = new Post({
//   title: "The Hiker",
//   content: "Dont hide the power of vision in your heart",
//   author: "Paul David",
//    page: 345,
//   rating:4.8
// });

// testpost.save().then((doc) => {
//   console.log(doc);
// }).catch((err) =>{
//   console.log("ERROR :" ,err)
// })

// console.log(process.env);
// Specify a port number for the server
const port = process.env.PORT || 5000;

// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});