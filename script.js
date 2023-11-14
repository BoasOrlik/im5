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
}
