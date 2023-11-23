# IIITD Feedback Form Autofiller

Le steps:

1. Open form in browser

2. Right click and go to "Inspect" or "Inspect Element"

3. Go to console

4. Copy and paste the following into the console

```
let inputs = document.getElementsByClassName('col-lg-12');for(let i = 0; i < inputs.length; ++i){let clickables = inputs[i].getElementsByTagName('input');if(clickables.length){clickables[4].click();}}
```

5. And voila! All options marked with "5" will be clicked. You can now scroll down and submit, or change answers if you want. 

student senate pls dont kill thx :)

just a proof of concept, i totally didn't use it or anything :o
