let _searchPool = '';
let _typesPool = config.mana_types;

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

    addCardsToCardPool(getCards());
    renderCardPool();
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

    //display the nb of cards in the pool
    document.querySelector('h3').innerHTML = `Card pool ${cards.length}`;
}

function renderDeck(){

}

function renderDeckZones(){

}

function showCardDetail(e){

}

function moveCardToDeck(e){

}

function moveCardToPool(e){
    
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
    }
    else {
        target.classList.add('selected');
    }

    renderDeck();
}