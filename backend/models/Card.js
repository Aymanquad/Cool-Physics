const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cardSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content1: { type: String, required: true },
  content2: { type: String, required: true },
  content3: { type: String, required: true },
  videoLink: { type: String, required: true },
});

const Cards = mongoose.model('Card', cardSchema);
module.exports = Cards;