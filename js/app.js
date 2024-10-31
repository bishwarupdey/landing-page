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


//Global Variables
const navMenu = document.querySelector('.navbar__menu'); 
const navList = document.querySelector('#navbar__list');
const allSections = document.querySelectorAll('section');
const footer = document.querySelector('.page__footer');
const header = document.querySelector('.page__header');


/*
    Start of Function declarations 
*/

//Function to build the navigation bar
const buildNaviBar = () => {
    for (const section of allSections) {
        const newLi = document.createElement('li'); //create new list item
        // append the new list item with the link to the section id and the name of the section.
        newLi.innerHTML = `<a href = "#${section.id}" class = "menu__link">${section.dataset.nav}`;
        navList.appendChild(newLi); //append the new list item created to the unordered list
        scrollAction(newLi, section); //adding the smooth scrolling behavior to the section link
    }

    navMenu.appendChild(navList); //append the navigation list to the navigation menu bar.
}

//Function to make sure we have a smooth scrolling behavior
const scrollAction = (button, section) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    });
}


//Function to designates a class "active" to the section as it becomes close to the top of the screen (viewport)
const makeActive = () => {
    const menuLink = document.querySelectorAll(".menu__link");
    allSections.forEach((section, i) => {
        const box = section.getBoundingClientRect(); //grabs the location of the section in relation to the viewport.
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
        //apply active state on current section and corresponding Nav link
            section.classList.add('active');
            menuLink[i].classList.add('active_button');
        } else {
        //Remove active state from other section and corresponding Nav link
            section.classList.remove('active');
            menuLink[i].classList.remove('active_button');
        }
    });
}

//
const hideNavBar = () => {
    let scrolling;
    //Default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.2s ;'
    // Clear timeout throughout the scrolling
    window.clearTimeout( scrolling );
    //The Timeout to run after scrolling ends
    scrolling = setTimeout(() => {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: 0; transition: ease 0.2s ;'
    }, 3000);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
//Invoking the buildNaviBar function to build the Navigation bar.
buildNaviBar();

// Event listener to mark the sections as active and also hiding/appearing of  the navigation bar while scrolling 
window.addEventListener("scroll", (event) => {
    makeActive(); //invoke makeActive function
    hideNavBar(); //invode hideNavBar
});

//Adding a return to top of page button at the bottom of the page with an event listener

//Adding the HTML for the button
const returnToTop = footer.insertAdjacentHTML('beforebegin', `<button class = "return_to_top" type= "button"> Return to Top</button>`);
// Adding an even listener to when the button is clicked it scrolls to the top of the page
document.querySelector(".return_to_top").addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});