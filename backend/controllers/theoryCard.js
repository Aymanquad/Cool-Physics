const TheoryCards = require('../models/TheoryCard');


//theory-cards data


// Add card func
const addTheoryCard = () => {
    const theoryCardsDocuments = Object.keys(theoryCardsData).map(id => ({
        id: parseInt(id),
        ...theoryCardsData[id]
    }));

    // Save each course to the database
    theoryCardsDocuments.forEach(theorycard => {
        const newTheoryCard = new TheoryCards(theorycard);
        newTheoryCard.save()
        .then(() => console.log(`Theorycard with ID ${theorycard.id} saved successfully.`))
        .catch(err => console.log(`Error saving tc with ID ${theorycard.id}:`, err));
    });
}

  
  

module.exports = { addTheoryCard };