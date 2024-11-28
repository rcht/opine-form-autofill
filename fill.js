function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buttons = document.getElementsByClassName('radio-inline');
for (let i = 0; i < buttons.length; ++i) {
    let _randomNum = randomInt(1, 5); // Random number between 1 and 5
    if (5 - (i % 5) == _randomNum) { //If you want to set a default value, change the value of _randomNum to the value you want
        buttons[i].click();
    }
}
