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
  origin: ["https://cool-physics.vercel.app", "http://localhost:3000", "http://localhost:5173"], // frontend Vercel deployment URL and local development
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json("backend habibi !");
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  const cardId = parseInt(id);

  if (isNaN(cardId)) {
    return res.status(400).json({ error: "Invalid card ID" });
  }

  Cards.findOne({ id: cardId })
    .then(card => {
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: "Card not found" });
      }
    })
    .catch(error => {
      console.log("Error occurred in finding card:", error);
      res.status(500).json({ message: 'Server error', error: error.message });
    });
});

// Route to get card by ID for theory/paradoxes
app.get('/theorycards/:id', (req, res) => {
  const { id } = req.params;
  const cardId = parseInt(id);

  if (isNaN(cardId)) {
    return res.status(400).json({ error: "Invalid card ID" });
  }

  TheoryCards.findOne({ id: cardId })
    .then(theorycard => {
      if (theorycard) {
        res.json(theorycard);
      } else {
        res.status(404).json({ error: "Card not found" });
      }
    })
    .catch(error => {
      console.log("Error occurred in finding theory card:", error);
      res.status(500).json({ message: 'Server error', error: error.message });
    });
});

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log('Connected to MongoDB !'); 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Still start the server even if DB connection fails for debugging
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} (without database connection)`);
    });
  });

module.exports = app; // Export the Express app