

// ## GIVEN ##

// important: never use the variable directly in other javascript files!!!!
const _cards = [];

// important: never use the variable directly in other javascript files!!!!
let _rarityList;


// Loads a set of cards into the _cards array
function loadSet(set){
    set.forEach(card => {
        _cards.push(card);
    });
}

// Retrieves the current list of cards stored in _cards.
function getCards(){
    
}

// Searches for a card by its ID in the _cards array. If found, returns the card object; otherwise, returns null.
function findCardById(id){
    for(set in config.sets) {
        if (_allCards[set].find(card => card.id === id) != undefined){
            return _allCards[set].find(card => card.id === id);
        }
    }    
}


// Generates a booster pack of cards based on a predefined structure from the config object. It selects unique and random cards based on rarity and adds them to the booster pack.
// An array of (unqiue and random) card objects representing a booster pack.
function getBooster(){
    let cards = [];
    for (let i = 0; i < Object.keys(config.booster.structure).length; i++) {
        getRandomCards(Object.keys(config.booster.structure)[i], Object.values(config.booster.structure)[i]).forEach(card => {
            cards.push(card);
        });
    }
    
    return cards;
}

// Selects a random set of cards based on rarity. It ensures that no duplicates or basic land  are included .
function getRandomCards(rarity, nrOfCards){
    let cards = [];
    let currentCard;
    for (let cardIndex = 0; cardIndex < nrOfCards; cardIndex++) {
        do {
            currentCard = getRandomListItem(_allCards[currentSet].filter(card => card.rarity === 'common'));
        } while (cards.includes(currentCard.id) || isBasicLand(currentCard));
        cards.push(currentCard.id);
    }
    return cards;
}

// Organizes all cards from _cards by their rarity. If this has been done before, it returns the previously created list.
function getCardListByRarity(){
    
}

function isBasicLand(card){
    if (card.type_line.includes('Basic Land')){
        return true;
    }
    return false;
}

//  Retrieves all basic land cards from _cards.
function getBasicLands(){    
    
}


// ## YOUR ADDED FUNCTIONS ##
function displayCard(card) {
    let dynamicHTML = `
    <img class="card"
    src="${card.image}"
    alt="${card.name}" title="${card.name}"
    data-id="${card.id}">
    `;
    
    return dynamicHTML;
}

function findCardInAllCardsById(id){
    for(set in config.sets) {
        if (_allCards[set].find(card => card.id === id) != undefined){
            return _allCards[set].find(card => card.id === id);
        }
    }
    return null;
}