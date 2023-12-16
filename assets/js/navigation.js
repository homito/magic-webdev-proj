// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    initRandomBackground();
}

function navigate(e){

}

function navigateToPage(targetId){
    hidePage(document.querySelector('section:not(.hidden)'));
    showPage(targetId);
}


// ## YOUR ADDED FUNCTIONS ##
function initRandomBackground(){
    const classes = ['background-01', 'background-02', 'background-03'];
    document.body.classList.add(getRandomListItem(classes));
}

function showPage(sectionId){
    sectionId.classList.remove('hidden');
}

function hidePage(sectionId){
    sectionId.classList.add('hidden');
}