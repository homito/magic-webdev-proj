// ## GIVEN ##

function initSubscribePage() {
    const section = document.querySelector('#subscribe');
    navigateToPage(section);

    const form = section.querySelector('form');
    
    let dynamicHTML = '<fieldset><legend>SET</legend>';
    dynamicHTML += createRadioButtons();
    dynamicHTML += '</fieldset>';
    dynamicHTML += '<label for="booster">BOOSTER</label>';
    dynamicHTML += createBoosterInput();
    dynamicHTML += '<input type="submit" class="next shadow" data-target="boosters" value="subscribe">';

    form.insertAdjacentHTML('beforeend', dynamicHTML);
}


// ## YOUR ADDED FUNCTIONS ##

function createRadioButtons() {
    let radioHTML = "";
    for (const key in config.sets) {
        radioHTML += `
        <input type="radio" id="set-${key}" name="set" value="${key}">
        <label for="set-${key}">${config.sets[key]}</label>
        `;
    }
    return radioHTML;
}

function createBoosterInput() {
    let boosterHTML = `
    <input type="number" id="booster" name="booster" min="1" max="10" value="${config.default_nr_of_boosters}">
    `;
    return boosterHTML;
}