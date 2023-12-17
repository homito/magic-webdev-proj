// ## GIVEN ##

function initStatsPage(){
    document.querySelector('#stats a').addEventListener('click', navigate);

    const section = document.querySelector('#stats');
    navigateToPage(section);

    displayOverview();
    displayCardsPerColor();
}


// ## YOUR ADDED FUNCTIONS ##
function displayOverview() {
    const p = document.querySelectorAll('#type-stats p');
    p[0].childNodes[1].textContent = getCreatureCount();
    p[1].childNodes[1].textContent = getNoneCreatureNoneLandCount();
    p[2].childNodes[1].textContent = getLandCount();
    p[3].childNodes[1].textContent = getDeck().length;
}

function displayCardsPerColor() {
    const p = document.querySelectorAll('#mana-stats p');
    p[0].childNodes[0].textContent = getManasCount().white;
    p[1].childNodes[0].textContent = getManasCount().blue;
    p[2].childNodes[0].textContent = getManasCount().black;
    p[3].childNodes[0].textContent = getManasCount().red;
    p[4].childNodes[0].textContent = getManasCount().green;
    p[5].childNodes[0].textContent = getManasCount().colorless;

    p[0].childNodes[2].textContent = getManasCountPercentages().white + '%';
    p[1].childNodes[2].textContent = getManasCountPercentages().blue + '%';
    p[2].childNodes[2].textContent = getManasCountPercentages().black + '%';
    p[3].childNodes[2].textContent = getManasCountPercentages().red + '%';
    p[4].childNodes[2].textContent = getManasCountPercentages().green + '%';
    p[5].childNodes[2].textContent = getManasCountPercentages().colorless + '%';
}