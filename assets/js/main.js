/* not given */

document.addEventListener('DOMContentLoaded', init);

let subscriptionData; // global variable to store the data from the form

function init(){      
     document.querySelector('#subscribe').addEventListener('submit', navigate);
     document.querySelector('#boosters button').addEventListener('click', navigate);
     document.querySelector('#deck-building button').addEventListener('click', navigate);
     document.querySelector('#deck-building a').addEventListener('click', navigate);

     initNavigation();
     initSubscribePage();
}

function dothing() {
     alert("QUACK");
     console.log("a magnificent space duck has appeared");
}