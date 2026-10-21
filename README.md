# Rootworx Portfolio

## Projektbeschreibung

Gestaltung und Entwicklung eines persönlichen Portfolios im Rahmen des Moduls „Web-Programmierung“ (DLBUXPWP01) im Studiengang Medieninformatik an der IU Internationalen Hochschule. 
Die Webseite enthält ausgewählte, persönliche Arbeiten aus den Bereichen Webdesign, Grafikdesign, Produktdesign und Fotografie.

## Informationsarchitektur & Sektionen

Die Webseite ist als One-Pager mit mehreren Bereichen sowie zusätzlichen Unterseiten aufgebaut.

-  **Header**: Logo und Hauptnavigation
-  **Hero/Home**: kurzer Einstieg und zentrale Aussage
-  **Über mich**: persönliche Vorstellung und gestalterischer Hintergrund
-  **Arbeiten**: Übersicht der ausgewählten Arbeiten
-  **Fotografien**: fotografische Inhalte oder Bildserie
-  **Kontakt**: Kontaktinformationen inklusive Kontaktformular
-  **Footer**: ergänzende Links und Copyright- und Projektinformationen

Die Bereiche werden semantisch mit HTML5-Elementen wie `<header>`, `<nav>`, `<main>`, `<section>` und `<footer>` strukturiert.


## Projektstruktur

- `index.html` – Startseite
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutzerklärung
- `404.html` – 404-Fehlerseite
- `assets/` – Enthält sämtliche projektbezogenen  Dateien in den jeweiligen Unterordnern 
- `assets/favicon/` - Enthält die Favicons in mehreren Größen und Dateiarten für versch. Geräte/Betriebssysteme
- `assets/fonts/` - Enthält  lokal eingebundene Schriftarten
- `assets/images/` - Enthält die zur Gestaltung der Seite erforderlichen Bilder
- `assets/fotos/` - Bilder zum Bereich "Fotografie"
- `assets/works/` - Bilder zum Bereich "Arbeiten"
- `assets/style.css` - Reguläres Stylesheet
- `assets/mobile.css` - Stylesheet für Responsives Layout (Tablet und Smartphone)


## Eingesetzte Technologien

- HTML5 für die semantische Seitenstruktur
- CSS3 für Farben, Typografie, Abstände und Layout
- Flexbox für eindimensionale Anordnungen, z. B. Header und Navigation, Hero-Bereich
- CSS Grid für zweidimensionale Layouts, z. B. Bereich der Arbeiten und Fotografien sowie Kontaktbereich
- Keine grundlegende Grid-Struktur im body; jeder Bereich erhält sein eigenes, passendes Layout
- JavaScript - für Web Components sowie das Toggle-Menü im responsiven Layout
- Git und Github - Versionskontrolle mit Commits
- GoogleFonts - ausgewählte Schriftarten werden lokal eingebunden und nicht extern geladen

## Responsives Design

- Smartphone: bis 767 px
- Tablet: ab 768 px
- Desktop: ab 1025 px



##  Barrierefreiheit nach WCAG / WAI-ARIA

- Verwendung semantischer HTML5-Elemente
- Kennzeichnung der Navigationen mit "aria-Label"
- Kennzeichnung eingebundener Bilder mit alt-Attribut und passender Beschreibung 
- Formularfelder werden mittels `<label>`-Elementen eindeutig beschriftet
- Einsatz kontrastreicher Farben und gut lesbarer Schriften
- Links heben sich deutlich vom Text ab


## Funktionalitäten

Folgende Funktionen sind bereits integriert oder für spätere Projektphasen vorgesehen:

| Funktion       |      Kurzbeschreibung       |  Phase    |
|----------------|-----------------------------|-----------|
| Back-to-top     |  Einbau eines Buttons im Footer, um direkt zum Seitenanfang zu springen.        | Phase 1-2   |
| Responsive Webseite | Die Webseite passt sich an den verfügbaren Viewport an (Desktop, Tablet und Smartphone)      | Phase 2   |
| Responsive Navigation | Bei kleinerem Viewport, vor allem Smartphone erscheint ein Hamburger-Menü      | Phase 2-3   |
| Web-Components | Einsatz von JavaScript, um Header u. Footer als Komponente in Unterseiten einzubinden     | Phase 2-3   |
| Smooth Scrolling | Angenehmes Scroll-Verhalten der Seite      | Phase 2-3   |
| Sticky Navigation | Navigation bleibt oben fixiert, um einfach zu den Bereichen zu springen      | Phase 2   |
| Scroll-Animation | Integration einfacher Effekte während Scrollen, um Seite interaktiver zu gestalten    | Phase 3   |
| Favicon | Die Webseite erhält ein eigenes, passendes Favicon in verschiedenen Größen bzw. für unterschiedliche Geräte     | Phase 2-3   |
| Bild-Animationen | Beim Hover oder Klick auf Projekte/Fotos erscheint eine Animation      | Phase 2-3   |

Geplante Funktionalitäten

- Dark-Mode: Der Nutzer kann manuell auf einen dunklen Modus umschalten; Steuerung über CSS-Klassen (Standard: Heller Modus)
- Lightbox: Zum Öffnen und Betrachten der vergrößerten Bilder aus "Arbeiten" und "Fotografie" 



## Testing

- Test der Funktionalität der Seite mittels "Entwicklertools" in unterschiedlichen Browsern (Chrome, Firefox und Edge)
- Test des responsiven Verhaltens mithilfe der "Entwicklertools" 
- Einsatz der Lighthouse-Funktion (über Entwicklertools im Browser) mit folgendem Ergebnis:
  - Accessibility: 91/100
  - Best Practices: 92/100



## Git-Commits / Projektphasen

- Phase 1: Konzeption der Webseite inkl. Erstellung der semantischen HTML-Struktur. Aufbau der Seite  Festlegung der Inhalte, Bilder. (Commit-Tag: "v1.0.0-Konzept")

- Phase 2: Erarbeitung des Aussehens mittels CSS, Grid, Flexbox usw. Überarbeitung des bestehenden Konzepts, sofern neue Funktionen hinzukommen bzw. geplante Funktionen verworfen werden. (Commit-Tag: "v2.0.0-Erarbeitung")

- Phase 3: Finalisierungsphase - Integration zusätzlicher Funktionen bzw. Einsatz von CSS-Frameworks möglich. Optimierung von Design, Performance und Benutzerfreundlichkeit. (Commit-Tag: "v3.0.0-Finalisierung")


## Autor

2026 Martha van Tricht // Erstellt im Rahmen des Studiums.