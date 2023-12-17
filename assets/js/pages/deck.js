let _search = '';
// ## GIVEN ##

function initDeckbuildingPage(){
    document.querySelector('#search-pool').addEventListener('input', searchFilter);

    const section = document.querySelector('#deck-building');
    navigateToPage(section);

    addCardsToCardPool(getCards());
    renderCardPool();
}

function renderCardPool(){
    //display the nb of cards in the pool

    //display the cards in the pool
    const ul = document.querySelector('.container.cards.scrollable');
    ul.innerHTML = '';
    
    //NOT FINAL
    let cards = getFilteredCardPool(_search, _types); 
    for (card in cards) {
        const li = document.createElement('li');
        li.innerHTML = displayCard(cards[card]);
        li.setAttribute('data-sequence-id', card);
        ul.appendChild(li);
    }
    //NOT FINAL
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
function searchFilter(e) {
    _search = e.target.value;

    renderCardPool();
}

function typeFilter(e) {
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;

    if (target.classList.value.includes('selected')) {
        target.classList.remove('selected');
    }
    else {
        target.classList.add('selected');
    }
}