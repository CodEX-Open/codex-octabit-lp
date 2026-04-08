// === Play no video pelo botão ===
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