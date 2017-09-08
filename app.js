const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database")

// CONNECT TO DATABASE
mongoose.connect(config.database);

// MONGO DATABASE CONNNECT
mongoose.createConnection(config.database, {
  useMongoClient: true
});

const app = express();

const users = require("./routes/users");

// PORT NUMBER
const port = 3000;

// ALLOW CORS
app.use(cors());

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());

// USERS ROUTE
app.use('/users', users);

// GET REQUEST AT ROOT
app.get('/', (req, res) => {
  res.send('Invalid end point')
})

// START SERVER
app.listen(port, () => {
  console.log('server started on port ' + port)
});
