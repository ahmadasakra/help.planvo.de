# Planvo Hilfe & Dokumentation 📚

Offizielle Benutzer-Dokumentation für Planvo - Ihre digitale Business-Lösung.

**Live-Dokumentation:** https://help.planvo.de

---

## 🎯 Über dieses Projekt

Dies ist die vollständige Hilfe-Dokumentation für Planvo, erstellt mit **MkDocs Material**. Die Dokumentation deckt ab:

- ✅ Web-Version (Desktop)
- ✅ Mobile App (iOS & Android)
- ✅ Alle Hauptfunktionen
- ✅ FAQ & Support
- ✅ Schritt-für-Schritt-Anleitungen

---

## 🚀 Quick Start

### Voraussetzungen

```bash
# Python 3.7 oder höher
python --version

# pip (Python Package Manager)
pip --version
```

### Installation & lokaler Server

```bash
# 1. Repository klonen (falls noch nicht geschehen)
cd /Users/ahmedasakrah/Desktop/PlanvoMobile/help.planvo.de

# 2. Dependencies installieren
pip install -r requirements.txt

# 3. Lokalen Dev-Server starten
mkdocs serve

# 4. Im Browser öffnen
# → http://localhost:8000
```

Das war's! Sie sehen jetzt die Dokumentation lokal.

### Alternative Installation (einzelne Pakete)

```bash
pip install mkdocs-material
pip install mkdocs-minify-plugin
pip install mkdocs-swagger-ui-tag
```

---

## 📁 Projekt-Struktur

```
help.planvo.de/
├── docs/                           # Dokumentations-Inhalte
│   ├── index.md                    # Startseite
│   ├── assets/
│   │   ├── extra.css              # Custom Styling
│   │   └── images/                # Screenshots & Bilder
│   ├── erste-schritte/
│   │   ├── index.md
│   │   ├── anmeldung.md
│   │   └── dashboard.md
│   ├── web/
│   │   ├── index.md
│   │   ├── zeiterfassung.md
│   │   ├── projekte.md
│   │   └── schichten.md
│   ├── mobile/
│   │   ├── index.md
│   │   ├── installation.md
│   │   ├── zeiterfassung.md
│   │   └── offline-modus.md
│   └── hilfe/
│       ├── faq.md
│       └── kontakt.md
│
├── mkdocs.yml                      # Haupt-Konfiguration
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions
├── .gitignore
└── README.md                       # Diese Datei
```

---

## 🎨 Features

### ✨ Bereits implementiert

- ✅ **GitHub-Style Navigation** - Breadcrumbs, TOC rechts, Sections links
- ✅ **Mobile-optimiert** - Perfekt auf allen Geräten
- ✅ **Dark Mode** - Automatischer Hell/Dunkel-Modus
- ✅ **Suchfunktion** - Schnelles Finden von Inhalten
- ✅ **Code-Highlighting** - Syntax-Highlighting für Code
- ✅ **Emojis** - Visuelle Icons für bessere Orientierung
- ✅ **Custom CSS** - Planvo-Branding
- ✅ **Responsive Design** - Funktioniert auf Desktop, Tablet, Mobile

### 🎯 MVP Phase 1 (Aktuell)

**10 Kern-Seiten:**
1. Startseite (index.md) ✅
2. Erste Schritte → Anmeldung ✅
3. Erste Schritte → Dashboard ✅
4. Web → Zeiterfassung ✅
5. Web → Projekte ✅
6. Web → Schichten ✅
7. Mobile → Installation ✅
8. Mobile → Zeiterfassung ✅
9. Mobile → Offline-Modus ✅
10. Hilfe → FAQ ✅
11. Hilfe → Kontakt ✅

---

## 🚢 Deployment

### Automatisches Deployment mit GitHub Actions

Das Projekt ist so konfiguriert, dass es automatisch zu GitHub Pages deployed wird, sobald Sie Änderungen zu `main` pushen.

**Workflow:**

```bash
# 1. Änderungen committen
git add .
git commit -m "Update Dokumentation"

# 2. Push zu GitHub
git push origin main

# 3. GitHub Actions deployed automatisch!
# → https://help.planvo.de ist in ~2 Minuten live
```

