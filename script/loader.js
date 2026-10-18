
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

    } catch (error) {
        console.error(error);
    }
}

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
