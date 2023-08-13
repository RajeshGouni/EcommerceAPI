const express = require('express');
const app = express();
const tasks = require('./routes/products');
const port = 3000;
const db = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

//Routes
app.use('/products',require('./routes/products'))

app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is Running Perfectly: ${port}`);
  });

