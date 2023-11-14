// mein-skript.js
function greet() {
    alert("Hallo, Welt!");
}


// JavaScript-Funktion zum automatischen Scrollen
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


// JavaScript für die Bildergalerie und Lightbox
const images = [
    'img/schaf.jpg',
    'img/schaf2.jpg',
    'img/hund.jpg'
];

let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.querySelector('.caption');

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = images[currentImageIndex];
    caption.textContent = `Bild ${currentImageIndex + 1}`;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImage.src = images[currentImageIndex];
    caption.textContent = `Bild ${currentImageIndex + 1}`;
}

// Füge einen Event Listener hinzu, um zum nächsten Bild zu wechseln
lightboxImage.addEventListener('click', showNextImage);
