/* not given */

document.addEventListener('DOMContentLoaded', init);

function init(){      
     document.querySelector('#subscribe').addEventListener('submit', navigate);
     document.querySelector('#boosters button').addEventListener('click', navigate);

     initNavigation();
     initSubscribePage();
}
