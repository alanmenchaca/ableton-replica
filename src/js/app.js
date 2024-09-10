const moreToggleButton = document.getElementById('more-toggle-btn');
moreToggleButton.addEventListener('click', () => {
    displayMoreContent();
    changePlusToMinusSymbol();
});

function displayMoreContent() {
    const moreContent = document.getElementById('more-content');
    moreContent.classList.contains('lg:hidden') ?
        moreContent.classList.replace('lg:hidden', 'lg:block') :
        moreContent.classList.replace('lg:block', 'lg:hidden');
}

function changePlusToMinusSymbol() {
    const plusSymbol = document.getElementById('more-toggle-btn');
    plusSymbol.innerText = plusSymbol.innerText === 'More +' ? 'More -' : 'More +';
}

// #############################################

const menuToggleButton = document.getElementById('menu-toggle-btn');
menuToggleButton.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('hidden')
});

// #############################################

videoThumbnail = document.getElementById('video-thumbnail');
videoThumbnail.addEventListener('click', () => {
    hiddeVideoThumbnail();
    displayVideoModal();
});

function hiddeVideoThumbnail() {
    const videoThumbnail = document.getElementById('video-thumbnail');
    videoThumbnail.style.display = 'none';
}

function displayVideoModal() {
    const videoModal = document.getElementById('video-modal');
    videoModal.classList.remove('hidden');
    videoModal.src += '?autoplay=1';
}
