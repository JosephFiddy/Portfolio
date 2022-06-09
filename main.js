// Check element is inside viewport
var isInViewport = function (elem, bottomOffset=0) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom + bottomOffset <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

//Navbar show on scroll effect
const navbar = document.querySelector(".main-nav");
let lastScrollY = 0;

window.addEventListener("scroll", function () {
  let currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY){  //scrolling down
    navbar.classList.add("navbar-hide");
  }
  else { //scrolling up
    navbar.classList.remove("navbar-hide");
  }

  lastScrollY = currentScrollY;
})

// add .active to current navigation section
    // const navLinks = document.querySelectorAll(".navbar-nav li a"); // get all the nav link here
    // let idSection2 = navLinks[0].getAttribute('href');

    // window.addEventListener("scroll", function () {
    //   for(var i=0; i<navLinks.length; i++){
    //     const idSection = document.querySelector(navLinks[i].getAttribute("href"));
    //     if (idSection != null){
    //       if (isInViewport(idSection)) {
    //         console.log(i + " is in viewport!");
    //         navLinks[i].classList.toggle = 'green';
    //         activeNav = i;  
    //       }
    //     }
    //   }
    // })


// paralax squares
const squaresContainer = document.getElementById('squares-container');
squaresContainer.style.bottom = window.pageYOffset * -0.55 +"px";

window.addEventListener("scroll", function () {
    let scrollOffset = window.pageYOffset; //return the scroll amount in px
    squaresContainer.style.bottom = (scrollOffset * -0.55) + "px";
})


// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" HTML, CSS and JavaScript.", " PHP and SQL.", " Bootstrap.", " HTML, CSS, JavaScript, SQL and PHP."];
const typingDelay = 125;
const erasingDelay = 80;
const newTextDelay = 2000; // Delay between current and next text
const firstDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, firstDelay);
});


// Animations

// trigger Slideup on scroll animations
const sectionArea = document.querySelectorAll('.section-area'); 
const cards = document.querySelectorAll('.portfolio-grid > *');

window.addEventListener('scroll', function () {
  // animatate sections when visible
  for(var i=0; i<sectionArea.length; i++){ //foreach section area
    if (isInViewport(sectionArea[i], 50)) {
      for(var x=0; x<sectionArea[i].children.length; x++){ //for each child of the section area
        let sectionChild = sectionArea[i].children[x];
          // sectionChild.style.animation = 'slideup 0.2s linear 0.25s forwards';
          sectionChild.style.animation = 'slideup ' + String(0.3 + (x * 0.3)) + 's linear forwards'; 
          // sectionChild.style.opacity = 1;
      }
    }
  }


  // animate cards when visible
  for(var i=0; i<cards.length; i++){ //for each card
    if (isInViewport(cards[i], 70)) {
      cards[i].style.animation = 'slideup 0.4s linear forwards'
    }
  }

  //need to use cards children... not cards itself!

}, false);

// console.log(cards[0]);


