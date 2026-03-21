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
        : 'assets/videos/hero-desktop.mp4';
    
    if (source.src !== novoSrc) {
        source.src = novoSrc;
        video.load();  /* recarrega o vídeo */
    }
}

trocarVideo();  /* roda ao carregar */
window.addEventListener('resize', trocarVideo);  /* roda ao redimensionar */

// desse jeito, depdendo da resolução do usuario, o video muda, independente do browser