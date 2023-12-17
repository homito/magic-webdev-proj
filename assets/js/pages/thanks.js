
// ## GIVEN ##

function initThankYouPage(){
    const section = document.querySelector('#thanks');
    navigateToPage(section);


    let dynamicHTML = `<p>Good luck and have fun ${subscriptionData.get('name')} with ${config.sets[subscriptionData.get('set')]}!</p>`;
    section.querySelector('p').innerHTML = dynamicHTML;
}

// ## YOUR ADDED FUNCTIONS ##