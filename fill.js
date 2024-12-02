let buttons = document.getElementsByClassName('radio-inline');
for(let i = 0; i < buttons.length; i = i+5){
   buttons[i + Math.floor(Math.random() * 5)].click();
}
