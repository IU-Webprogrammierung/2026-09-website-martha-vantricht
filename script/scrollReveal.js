// Funktion zum Aktivieren der Scroll-Animationen
function initScrollReveal() {

    // Alle HTML-Elemente auswählen, die die Klasse "reveal" besitzen
    const elements = document.querySelectorAll(".reveal");

    // IntersectionObserver beobachten lassen, wann Elemente sichtbar werden
    const observer = new IntersectionObserver((entries) => {

        // Alle aktuell beobachteten Elemente durchgehen
        entries.forEach((entry) => {

            // Prüfen, ob ein Element in den sichtbaren Bereich gescrollt ist
            if (entry.isIntersecting) {

                // Klasse "visible" hinzufügen
                // Dadurch wird die CSS-Animation ausgelöst
                entry.target.classList.add("visible");

                // Element nicht länger beobachten,
                // da die Animation nur einmal ausgeführt werden soll
                observer.unobserve(entry.target);
            }
        });

    }, {
        // Animation startet, sobald mindestens 15 % des Elements sichtbar sind
        threshold: 0.15
    });

    // Alle gefundenen Elemente beim Observer anmelden
    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Funktion erst ausführen, wenn das HTML-Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", initScrollReveal);