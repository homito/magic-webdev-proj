/* not given */

document.addEventListener('DOMContentLoaded', init);

function init(){      
     document.querySelector('form').addEventListener('submit', navigate);

     initNavigation();
     initSubscribePage();
}
