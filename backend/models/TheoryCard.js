const mongoose = require('mongoose');

const theoryCardSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content1: { type: String, required: true },
  content2: { type: String, required: true },
  content3: { type: String, required: true },
  videoLink: { type: String, required: true },
});

module.exports = mongoose.model('TheoryCard', theoryCardSchema);
