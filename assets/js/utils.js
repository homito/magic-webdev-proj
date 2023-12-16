// ## GIVEN ##

function getRandomNumber(max, min = 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomListItem(list){
    const randomIndex = getRandomNumber(list.length - 1);
    return list[randomIndex];
}

// ## YOUR ADDED FUNCTIONS ##
