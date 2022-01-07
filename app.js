'use strict';

//use JavaScript to handle events 
//use document.querySelector('.theme-btn') to get the button reference
const switcher = document.querySelector('.inside-btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')  //changes theme

    //update label for button
    var className = document.body.className;
    if(className == "light-theme"){ 
        this.textContent = "Dark"; 
    } else{
        this.textContent = "Light";     }

    console.log('current class name: ' + className); //console message

});
