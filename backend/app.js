const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const PORT = "mongodb+srv://mohammedaymanquadri:Ayman2004@cluster0.txcvfxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CoolPhysics";

const Cards = require('./models/Card');
const cardController = require('./controllers/card'); 

const TheoryCards = require('./models/TheoryCard');
const theoryCardController = require('./controllers/theoryCard'); 

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data for Theory-cards




// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  //const card = cards[id];

  
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
  //const Theorycard = Theorycards[id];

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


// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
mongoose.connect(PORT)
    .then(() => { 
        console.log('Connected to MongoDB !'); 

        //to add cards
        //cardController.addCard();

        //to add theorycards
        //theoryCardController.addTheoryCard();

        app.listen(5000);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
