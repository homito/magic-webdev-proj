let _searchPool = '';
let _typesPool = Array.from(config.mana_types);
let _searchDeck = '';
let _typesDeck = Array.from(config.mana_types);

// ## GIVEN ##

function initDeckbuildingPage(){
    document.querySelector('#search-pool').addEventListener('input', searchFilterInPool);
    document.querySelector('#search-deck').addEventListener('input', searchFilterInDeck);
    let manaPool = document.querySelectorAll('.card-pool button.mana');
    manaPool.forEach((button) => {
        button.addEventListener('click', typeFilterInPool);
    });
    let manaDeck = document.querySelectorAll('.deck button.mana');
    manaDeck.forEach((button) => {
        button.addEventListener('click', typeFilterInDeck);
    });

    const section = document.querySelector('#deck-building');
    navigateToPage(section);

    renderCardPool();
    renderDeck();
}

function renderCardPool(){
    //display the cards in the pool
    const ul = document.querySelector('.container.cards.scrollable');
    ul.innerHTML = '';
    

    let cards = getFilteredCardPool(_searchPool, _typesPool); 
    for (card in cards) {
        const li = document.createElement('li');
        li.innerHTML = displayCard(cards[card]);
        li.setAttribute('data-sequence-id', card);
        ul.appendChild(li);
    }

    let cardImg = document.querySelectorAll('.card-pool .card');
    cardImg.forEach((card) => {
        card.addEventListener('mouseover', showCardDetail);
    });
    cardImg.forEach((card) => {
        card.addEventListener('dblclick', moveCardToDeck);
    });

    //display the nb of cards in the pool
    document.querySelector('h3').innerHTML = `Card pool ${cards.length}`;
}

function renderDeck(){
    const deck = getFilteredDeck(_searchDeck, _typesDeck);

    const zones = document.querySelectorAll('.deck ul');
    for (zone in zones) {
        zones[zone].innerHTML = '';
    }
    for (card in deck) {
        const li = document.createElement('li');
        li.innerHTML = displayCard(deck[card]);
        li.setAttribute('data-sequence-id', 'undefined');
        zones[deck[card].cmc].appendChild(li);
    }

    let cardImg = document.querySelectorAll('.deck .card');
    cardImg.forEach((card) => {
        card.addEventListener('mouseover', showCardDetail);
    });
    cardImg.forEach((card) => {
        card.addEventListener('dblclick', moveCardToPool);
    });

    //display the nb of cards in the deck
    document.querySelector('.deck h3').innerHTML = `Deck ${deck.length}`;
}

function renderDeckZones(){

}

function showCardDetail(e){
    e.preventDefault();
    const errorMessages = [];

    document.querySelector('.card-detail img').src = e.target.currentSrc;
}

function moveCardToDeck(e){
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;
    const cardId = target.dataset.id;

    moveCardFromPoolToDeck(cardId);
    renderCardPool();
    renderDeck();
    renderDeckZones();
}

function moveCardToPool(e){
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;
    const cardId = target.dataset.id;

    moveCardFromDeckToPool(cardId);
    renderCardPool();
    renderDeck();
    renderDeckZones();
}


// ## YOUR ADDED FUNCTIONS ##
function searchFilterInPool(e) {
    e.preventDefault();
    const errorMessages = [];

    _searchPool = e.target.value;

    renderCardPool();
}

function typeFilterInPool(e) {
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;

    if (target.classList.value.includes('selected')) {
        target.classList.remove('selected');
        _typesPool.splice(_typesPool.indexOf(target.dataset.mana), 1);
    }
    else {
        target.classList.add('selected');
        _typesPool.push(target.dataset.mana);        
    }

    renderCardPool();
}

function searchFilterInDeck(e) {
    e.preventDefault();
    const errorMessages = [];

    _searchDeck = e.target.value;

    renderDeck();
}

function typeFilterInDeck(e) {
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;

    if (target.classList.value.includes('selected')) {
        target.classList.remove('selected');
        _typesDeck.splice(_typesDeck.indexOf(target.dataset.mana), 1);
    }
    else {
        target.classList.add('selected');
        _typesDeck.push(target.dataset.mana);
    }

    renderDeck();
}