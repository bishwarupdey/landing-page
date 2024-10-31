/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


//Global Variables
const navMenu = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const allSections = document.querySelectorAll('.section');
const footer = document.querySelector('.page__footer');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function to build the navigation bar
function buildNaviBar() {
    for (const section of allSections) {
        const newLi = document.createElement('li');
        newLi.innerText = `<a href = "#${section.id}" class = "menu__link">${section.dataset.nav}`;
        navList.appendChild(newLi);
    }

    navMenu.appendChild(navList);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//Invoking the buildNaviBar 
buildNaviBar();



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


