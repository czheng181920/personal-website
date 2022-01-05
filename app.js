'use strict';

//use JavaScript to handle events 
//use document.querySelector('.btn') to get the button reference
const switcher = document.querySelector('.theme-btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')  //changes theme

    //update label for button
    var className = document.body.className;
    if(className == "light-theme"){ 
        document.getElementById("btn-theme-inside-text") = "Dark"; 
    } else{
        document.getElementById("btn-theme-inside-text") = "Light";     }

    console.log('current class name: ' + className); //console message

});
