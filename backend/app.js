const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000; 

// Dummy data
const cards = {
  0: {
    id: 0,
    title: "Sample Card 0",
    content: "This is the content of card 1.",
    image: "https://via.placeholder.com/150",
    videoLink: "https://example.com/video1"
  },
  1: {
    id: 1,
    title: "Sample Card 1",
    content: "This is the content of card 1.",
    image: "https://via.placeholder.com/150",
    videoLink: "https://example.com/video1"
  },
  2: {
    id: 2,
    title: "Sample Card 2",
    content: "This is the content of card 2.",
    image: "https://via.placeholder.com/150",
    videoLink: "https://example.com/video2"
  }
};

// Middleware
app.use(cors());
app.use(express.json());

// Route to get card by ID
app.get('/cards/:id', async (req, res) => {
  const { id } = req.params;
  const card = cards[id];

  console.log("id is ..",id);

  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ error: "Card not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
