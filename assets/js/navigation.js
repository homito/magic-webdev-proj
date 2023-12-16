// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    initRandomBackground();
}

function navigate(e){

}

function navigateToPage(targetId){

}


// ## YOUR ADDED FUNCTIONS ##
function initRandomBackground(){
    const classes = ['background-01', 'background-02', 'background-03'];
    const randomIndex = Math.floor(Math.random() * NR_OF_BACKGROUNDS);

    document.body.classList.add(classes[randomIndex]);
}