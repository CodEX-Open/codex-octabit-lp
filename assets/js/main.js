// ==== HAMBURGER ====

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
        video.load();  /* recarrega o vídeo */
    }
}

trocarVideo();  /* roda ao carregar */
window.addEventListener('resize', trocarVideo);  /* roda ao redimensionar */

// desse jeito, dependendo da resolução do usuario, o video muda, independente do browser

const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {

    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > 225) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }
});