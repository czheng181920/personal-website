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
let mouseX = 0;
let currentForegroundRight = -10;
let currentBackgroundRight = -12;
const smoothFactor = 0.1; // Adjust the smooth factor for desired smoothness

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    
    smoothUpdate(); // Call the smooth movement update on mousemove
});

function smoothUpdate() {
    const foregroundTargetRight = -(mouseX / 150 + 10);
    const backgroundTargetRight = -(mouseX / 350 + 12);

    const foregroundRightDiff = foregroundTargetRight - currentForegroundRight;
    const backgroundRightDiff = backgroundTargetRight - currentBackgroundRight;

    currentForegroundRight += foregroundRightDiff * smoothFactor;
    currentBackgroundRight += backgroundRightDiff * smoothFactor;

    if (!prefersReducedMotion()) {
        foregroundClouds.style.right = `${currentForegroundRight}%`;
        backgroundWhisps.style.right = `${currentBackgroundRight}%`;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => observer.observe(element));
const contactElement = document.querySelector('.contact');
const clearElement = document.querySelector('.clear');
const contactElementTop = document.querySelector('.content-container');
const hiddenEndings = document.querySelectorAll('.endinghidden');
function setScrollVar() {
    const htmlElement = document.documentElement
    const clientHeight = htmlElement.clientHeight;
    const triggerDivTop = contactElementTop.getBoundingClientRect().bottom;
    const triggerHeight = clearElement.getBoundingClientRect().height;

    const percentOfScreenHeightScrolled = htmlElement.scrollTop / clientHeight
    const percentOfScreenHeightScrolledBottom = Math.max( 1 - ((clientHeight - triggerDivTop) / triggerHeight), 0)

    //setting css prperties
    htmlElement.style.setProperty(
        "--scroll",
        percentOfScreenHeightScrolled * 100
    )
    htmlElement.style.setProperty(
        "--scrollBottom",
        percentOfScreenHeightScrolledBottom 
    )

    //adding visibility to contact div
    if (percentOfScreenHeightScrolled > 1 ){
        contactElement.style.display = 'block';
    } else {
        contactElement.style.display = 'none';
    }
    if (triggerDivTop < clientHeight - 1) {
        hiddenEndings.forEach(element => element.classList.add('show'));
    } else {
        hiddenEndings.forEach(element => element.classList.remove('show'));
    }
}

window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);
setScrollVar();

//code for magnifying glass effect
const hero = document.querySelector('.mask')
let clientX = 0
let clientY = 0
function setMagnifyVar(e) {
    //make sure to go back and adjust for mobile
    // if (!hero.isIntersecting) return this wont work unless in the intersectionobserver function
	({ clientX, clientY } = e)
    const rect = hero.getBoundingClientRect();

    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        return
    } else {
        const x = Math.round((clientX - rect.left) / rect.width * 100)
        const y = Math.round((clientY - rect.top) / rect.height * 100)
        hero.style.setProperty('--x', `${x}%`)
	    hero.style.setProperty('--y', `${y}%`)
    }
}

function setMagnifyVarOnScroll(e) {
    //make sure to go back and adjust for mobile
    // if (!hero.isIntersecting) return this wont work unless in the intersectionobserver function
    const rect = hero.getBoundingClientRect();

    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        return
    } else {
        const x = Math.round((clientX - rect.left) / rect.width * 100)
        const y = Math.round((clientY - rect.top) / rect.height * 100)
        hero.style.setProperty('--x', `${x}%`)
	    hero.style.setProperty('--y', `${y}%`)
    }
}
window.addEventListener('mousemove', setMagnifyVar)
window.addEventListener('scroll', setMagnifyVarOnScroll)


document.querySelectorAll('.sticky button').forEach(button => {
    console.log(button)
    button.addEventListener('focus', () => {
        // Scroll all the way to the top when a button is focused
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.sticky .stickybutton').forEach(button => {
    console.log(button)
    button.addEventListener('focus', () => {
        // Scroll all the way to the top when a button is focused
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});