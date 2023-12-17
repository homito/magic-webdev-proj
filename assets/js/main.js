/* not given */

document.addEventListener('DOMContentLoaded', init);

let subscriptionData; // global variable to store the data from the form

function init(){    
     document.querySelector('form').addEventListener('submit', navigate);
     document.querySelector('button[data-target="deck-building"]').addEventListener('click', navigate);
     document.querySelector('#deck-building button').addEventListener('click', navigate);
     document.querySelector('#deck-building a').addEventListener('click', navigate);

     initNavigation();
     initSubscribePage();
}
