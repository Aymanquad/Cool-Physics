const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const PORT = process.env.PORT || 5000; // Use environment variable for the port

const mongoUri = process.env.MONGO_URI;

const Cards = require('./models/Card');
const cardController = require('./controllers/card'); 

const TheoryCards = require('./models/TheoryCard');
const theoryCardController = require('./controllers/theoryCard'); 

// Middleware
app.use(cors({
  origin: ["https://cool-physics.vercel.app"], // frntend Vercel deployment URL
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json("backend habibi !");
});

// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;

  Cards.findOne({ id: id.trim() })
    .then(card => {
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: "Card not found" });
      }
    })
    .catch(error => {
      console.log("some err occured in finding");
      res.status(500).json({ message: 'Server error', error });
    });
});

// Route to get card by ID for theory/paradoxes
app.get('/theorycards/:id', (req, res) => {
  const { id } = req.params;

  TheoryCards.findOne({ id: id.trim() })
    .then(theorycard => {
      if (theorycard) {
        res.json(theorycard);
      } else {
        res.status(404).json({ error: "Card not found" });
      }
    })
    .catch(error => {
      console.log("some err occured in finding");
      res.status(500).json({ message: 'Server error', error });
    });
});

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log('Connected to MongoDB !'); 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = app; // Export the Express app