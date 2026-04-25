const hamburger = document.querySelector('.hamburger');
const navClose = document.querySelector('.nav-close');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('open');
});

navClose.addEventListener('click', () => {
    navLinks.classList.remove('open');
});