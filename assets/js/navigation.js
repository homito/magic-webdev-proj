// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    initRandomBackground();
}

function navigate(e){
    e.preventDefault();
    const errorMessages = [];
    const target = e.target;
    

    if(target.id === 'subscribe') { // todo : check if input is valid
        const targetData = new FormData(target);
        initBoosters(targetData.get('booster'));
        getCurrentSet(targetData.get('set'));
        initBoostersPage();
    }
    else if(target.id === 'boosters') {
        console.log('boosters');
        initDeckbuildingPage();
    }
}

function navigateToPage(targetId){
    initRandomBackground();
    hidePage(document.querySelector('section:not(.hidden)'));
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

function hidePage(sectionId){
    sectionId.classList.add('hidden');
}