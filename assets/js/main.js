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

/* === Alternância de abas — Projetos === */
const projectsTabs = document.querySelectorAll('.projects_tab-button');
const projectsCards = document.querySelectorAll('.projects_card');

projectsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const idx = tab.dataset.index;

        projectsTabs.forEach(t => t.classList.remove('active'));
        projectsCards.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`.projects_card[data-index="${idx}"]`).classList.add('active');
    });
});