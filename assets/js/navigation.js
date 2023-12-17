// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    initRandomBackground();
}

function navigate(e){
    e.preventDefault();
    const errorMessages = [];
    const target = e.target;
    
    if(target.tagName === 'FORM') { // todo : check if input is valid
        const targetData = new FormData(target);
        subscriptionData = targetData;
        initBoosters(targetData.get('booster'));
        getCurrentSet(targetData.get('set'));
        initBoostersPage();
    }
    else if(target.dataset.target === 'deck-building') {
        if(target.tagName === 'BUTTON') {
            finishBooster();
            addCardsToCardPool(getCards());
        }
        initDeckbuildingPage();
    }
    else if(target.dataset.target === 'stats') {
        initStatsPage();
    }
    else if(target.dataset.target === 'thanks') {
        initThankYouPage();
    }
    else {
        console.log('error');
    }
}

function navigateToPage(targetId){
    initRandomBackground();
    hidePages(document.querySelectorAll('main>section'));
    showPage(targetId);
}


// ## YOUR ADDED FUNCTIONS ##
function initRandomBackground(){
    const classes = ['background-01', 'background-02', 'background-03'];
    document.body.classList.remove(...classes);
    document.body.classList.add(getRandomListItem(classes));
}

function showPage(sectionId){
    sectionId.classList.remove('hidden');
}

function hidePages(sections){
    sections.forEach(section => hidePage(section));    
}

function hidePage(sectionId){
    sectionId.classList.add('hidden');
}