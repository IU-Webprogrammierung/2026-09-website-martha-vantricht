
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

async function loadComponent(selector, path) {
    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Fehler beim Laden: ${path}`);
        }

        const html = await response.text();
        const element = document.querySelector(selector);

        if (!element) {
            console.error(`Element "${selector}" nicht gefunden.`);
            return;
        }

        element.innerHTML = html;

        // Toggle-Menü erst nach dem Einfügen des Headers aktivieren
        if (selector === 'header') {
            initToggleMenu(element);
        }

        // To-Top-Button erst nach dem Einfügen des Footers aktivieren
        if (selector === 'footer') {
            initToTop(element);
        }

    } catch (error) {
        console.error(error);
    }
}


/* TO-TOP-BUTTON
   Initialisiert den Zurück-nach-oben-Button erst,
   nachdem der Footer dynamisch in die Seite eingefügt wurde.
*/

function initToTop(container) {

    // Button innerhalb des geladenen Footers suchen
    const toTop = container.querySelector(".back-to-top a");

    if (!toTop) return;

    // Sichtbarkeit abhängig von der Scrollposition steuern
    function checkScroll() {
        if (window.scrollY > 300) {
            toTop.classList.add("visible");
        } else {
            toTop.classList.remove("visible");
        }
    }

    // Auf Scroll-Bewegungen reagieren
    window.addEventListener("scroll", checkScroll);

    // Sichtbarkeit auch beim initialen Laden prüfen
    checkScroll();
}



/* TOGGLE-MENÜ
    Initialisiert das Toggle-Menü bei kleinen Displays. Das Menü wird nach Klick auf das Hamburger-Menü geöffnet und nach Auswahl eines Links wieder geschlossen.
*/

function initToggleMenu(header) {
    const menuToggle = header.querySelector('.menu-toggle');
    const headerNav = header.querySelector('#header-nav');

    if (!menuToggle || !headerNav) {
        return;
    }

    // Menü öffnen und schließen
    menuToggle.addEventListener('click', () => {
        const isOpen = headerNav.classList.toggle('is-open');

        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Menü schließen' : 'Menü öffnen'
        );
    });

    // Menü nach Auswahl eines Links schließen
    headerNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Menü öffnen');
        });
    });
}
