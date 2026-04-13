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
// ==== HEADER SCROLL FIM ====// === Play no video pelo botão ===
function toggleVideo(container) {
    const video = container.querySelector('video.vertical');
    const blurVideo = container.querySelector('.projects_media-blur video');

    if (!video) return;

    if (video.paused) {
        video.play();
        if (blurVideo) blurVideo.play();
        container.classList.add('playing');
    } else {
        video.pause();
        video.controls = false;
        if (blurVideo) blurVideo.pause();
        container.classList.remove('playing');
    }
}

// === Lógica principal dos vídeos ===
document.querySelectorAll('.projects_media video.vertical').forEach(video => {
    const container = video.closest('.projects_media');
    const blurVideo = container ? container.querySelector('.projects_media-blur video') : null;

    video.addEventListener('playing', () => {
        video.controls = true;
    });

    video.addEventListener('click', (event) => {
        if (video.controls) {
            event.stopPropagation();
        }
    });

    video.addEventListener('pause', () => {
        if (video.seeking) return;
        video.controls = false;
        container.classList.remove('playing');
        if (blurVideo) blurVideo.pause();
    });

    video.addEventListener('ended', () => {
        video.controls = false;
        container.classList.remove('playing');
        if (blurVideo) {
            blurVideo.pause();
            blurVideo.currentTime = 0;
        }
    });

    video.addEventListener('seeked', () => {
        if (blurVideo) blurVideo.currentTime = video.currentTime;
    });

    const handleFullscreenChange = () => {
        const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
        if (!isFullscreen) {
            if (!video.paused) {
                if (blurVideo && blurVideo.paused) blurVideo.play();
                container.classList.add('playing');
                video.controls = true;
            } else {
                video.controls = false;
                container.classList.remove('playing');
            }
        }
    };

    video.addEventListener('fullscreenchange', handleFullscreenChange);
    video.addEventListener('webkitfullscreenchange', handleFullscreenChange);
});

/* === Alternância de abas === */
const projectsTabs = document.querySelectorAll('.projects_tab-button');
const projectsCards = document.querySelectorAll('.projects_card');

projectsTabs.forEach(tab => {
    tab.addEventListener('click', () => {

        document.querySelectorAll('.projects_media video.vertical').forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });

        const idx = tab.dataset.index;
        projectsTabs.forEach(t => t.classList.remove('active'));
        projectsCards.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`.projects_card[data-index="${idx}"]`).classList.add('active');
    });
});