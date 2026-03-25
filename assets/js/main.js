// === Play no video pelo botão ===
function toggleVideo(container) {
    const video = container.querySelector('video');
    if (video.paused) {
        video.play();
        container.classList.add('playing');
    } else {
        video.pause();
        container.classList.remove('playing');
    }
}

document.querySelectorAll('.projects_media video').forEach(video => {
    video.addEventListener('ended', () => {
        video.closest('.projects_media').classList.remove('playing');
    });
});
