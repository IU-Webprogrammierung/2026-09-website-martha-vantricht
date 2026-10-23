
const galleryLinks = [...document.querySelectorAll(
    '#foto .foto-grid a[data-lightbox]'
)];

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const closeButton = lightbox.querySelector('.lightbox-close');
const prevButton = lightbox.querySelector('.lightbox-prev');
const nextButton = lightbox.querySelector('.lightbox-next');
const counter = lightbox.querySelector('.lightbox-counter');

let currentIndex = 0;
let lastFocusedElement = null;

function showImage(index) {
    currentIndex = (index + galleryLinks.length) % galleryLinks.length;

    const link = galleryLinks[currentIndex];
    const thumbnail = link.querySelector('img');

    lightboxImage.src = link.href;
    lightboxImage.alt = thumbnail.alt;
    counter.textContent = `${currentIndex + 1} / ${galleryLinks.length}`;
}

galleryLinks.forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault();

        lastFocusedElement = link;
        showImage(index);
        lightbox.showModal();
        closeButton.focus();
    });
});

closeButton.addEventListener('click', () => lightbox.close());
prevButton.addEventListener('click', () => showImage(currentIndex - 1));
nextButton.addEventListener('click', () => showImage(currentIndex + 1));

lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});

lightbox.addEventListener('close', () => {
    lastFocusedElement?.focus();
});

lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showImage(currentIndex - 1);
    }

    if (event.key === 'ArrowRight') {
        event.preventDefault();
        showImage(currentIndex + 1);
    }
});
