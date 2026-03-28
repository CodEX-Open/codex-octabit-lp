// ==== HAMBURGER ====
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.header__nav');
const overlay = document.getElementById('overlay');
const headerEl = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

const logoHeader = document.querySelector('.header__logo-link');

logoHeader.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

const links = document.querySelectorAll('.header__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// ==== HAMBURGER FIM ====

// ==== VIDEO ====
const video = document.querySelector('.hero__video');
const source = video.querySelector('source');

function trocarVideo() {
    const isMobile = window.innerWidth <= 768;
    const novoSrc = isMobile 
        ? 'assets/videos/PolvoMobileTeste03.mp4' 
        : 'assets/videos/PolvoDesktop02.mp4';
    
    if (source.src !== novoSrc) {
        source.src = novoSrc;
        video.load();
    }
}

trocarVideo();
window.addEventListener('resize', trocarVideo);
// ==== VIDEO FIM ====

// ==== HEADER SCROLL ====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            headerEl.classList.add('header--hidden');
        } else {
            headerEl.classList.remove('header--hidden');
        }
    } else {
        if (currentScroll > 300) {
            headerEl.classList.add('header--hidden');
        } else {
            headerEl.classList.remove('header--hidden');
        }
    }

    lastScroll = currentScroll;
});
// ==== HEADER SCROLL FIM ====