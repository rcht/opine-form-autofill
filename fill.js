let inputs = document.getElementsByClassName('col-lg-12');

for(let i = 0; i < inputs.length; ++i){
    let clickables = inputs[i].getElementsByTagName('input');
    if(clickables.length){
        clickables[4].click(); // clicks the '5' option.
    }
}
