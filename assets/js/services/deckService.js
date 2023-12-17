// important: never use the variable directly in other javascript files!!!!
let _cardPool = [];

// important: never use the variable directly in other javascript files!!!!
let _deck = [];


// Retrieves a sorted list of cards from the card pool, filtered by a search string and types.
function getFilteredCardPool(search, types){
    if (types.length === 0) 
        return [];
    else if (search === '')
        return filterCardsByType(_cardPool, types);
    else
        return filterCards(_cardPool, search, types);
}

// Retrieves a sorted list of cards from the deck, filtered by a search string and types.
function getFilteredDeck(search, types){
    
}

// Retrieves the complete deck.
function getDeck(){
    return _deck;
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
    _cardPool.forEach(card => {
        if (card.id === cardId){
            return card;
        }
    });
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
    return filterCardsByType(filterCardsBySearch(cards, search), types);
}

function filterCardsByType(cards, types){
    let filteredCards = [];
    for (card in cards) {
        let isOfType = false;
        for (type in types) {
            if (types[type] === '') {
                if (cards[card].type_line.includes('Land'))
                    isOfType = true;
            }
            else if (cards[card].type_line.includes(types[type])){
                isOfType = true;
            }
        }
        if (isOfType){
            filteredCards.push(cards[card]);
        }
    }
    return filteredCards;
}

function filterCardsBySearch(cards, search){
    // search text within name, rarity, full type_line, oracle text
    let filteredCards = [];
    for (card in cards){
        if (cards[card].name.toLowerCase().includes(search.toLowerCase()) || cards[card].rarity.toLowerCase().includes(search.toLowerCase()) || cards[card].type_line.toLowerCase().includes(search.toLowerCase()) || cards[card].card_face.oracle_text.toLowerCase().includes(search.toLowerCase())){
            filteredCards.push(cards[card]);
        }
    }

    return filteredCards;
}


// ## YOUR ADDED FUNCTIONS ##