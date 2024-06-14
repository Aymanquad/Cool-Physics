const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const PORT = 3000; // Set the port to 3000 or desired port

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', function start(req, res, next) {
    res.send(`<h1>Hi there</h1>`); // Use res.send to send plain HTML
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