**Was passiert automatisch:**

1. ✅ GitHub Actions wird getriggert
2. ✅ Python Environment wird aufgesetzt
3. ✅ Dependencies werden aus `requirements.txt` installiert:
   - `mkdocs-material` (Theme)
   - `mkdocs-minify-plugin` (Optimierung)
   - `mkdocs-swagger-ui-tag` (API-Dokumentation)
4. ✅ Dokumentation wird gebaut
5. ✅ Zu `gh-pages` Branch deployed
6. ✅ Auf https://help.planvo.de verfügbar

---

### GitHub Pages konfigurieren

**Einmalige Einrichtung:**

1. GitHub Repository → **Settings**
2. **Pages** (linke Sidebar)
3. Source: **gh-pages branch**
4. Custom domain: **help.planvo.de**
5. **Save**

**DNS konfigurieren:**

Bei Ihrem DNS-Provider (z.B. wo planvo.de gehostet ist):
```
CNAME Record:
help → IHR-USERNAME.github.io
```

Warten Sie 5-10 Minuten → https://help.planvo.de ist live!

---

### Manuelles Deployment

Falls Sie manuell deployen möchten:

```bash
# Build & Deploy zu GitHub Pages
mkdocs gh-deploy --force --clean

# Oder nur lokal bauen
mkdocs build
# → Ergebnis in 'site/' Ordner
```

---

## ✏️ Inhalte bearbeiten

### Neue Seite erstellen

1. **Markdown-Datei erstellen:**
```bash
touch docs/neue-kategorie/neue-seite.md
```

2. **Inhalt hinzufügen:**
```markdown
# Titel der Seite

> **⏱️ Lesezeit:** 5 Minuten  
> **📱 Verfügbar in:** Web & Mobile  

## Überschrift

Inhalt hier...
```

3. **In Navigation einfügen (mkdocs.yml):**
```yaml
nav:
  - Neue Kategorie:
    - Neue Seite: neue-kategorie/neue-seite.md
```

4. **Testen:**
```bash
mkdocs serve
# → http://localhost:8000
```

---

### Screenshots hinzufügen

1. **Screenshot in `docs/assets/images/` speichern:**
```bash
docs/assets/images/zeiterfassung-start.png
```

2. **In Markdown einbinden:**
```markdown
![Zeiterfassung Start](../assets/images/zeiterfassung-start.png)
*Abbildung: Zeiterfassung starten*
```

**Best Practices:**
- Format: PNG für Screenshots
- Größe: Max 1920px Breite
- Optimieren: Mit TinyPNG komprimieren
- Naming: `feature_screen_action.png`

---

## 🎨 Styling anpassen

### Custom CSS bearbeiten

Datei: `docs/assets/extra.css`

```css
/* Ihre eigenen Styles */
:root {
  --planvo-primary: #3f51b5;
  /* Mehr Variablen... */
}
```

### Farben ändern

In `mkdocs.yml`:
```yaml
theme:
  palette:
    - scheme: default
      primary: indigo      # Ändern Sie hier
      accent: indigo       # Und hier
```

**Verfügbare Farben:**
red, pink, purple, deep purple, indigo, blue, light blue, cyan, teal, green, light green, lime, yellow, amber, orange, deep orange

---

## 📝 Markdown-Tipps

### Callout-Boxen

```markdown
!!! info "Information"
    Dies ist eine Info-Box

!!! tip "Tipp"
    Dies ist ein Tipp

!!! warning "Warnung"
    Dies ist eine Warnung

!!! danger "Achtung"
    Dies ist kritisch
```

### Tabs

```markdown
=== "Tab 1"

    Inhalt Tab 1

=== "Tab 2"

    Inhalt Tab 2
```

### Code-Blöcke

```markdown
```python
def hello():
    print("Hello Planvo!")
```
```

### Tabellen

```markdown
| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert 1   | Wert 2   | Wert 3   |
```

---

## 🔧 Konfiguration

### mkdocs.yml Hauptbereiche

