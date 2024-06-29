const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const cards = {
  0: {
    id: 0,
    title: "Gravity",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    videoLink: "https://example.com/video1"
  },
  1: {
    id: 1,
    title: "Relativity",
    content: "This is the content of card 1.",
    videoLink: "https://example.com/video1"
  },
  2: {
    id: 2,
    title: "Black Holes",
    content: "This is the content of card 2.",
    videoLink: "https://example.com/video2"
  },
  3: {
    id: 3,
    title: "Dark Matter",
    content: "This is the content of card 1.",
    videoLink: "https://example.com/video1"
  },
  4: {
    id: 4,
    title: "Plasma Physics",
    content: "This is the content of card 1.",
    videoLink: "https://example.com/video1"
  },
  5: {
    id: 5,
    title: "Gyroscopic Motion",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    videoLink: "https://example.com/video2"
  },
  6: {
    id: 6,
    title: "Quantum Mechanics",
    content: "This is the content of card 2.",
    videoLink: "https://example.com/video2"
  }
};

// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  const card = cards[id];

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
