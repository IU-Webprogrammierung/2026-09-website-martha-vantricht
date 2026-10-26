
/* NEU: Die Bildgruppe wird erst beim Anklicken festgelegt. */
let galleryLinks = [];

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
    const figure = link.closest('figure');
    const image = thumbnail || figure?.querySelector('img');

    lightboxImage.src = link.href;
    lightboxImage.alt = image?.alt || '';
    counter.textContent = `${currentIndex + 1} / ${galleryLinks.length}`;
    counter.textContent = `${currentIndex + 1} / ${galleryLinks.length}`;
}

/* NEU: Nur Bilder derselben Gruppe werden durchgeschaltet. */
document.querySelectorAll('a[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const galleryName = link.dataset.lightbox;

        galleryLinks = [
            ...document.querySelectorAll(
                `a[data-lightbox="${galleryName}"]`
            )
        ];

        lastFocusedElement = link;
        showImage(galleryLinks.indexOf(link));
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
