const Cards = require('../models/Card');


//cards data


// Add card func
const addCard = () => {
    const cardsDocuments = Object.keys(cardsData).map(id => ({
        id: parseInt(id),
        ...cardsData[id]
    }));

    // Save each course to the database
    cardsDocuments.forEach(card => {
        const newCard = new Cards(card);
        newCard.save()
        .then(() => console.log(`Card with ID ${card.id} saved successfully.`))
        .catch(err => console.log(`Error saving course with ID ${card.id}:`, err));
    });
}

  
  

module.exports = { addCard };