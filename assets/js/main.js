// === Play no video pelo botão ===
function toggleVideo(container) {
    const video = container.querySelector('video.vertical') || container.querySelector('video.blur-video');
    const blurVideo = container.querySelector('.projects_media-blur video');
    if (video.paused) {
        video.play();
        if (blurVideo) {
            blurVideo.play();
        }
        container.classList.add('playing');
    } else {
        video.pause();
        video.controls = false;
        if (blurVideo) {
            blurVideo.pause();
        }
        container.classList.remove('playing');
    }
}

document.querySelectorAll('.projects_media video').forEach(video => {
    video.addEventListener('playing', () => {
        video.controls = true;
    });

    video.addEventListener('click', (event) => {
        if (video.controls) {
            event.stopPropagation();
        }
    });

    video.addEventListener('pause', () => {
        video.controls = false;
        const container = video.closest('.projects_media');
        container.classList.remove('playing');
        
        const blurVideo = container.querySelector('.projects_media-blur video');
        if (blurVideo) {
            blurVideo.pause();
        }
    });

    video.addEventListener('ended', () => {
        video.controls = false;
        const container = video.closest('.projects_media');
        container.classList.remove('playing');
        
        const blurVideo = container.querySelector('.projects_media-blur video');
        if (blurVideo) {
            blurVideo.pause();
            blurVideo.currentTime = 0; 
        }
    });
});

/* === Alternância de abas — Projetos === */
const projectsTabs = document.querySelectorAll('.projects_tab-button');
const projectsCards = document.querySelectorAll('.projects_card');

projectsTabs.forEach(tab => {
    tab.addEventListener('click', () => {

        document.querySelectorAll('.projects_media video').forEach(video => {
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