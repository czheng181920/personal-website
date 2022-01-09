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

function readMoreFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "less";
        moreText.style.display = "inline";
  }
}
