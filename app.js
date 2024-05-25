'use strict';

//use JavaScript to handle events 
//use document.querySelector('.theme-btn') to get the button reference
const switcher = document.querySelector('.theme-btn');
const insidebtn = document.querySelector('.inside-btn');
const darksvg = document.querySelector('#darksvg');
const lightsvg = document.querySelector('#lightsvg');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')  //changes theme

    //update label for button
    var className = document.body.className;
    if(className == "light-theme"){ 
        insidebtn.classList.add("move-right");
        insidebtn.classList.remove("move-left");
        darksvg.style.display = "block";
        lightsvg.style.display = "none";
    } else{
        insidebtn.classList.add("move-left");
        insidebtn.classList.remove("move-right");
        lightsvg.style.display = "block";  
        darksvg.style.display = "none";
    }

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

// Function to check if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const foregroundClouds = document.getElementById("foregroundClouds");
const backgroundWhisps = document.getElementById("backgroundWhisps");

// Event listener for moving the clouds and whisps with the mouse
document.addEventListener('mousemove', (e) =>{
    const mouseX = e.clientX;

    if(!prefersReducedMotion()){
        foregroundClouds.style.right= `-${mouseX/300 + 10}%`;
        backgroundWhisps.style.right= `-${mouseX/450 + 12}%`;   
    }
})
