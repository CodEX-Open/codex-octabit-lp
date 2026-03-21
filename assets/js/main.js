const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.header__nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
});