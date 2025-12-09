//Caroline
//Udførelse af burger-menu (css og js) - https://www.youtube.com/watch?v=HbBMp6yUXO0
//Animation (html, css og js)- https://chatgpt.com/share/69387a5d-bdc8-800a-92fc-97ed55f5c0e8

console.log("It's working")

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.header__menu');
const burgerLines = document.querySelectorAll('.burger-line');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        // Tilføj kryds-animation med for-loop
        for (let i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.add('cross');
        }
    } else {
        primaryNav.setAttribute('data-visible', "false");
        // Fjern kryds-animation
        for (let i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.remove('cross');
        }
    }
});
