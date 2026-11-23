// ------------------------------------------
// DARK MODE FÜR WEBSEITE
// ------------------------------------------


// 1. Theme beim Laden der Website festlegen

function setInitialTheme() {

    // Gespeicherte Einstellung aus dem Browser abrufen
    const savedTheme = localStorage.getItem("rootworx-theme");

    // Gespeicherte Einstellung übernehmen,
    // ansonsten die helle Version verwenden
    if (savedTheme === "dark") {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

}


// 2. Theme wechseln

function switchTheme() {

    // Prüfen, ob der Dark Mode aktuell aktiv ist
    const darkModeIsActive =
        document.documentElement.dataset.theme === "dark";

    // Das jeweils andere Theme auswählen
    const newTheme = darkModeIsActive ? "light" : "dark";

    // Das neue Theme am HTML-Element setzen
    if (newTheme === "dark") {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.removeAttribute("data-theme");
    }

    // Neue Einstellung im Browser speichern
    localStorage.setItem("rootworx-theme", newTheme);

    // Button-Beschriftung aktualisieren
    updateThemeButton(newTheme);

}


// 3. Button an den aktuellen Theme-Zustand anpassen

function updateThemeButton(theme) {

    const themeButton = document.getElementById("themeToggle");

    if (!themeButton) return;

    if (theme === "dark") {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute("aria-pressed", "true");
        themeButton.setAttribute("aria-label", "Helles Design aktivieren");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute("aria-pressed", "false");
        themeButton.setAttribute("aria-label", "Dark Mode aktivieren");
    }

}


// 4. Theme-Button aktivieren

function initThemeToggle() {

    const themeButton = document.getElementById("themeToggle");

    if (!themeButton) return;

    // Gespeichertes Theme für die Button-Anzeige ermitteln
    const currentTheme =
        document.documentElement.dataset.theme === "dark"
            ? "dark"
            : "light";

    updateThemeButton(currentTheme);

    // Klick auf den Button registrieren
    themeButton.addEventListener("click", switchTheme);

}


// 5. Beim Laden der Seite das Theme festlegen

setInitialTheme();
