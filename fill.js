let buttons = document.getElementsByClassName('radio-inline');
for(let i = 0; i < buttons.length; ++i){
    if(i % 5 == 0){ // change to 1,2,3 or 4 for different default response
        buttons[i].click();
    }
}