```yaml
# Website-Metadaten
site_name: Planvo Hilfe
site_url: https://help.planvo.de

# Theme & Design
theme:
  name: material
  language: de
  features: [...]

# Plugins
plugins:
  - search

# Navigation
nav:
  - Startseite: index.md
  - ...
```

---

## 🐛 Troubleshooting

### Problem: `mkdocs serve` funktioniert nicht

```bash
# MkDocs neu installieren
pip install --upgrade mkdocs-material

# Prüfen ob Port 8000 belegt ist
lsof -i :8000

# Anderen Port nutzen
mkdocs serve -a localhost:8001
```

### Problem: Bilder werden nicht angezeigt

```markdown
<!-- Falscher Pfad -->
![Bild](images/screenshot.png)

<!-- Richtiger Pfad (von docs/ aus) -->
![Bild](assets/images/screenshot.png)

<!-- Von Unterordner aus -->
![Bild](../assets/images/screenshot.png)
```

### Problem: Navigation fehlt

Prüfen Sie `mkdocs.yml`:
```yaml
nav:
  - Startseite: index.md  # Muss existieren
  - Sektion:
    - Unterseite: pfad/zur/seite.md  # Pfad prüfen
```

### Problem: Styling fehlt

1. Prüfen Sie `docs/assets/extra.css` existiert
2. In `mkdocs.yml` muss sein:
```yaml
theme:
  extra_css:
    - assets/extra.css
```

---

## 📊 Analytics (optional)

### Google Analytics hinzufügen

In `mkdocs.yml`:
```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX  # Ihr Tracking-Code
```

---

## 🔗 Nützliche Links

- **MkDocs Dokumentation:** https://www.mkdocs.org
- **Material Theme:** https://squidfunk.github.io/mkdocs-material/
- **Markdown Guide:** https://www.markdownguide.org
- **Emoji Cheat Sheet:** https://www.webfx.com/tools/emoji-cheat-sheet/

---

## 🤝 Contribution

### Verbesserungen vorschlagen

1. **Fehler gefunden?** → Erstellen Sie ein Issue
2. **Verbesserung?** → Erstellen Sie einen Pull Request
3. **Neue Seite?** → Diskutieren Sie im Team

### Workflow

```bash
# 1. Branch erstellen
git checkout -b feature/neue-seite

# 2. Änderungen machen
# ... Dateien bearbeiten ...

# 3. Committen
git add .
git commit -m "Neue Seite: XYZ hinzugefügt"

# 4. Push
git push origin feature/neue-seite

# 5. Pull Request erstellen auf GitHub
```

---

## 📞 Support

### Fragen zur Dokumentation?

- **E-Mail:** [info@planvo.de](mailto:info@planvo.de)
- **GitHub Issues:** [github.com/IHR-USERNAME/help.planvo.de/issues](#)

---

## ✅ Checkliste für neue Seiten

- [ ] Markdown-Datei erstellt
- [ ] Titel und Meta-Informationen (Lesezeit, Plattform)
- [ ] Inhaltsverzeichnis mit Ankern
- [ ] Screenshots eingefügt (falls nötig)
- [ ] Code-Beispiele mit Syntax-Highlighting
- [ ] Callout-Boxen für Tipps/Warnungen
- [ ] Links zu verwandten Seiten
- [ ] In `mkdocs.yml` Navigation eingefügt
- [ ] Lokal getestet mit `mkdocs serve`
- [ ] Rechtschreibung geprüft
- [ ] Git committed und gepushed

---

## 🎉 Das war's!

Ihre Planvo-Dokumentation ist jetzt einsatzbereit!

**Nächste Schritte:**

1. ✅ Testen Sie lokal: `mkdocs serve`
2. ✅ Pushen Sie zu GitHub
3. ✅ Warten Sie auf automatisches Deployment
4. ✅ Öffnen Sie https://help.planvo.de
5. ✅ Feiern Sie! 🎊

---

**Erstellt mit ❤️ für Planvo-Kunden**

*Letzte Aktualisierung: November 2024 | Version 1.0.0*
