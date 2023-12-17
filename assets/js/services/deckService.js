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
    if (types.length === 0)
        return [];
    else if (search === '')
        return filterCardsByType(_deck, types);
    else
        return filterCards(_deck, search, types);
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
    for(card in _cardPool) {
        if (_cardPool[card].id === cardId){
            _deck.push(_cardPool[card]);
            if (_cardPool[card].type_line.includes('Basic Land'))
                return;
            _cardPool.splice(card, 1);
            return;
        }
    }
    
}

function moveCardFromDeckToPool(cardId){
    for(card in _deck) {
        if (_deck[card].id === cardId){
            if (_deck[card].type_line.includes('Basic Land')) {
                _deck.splice(card, 1);
                return;
            }
            _deck.splice(card, 1);
            _cardPool.push(_deck[card]);
            return;
        }
    }    
}

function getCreatureCount(){
    let count = 0;
    _deck.forEach(card => {
        if (card.type_line.includes('Creature')){
            count++;
        }
    });
    return count;
}

function getLandCount(){
    let count = 0;
    _deck.forEach(card => {
        if (card.type_line.includes('Land')){
            count++;
        }
    });
    return count;
}

function getNoneCreatureNoneLandCount(){
    let count = 0;
    _deck.forEach(card => {
        if (!card.type_line.includes('Land') && !card.type_line.includes('Creature')){
            count++;
        }
    });
    return count;
}

// Counts the occurrence of each mana type in the deck.
function getManasCount(){
    let manas = {
        white: 0,
        blue: 0,
        black: 0,
        red: 0,
        green: 0,
        colorless: 0
    };

    _deck.forEach(card => {
        if (card.colors.length === 0){
            manas.colorless++;
        }
        else {
            card.colors.forEach(color => {
                switch (color) {
                    case 'W':
                        manas.white++;
                        break;
                    case 'U':
                        manas.blue++;
                        break;
                    case 'B':
                        manas.black++;
                        break;
                    case 'R':
                        manas.red++;
                        break;
                    case 'G':
                        manas.green++;
                        break;
                }
            });
        }
    });

    return manas;
}

function filterCards(cards, search, types){
    return filterCardsByType(filterCardsBySearch(cards, search), types);
}

function filterCardsByType(cards, types){
    let filteredCards = [];
    for (card in cards) {
        let isOfType = false;
        for (type in types) {            
            if (cards[card].colors.includes(types[type]) && types[type] !== ''){
                isOfType = true;
            }
            else if (cards[card].type_line.includes('Land') && types[type] === ''){
                filteredCards.push(cards[card]);
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
function getManasCountPercentages() {
    if (_deck.length === 0)
        return {
            white: 0,
            blue: 0,
            black: 0,
            red: 0,
            green: 0,
            colorless: 0
        };
        
    let manas = getManasCount();
    let total = manas.white + manas.blue + manas.black + manas.red + manas.green + manas.colorless;
    manas.white = Math.round(manas.white / total * 100);
    manas.blue = Math.round(manas.blue / total * 100);
    manas.black = Math.round(manas.black / total * 100);
    manas.red = Math.round(manas.red / total * 100);
    manas.green = Math.round(manas.green / total * 100);
    manas.colorless = Math.round(manas.colorless / total * 100);
    return manas;
}

function getBasicLandsInPool() {
    let basicLands = [];
    for (card in _allCards[subscriptionData.get('set')]) {
        if (_allCards[subscriptionData.get('set')][card].type_line.includes('Basic Land'))
            _cardPool.push(_allCards[subscriptionData.get('set')][card]);
    }
}