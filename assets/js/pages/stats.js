// ## GIVEN ##

function initStatsPage(){
    document.querySelector('#stats a').addEventListener('click', navigate);

    const section = document.querySelector('#stats');
    navigateToPage(section);

    displayOverview();
}


// ## YOUR ADDED FUNCTIONS ##
function displayOverview() {
    const p = document.querySelectorAll('#type-stats p');
    p[0].childNodes[1].textContent = getCreatureCount();
    p[1].childNodes[1].textContent = getNoneCreatureNoneLandCount();
    p[2].childNodes[1].textContent = getLandCount();
    p[3].childNodes[1].textContent = getDeck().length;
}

