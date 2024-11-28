let buttons = document.getElementsByClassName('radio-inline');
for(let i = 0; i < buttons.length; ++i){
    if(5 - (i % 5) == 3){ // change to 1,2,3 or 4 for different default response
        buttons[i].click();
    }
}
