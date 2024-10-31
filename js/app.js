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
const allSections = document.querySelectorAll('section');
const footer = document.querySelector('.page__footer');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function to build the navigation bar
const buildNaviBar = () => {
    for (const section of allSections) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<a href = "#${section.id}" class = "menu__link">${section.dataset.nav}`;
        navList.appendChild(newLi);
    }

    navMenu.appendChild(navList);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//Invoking the buildNaviBar function to build the Navigation bar.
buildNaviBar();



// Add class 'active' to section when near top of viewport

//Function to designates a class "your-active-class" to the section as it becomes close to the top of the screen (viewport)
const makeActive = () => {
    for (const section of allSections) {
        const box = section.getBoundingClientRect(); //grabs the location of the section in relation to the viewport.
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
        //apply active state on current section and corresponding Nav link
            section.classList.add('your-active-class');
        } else {
        //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
        }
     }
}


// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", makeActive);


