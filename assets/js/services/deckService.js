// important: never use the variable directly in other javascript files!!!!
let _cardPool = [];

// important: never use the variable directly in other javascript files!!!!
let _deck = [];


// Retrieves a sorted list of cards from the card pool, filtered by a search string and types.
function getFilteredCardPool(search, types){
    return filterCards(_cardPool, search, types);
}

// Retrieves a sorted list of cards from the deck, filtered by a search string and types.
function getFilteredDeck(search, types){
    
}

// Retrieves the complete deck.
function getDeck(){

}

// Retrieves the complete CardPool.
function getCardPool(){
    return _cardPool;
}

 

function defaultSort(cards){
    
}

function addCardsToCardPool(cards){
    cards.forEach(card => {
        _cardPool.push(card);
    });
}

function getBiggestManaCostFromCardPool(){    
    
}

function getCardFromPool(cardId){
    
}

function getCardFromDeck(cardId){
    
}

function moveCardFromPoolToDeck(cardId){
    
    
}

function moveCardFromDeckToPool(cardId){
    
}

function getCreatureCount(){
    
}

function getLandCount(){
    
}

function getNoneCreatureNoneLandCount(){
    
}

// Counts the occurrence of each mana type in the deck.
function getManasCount(){
    
}

function filterCards(cards, search, types){
    return filterCardsBySearch(filterCardsByType(cards, types), search);
}

function filterCardsByType(cards, types){
    let filteredCards = [];
    for (card in cards) {
        for (type in types) {
            if (cards[card].type_line.includes(types[type])){
                filteredCards.push(cards[card]);
            }
        }
    }
    return filteredCards;
}

function filterCardsBySearch(cards, search){
    // search text within name, rarity, full type_line, oracle text
    let filteredCards = [];
    for (card in cards){
        if (cards[card].name.includes(search) || cards[card].rarity.includes(search) || cards[card].type_line.includes(search) || cards[card].card_face.oracle_text.includes(search)){
            filteredCards.push(cards[card]);
        }
    }

    return filteredCards;
}


// ## YOUR ADDED FUNCTIONS ##