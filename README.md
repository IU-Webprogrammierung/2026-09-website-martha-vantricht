# Rootworx Portfolio

## Projektbeschreibung

Gestaltung und Entwicklung eines persönlichen Portfolios im Rahmen des Moduls Web-Programmierung (DLBUXPWP01) im Studiengang Medieninformatik an der iu. 
Die Webseite enthält ausgewählte, persönliche Arbeiten aus den Bereichen Webdesign, Grafikdesign, Produktdesign und Fotografie.

## Informationsarchitektur & Sektionen

Aufbau der Seite als als OnePager mit mehreren Bereichen sowie zusätzlichen Unterseiten.  

-  **Header**: Logo und Hauptnavigation
-  **Hero/Home**: kurzer Einstieg und zentrale Aussage
-  **Über mich**: persönliche Vorstellung und gestalterischer Hintergrund
-  **Arbeiten**: Übersicht der ausgewählten Arbeiten
-  **Fotografien**: fotografische Inhalte oder Bildserie
-  **Kontakt**: Kontaktinformationen inkl. einem Kontaktformular
-  **Footer**: ergänzende Links und Copyright-/Projektinformationen

Die Bereiche werden semantisch mit HTML5-Elementen wie `<header>`, `<nav>`, `<main>`, `<section>` und `<footer>` strukturiert.


## Projektstruktur

- `index.html` – Startseite
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutzerklärung
- `404.html` – 404-Fehlerseite
- `assets/` – Enthält sämtliche relevante Dateien in jeweiligen Unterordnern 
- `assets/favicon/` - 
- `assets/fonts/` - Enthält  Schriftarten, welche für die Webseite lokal eingebunden werden
- `assets/images/` - Enthält die zur Gestaltung der Seite erforderlichen Bilder
- `assets/fotos/` - Bilder zum Bereich "Fotografie"
- `assets/works/` - Bilder zum Bereich "Arbeiten"
- `assets/style.css` - Stylesheet


## Eingesetzte Technologien

- HTML5 für die semantische Seitenstruktur
- CSS3 für Farben, Typografie, Abstände und Layout
- Flexbox für eindimensionale Anordnungen, z. B. Header und Navigation, Hero-Bereich
- CSS Grid für zweidimensionale Layouts, z. B. Bereich der Arbeiten und Fotografien sowie Kontaktbereich
- Keine grundlegende Grid-Struktur im body; jeder Bereich erhält sein eigenes, passendes Layout
- JavaScript


##  Barrierefreiheit

- Verwendung semantischer HTML5-Elemente
- Kennzeichnung der Navigationen mit "arial-Label"
- Kennzeichnung verwendeter Bilder mit alt-Tag und passender Beschreibung 
- Felder im Kontaktformular mit `<label>` ausgezeichnet


## Funktionalitäten

Folgende Funktionen sind in jeweiliger Projektphase geplant bzw. integriert:

| Funktion       |      Kurzbeschreibung       |  Phase    |
|----------------|-----------------------------|-----------|
| Back-to-top     |  Einbau eines Buttons im Footer, um direkt zum Seitenanfang zu springen.        | Phase 1-2   |
| Responsive Webseite | Die Webseite passt sich an den Viewport an (Desktop, Tablet und Smartphone)      | Phase 2   |
| Responsive Navigation | Bei kleinerem Viewport, vor allem Smartphone erscheint ein Hamburger-Menü      | Phase 2-3   |
| Web-Components | Einsatz von JavaScript, um Header u. Footer als Komponente in Unterseiten einzubinden     | Phase 2-3   |
| Smooth Scrolling | Angenehmes Scroll-Verhalten der Seite      | Phase 2-3   |
| Sticky Navigation | Navigation bleibt oben fixiert, um einfach zu den Bereichen zu springen      | Phase 2   |
| Scroll-Animation | Integration einfacher Scroll-Effekte    | Phase 3   |
| Favicon | Die Webseite erhält ein eigenes, passendes Favicon in verschiedenen Größen bzw. für unterschiedliche Geräte     | Phase 2-3   |
| Bild-Animationen | Beim Hover oder Klick auf Projekte/Fotos erscheint eine Animation      | Phase 2-3   |


<!--  noch fertig schreiben


## Testing

xxxx

-->


## Git-Commits / Projektphasen

- Phase 1: Konzeption der Webseite inkl. Erstellung der semantischen HTML-Struktur. Aufbau der Seite  Festlegung der Inhalte, Bilder. (Commit-Tag: "v1.0.0-Konzept")

- Phase 2: Erarbeitung des Aussehens mittels CSS, Grid, Flexbox usw. Überarbeitung des bestehenden Konzepts, sofern neue Funktionen hinzukommen bzw. geplante Funktionen verworfen werden. (Commit-Tag: "v2.0.0-Erarbeitung")

- Phase 3: Finalisierungsphase - Integration zusätzlicher Funktionen bzw. Einsatz von CSS-Frameworks möglich. (Commit-Tag: "v3.0.0-Finalisierung")


## Autor

2026 Martha van Tricht // Erstellt im Rahmen des Studiums.