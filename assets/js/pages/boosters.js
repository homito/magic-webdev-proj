
// _unopendBoosters: contains the list of boosterpacks, opened and/or unopened
// for example: [0, 1, 2, 1, 3, 3] 
// this means: first booster is open and has the version 0 image, second is not open and has the version image, third one is not open and has the version 2 image, ...
// if you have an better/other solution here, you may implent your own!!!

let _unopendBoosters = [];

const _MAX_BOOSTER_VERSIONS = 3;

let currentSet = config.default_set; // todo: get this from the form


// ## GIVEN ##

function initBoostersPage(){
    const section = document.querySelector('#boosters');
    navigateToPage(section);

    const ul = section.querySelector('#unopenedBoosters');

    let dynamicHTML = '';
    for (let boosterIndex = 0; boosterIndex < _unopendBoosters.length; boosterIndex++) {
        dynamicHTML += `<li><img src="images/${currentSet}/booster_v${_unopendBoosters[boosterIndex]}.jpg" alt="booster" title="booster" data-booster="${boosterIndex+1}" data-open="0"></li>`;
    }
    ul.insertAdjacentHTML('beforeend', dynamicHTML);

    let boosters = document.querySelectorAll('img[data-booster]');
    boosters.forEach(booster => booster.addEventListener('click', openBooster));
}


// ## YOUR ADDED FUNCTIONS ##
function initBoosters(nbBoosters) {
    for (let boosterIndex = 0; boosterIndex < nbBoosters; boosterIndex++) {
        _unopendBoosters.push(getRandomNumber(_MAX_BOOSTER_VERSIONS, 1));
    }
}

function getCurrentSet(set) {
    currentSet = set;
}

function openBooster(e) {
    e.preventDefault();
    const errorMessages = [];

    const target = e.target;
    
    if (target.dataset.open === '1')
        return "Booster already opened";

    target.dataset.open = 1;
    target.src = `images/${currentSet}/booster_v0.jpg`;

    const set = getBooster();
    displayBooster(set);
    loadSet(set);
}

function displayBooster(set) {
    const ul = document.querySelector('#openedBooster');
    ul.innerHTML = '';

    let dynamicHTML = '';
    for (let cardIndex = 0; cardIndex < set.length; cardIndex++) {
        const card = findCardById(set[cardIndex]);
        dynamicHTML += `
        <li><img class="card"
        src="${card.image}"
        alt="${card.name}" title="${card.name}"
        data-id="${card.id}"
        data-sequence-id="${cardIndex}">
        </li>
        `;
    }
    ul.insertAdjacentHTML('beforeend', dynamicHTML);
}

function finishBooster() {
    // function that opens all boosters that are not opened yet when changing to deck page
    const boosters = document.querySelectorAll('img[data-booster]');
    for (const booster of boosters) {
        if (booster.dataset.open === '0') {
            loadSet(getBooster());
            booster.dataset.open = 1;
        }
    }
}