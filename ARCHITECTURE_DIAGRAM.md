# help.planvo.de - High-Level Architektur Diagramm

## 📊 System-Übersicht

```mermaid
graph TB
    subgraph "Entwicklungsumgebung"
        DEV[Entwickler]
        LOCAL[MkDocs Local Server<br/>localhost:8000]
        MARKDOWN[Markdown Dateien<br/>docs/*.md]
        CSS[Custom CSS<br/>assets/extra.css]
    end

    subgraph "Version Control"
        GIT[Git Repository]
        MAIN[main Branch]
        GH_PAGES[gh-pages Branch]
    end

    subgraph "CI/CD Pipeline"
        GITHUB_ACTIONS[GitHub Actions<br/>deploy.yml]
        PYTHON[Python 3.x Environment]
        MKDOCS[MkDocs Build]
        DEPLOY[Deploy to GitHub Pages]
    end

    subgraph "Produktionsumgebung"
        GITHUB_PAGES[GitHub Pages Hosting]
        DNS[DNS: help.planvo.de]
        LIVE[Live Website<br/>https://help.planvo.de]
    end

    subgraph "Dokumentations-Struktur"
        INDEX[Startseite<br/>index.md]
        ERSTE_SCHRITTE[Erste Schritte<br/>anmeldung.md, dashboard.md]
        WEB[Web-Version<br/>zeiterfassung.md, projekte.md, schichten.md]
        MOBILE[Mobile App<br/>installation.md, zeiterfassung.md, offline-modus.md]
        API[API & Integrationen<br/>api-keys.md, quickstart.md, reference.md]
        HILFE[Hilfe & Support<br/>faq.md, kontakt.md]
    end

    subgraph "Technologie-Stack"
        MKDOCS_MATERIAL[MkDocs Material Theme]
        PLUGINS[Plugins:<br/>- search<br/>- minify<br/>- swagger-ui-tag]
        EXTENSIONS[Markdown Extensions:<br/>- admonition<br/>- tabs<br/>- emoji<br/>- code highlighting]
    end

    DEV --> MARKDOWN
    DEV --> CSS
    MARKDOWN --> LOCAL
    CSS --> LOCAL
    DEV --> GIT
    GIT --> MAIN
    MAIN --> GITHUB_ACTIONS
    GITHUB_ACTIONS --> PYTHON
    PYTHON --> MKDOCS
    MKDOCS --> DEPLOY
    DEPLOY --> GH_PAGES
    GH_PAGES --> GITHUB_PAGES
    GITHUB_PAGES --> DNS
    DNS --> LIVE

    INDEX --> ERSTE_SCHRITTE
    INDEX --> WEB
    INDEX --> MOBILE
    INDEX --> API
    INDEX --> HILFE

    MKDOCS --> MKDOCS_MATERIAL
    MKDOCS --> PLUGINS
    MKDOCS --> EXTENSIONS

    style DEV fill:#e1f5ff
    style LIVE fill:#4caf50,color:#fff
    style GITHUB_ACTIONS fill:#ff9800,color:#fff
    style MKDOCS_MATERIAL fill:#3f51b5,color:#fff
```

## 🏗️ Komponenten-Architektur

```mermaid
graph LR
    subgraph "Konfiguration Layer"
        CONFIG[mkdocs.yml<br/>- Theme Config<br/>- Navigation<br/>- Plugins<br/>- Extensions]
    end

    subgraph "Content Layer"
        CONTENT[Markdown Dokumente<br/>docs/]
        ASSETS[Assets<br/>- CSS<br/>- Images<br/>- Favicon]
    end

    subgraph "Build Layer"
        BUILD[MkDocs Build Process]
        STATIC[Static HTML/CSS/JS]
    end

    subgraph "Deployment Layer"
        CI[GitHub Actions]
        HOST[GitHub Pages]
    end

    CONFIG --> BUILD
    CONTENT --> BUILD
    ASSETS --> BUILD
    BUILD --> STATIC
    STATIC --> CI
    CI --> HOST
```

## 📁 Datei-Struktur

```mermaid
graph TD
    ROOT[help.planvo.de/]
    
    ROOT --> CONFIG[mkdocs.yml<br/>Hauptkonfiguration]
    ROOT --> README[README.md<br/>Projekt-Dokumentation]
    ROOT --> REQ[requirements.txt<br/>Python Dependencies]
    ROOT --> GITIGNORE[.gitignore]
    
    ROOT --> DOCS[docs/]
    DOCS --> INDEX[index.md<br/>Startseite]
    DOCS --> ASSETS[assets/]
    ASSETS --> CSS[extra.css<br/>Custom Styling]
    ASSETS --> IMG[images/<br/>Screenshots]
    ASSETS --> FAVICON[favicon.png]
    
    DOCS --> ERSTE[erste-schritte/]
    ERSTE --> ERSTE_INDEX[index.md]
    ERSTE --> ERSTE_ANM[anmeldung.md]
    ERSTE --> ERSTE_DASH[dashboard.md]
    
    DOCS --> WEB[web/]
    WEB --> WEB_INDEX[index.md]
    WEB --> WEB_ZEIT[zeiterfassung.md]
    WEB --> WEB_PROJ[projekte.md]
    WEB --> WEB_SCHICHT[schichten.md]
    
    DOCS --> MOBILE[mobile/]
    MOBILE --> MOB_INDEX[index.md]
    MOBILE --> MOB_INST[installation.md]
    MOBILE --> MOB_ZEIT[zeiterfassung.md]
    MOBILE --> MOB_OFF[offline-modus.md]
    
    DOCS --> API[api/]
    API --> API_INDEX[index.md]
    API --> API_KEYS[api-keys.md]
    API --> API_QUICK[quickstart.md]
    API --> API_REF[reference.md]
    API --> API_EX[examples.md]
    API --> API_SWAG[swagger.md]
    API --> API_YAML[openapi.yaml]
    
    DOCS --> HILFE[hilfe/]
    HILFE --> HILFE_FAQ[faq.md]
    HILFE --> HILFE_KON[kontakt.md]
    
    ROOT --> GITHUB[.github/]
    GITHUB --> WORKFLOWS[workflows/]
    WORKFLOWS --> DEPLOY[deploy.yml<br/>CI/CD Pipeline]

    style CONFIG fill:#3f51b5,color:#fff
    style DEPLOY fill:#ff9800,color:#fff
    style CSS fill:#4caf50,color:#fff
```

## 🔄 Deployment-Workflow

```mermaid
sequenceDiagram
    participant Dev as Entwickler
    participant Git as Git Repository
    participant GH as GitHub Actions
    participant Build as MkDocs Build
    participant Pages as GitHub Pages
    participant User as End-User

    Dev->>Git: git push origin main
    Git->>GH: Trigger Workflow
    GH->>GH: Checkout Repository
    GH->>GH: Setup Python 3.x
    GH->>GH: Install Dependencies<br/>(requirements.txt)
    GH->>Build: mkdocs build
    Build->>Build: Process Markdown
    Build->>Build: Apply Theme
    Build->>Build: Generate Static Site
    Build->>Pages: mkdocs gh-deploy
    Pages->>Pages: Deploy to gh-pages branch
    Pages->>User: https://help.planvo.de
    User->>User: View Documentation
```

## 🎨 Theme & Styling Architektur

```mermaid
graph TB
    subgraph "MkDocs Material Theme"
        BASE[Base Theme<br/>Material Design]
        FEATURES[Features:<br/>- Navigation<br/>- Search<br/>- Dark Mode<br/>- Responsive]
    end

    subgraph "Custom Styling"
        CSS_FILE[extra.css]
        COLORS[Planvo Branding<br/>- Primary: #3f51b5<br/>- Accent Colors]
        COMPONENTS[Custom Components:<br/>- Grid Cards<br/>- Buttons<br/>- Admonitions]
    end

    subgraph "Markdown Extensions"
        ADMONITION[Admonitions<br/>Info/Tip/Warning]
        TABS[Tabs<br/>Multi-Content]
        EMOJI[Emoji Support]
        CODE[Code Highlighting]
        TOC[Table of Contents]
    end

    BASE --> FEATURES
    CSS_FILE --> COLORS
    CSS_FILE --> COMPONENTS
    FEATURES --> ADMONITION
    FEATURES --> TABS
    FEATURES --> EMOJI
    FEATURES --> CODE
    FEATURES --> TOC

    style BASE fill:#3f51b5,color:#fff
    style CSS_FILE fill:#4caf50,color:#fff
```

## 📚 Content-Organisation

```mermaid
mindmap
  root((help.planvo.de))
    Startseite
      Willkommen
      Schnellstart
      Beliebte Artikel
    Erste Schritte
      Anmeldung
      Dashboard
    Web-Version
      Zeiterfassung
      Projekte
      Schichten
    Mobile App
      Installation
      Zeiterfassung
      Offline-Modus
    API & Integrationen
      API Keys
      Quickstart
      Referenz
      Code-Beispiele
      Swagger UI
    Hilfe & Support
      FAQ
      Kontakt
```

## 🔧 Technologie-Stack Details

| Komponente | Technologie | Version | Zweck |
|------------|------------|---------|-------|
| **Build Tool** | MkDocs | ≥1.5.0 | Statische Site-Generierung |
| **Theme** | Material for MkDocs | ≥9.5.0 | UI Framework |
| **Language** | Python | 3.x | Build Environment |
| **Markdown** | Python-Markdown | - | Content Processing |
| **Deployment** | GitHub Actions | - | CI/CD Pipeline |
| **Hosting** | GitHub Pages | - | Static Site Hosting |
| **DNS** | CNAME Record | - | Custom Domain |

## 🚀 Features & Capabilities

### ✅ Implementierte Features

- **Navigation**
  - GitHub-Style Breadcrumbs
  - Sticky Navigation Tabs
  - Section-based Sidebar
  - Table of Contents (TOC)
  - Instant Navigation (kein Reload)

- **Search**
  - Volltextsuche
  - Suchvorschläge
  - Highlighting
  - Shareable Search Links

- **Content**
  - Markdown-basiert
  - Code Highlighting
  - Admonitions (Callouts)
  - Tabs für Multi-Content
  - Emoji Support
  - Responsive Images

- **UI/UX**
  - Dark/Light Mode Toggle
  - Mobile-optimiert
  - Custom Planvo Branding
  - Smooth Scrolling
  - Print Styles

- **API Integration**
  - Swagger UI für API-Dokumentation
  - OpenAPI YAML Support
  - Code Examples

### 🔄 Deployment Features

- **Automatisches Deployment**
  - Triggered bei Push auf `main`
  - Manueller Trigger möglich
  - Automatische Dependency Installation
  - Build Caching für Performance

- **Version Control**
  - Git-basiert
  - Branch-basierte Workflows
  - Edit Links zu GitHub

## 📊 Metriken & Statistiken

- **Seitenanzahl**: ~20 Dokumentationsseiten
- **Kategorien**: 6 Hauptkategorien
- **Sprache**: Deutsch
- **Build-Zeit**: ~2-3 Minuten
- **Deployment-Zeit**: ~2 Minuten nach Push
- **Technologie**: Python + MkDocs + GitHub Pages

## 🔗 Externe Abhängigkeiten

1. **GitHub**
   - Repository Hosting
   - GitHub Actions (CI/CD)
   - GitHub Pages (Hosting)

2. **Python Packages**
   - mkdocs
   - mkdocs-material
   - mkdocs-minify-plugin
   - mkdocs-swagger-ui-tag
   - pymdown-extensions

3. **DNS Provider**
   - CNAME Record für help.planvo.de

## 🎯 Zielgruppen

1. **End-User**
   - Planvo-Kunden
   - Mitarbeiter
   - Projektleiter
   - Geschäftsführung

2. **Entwickler**
   - API-Integratoren
   - Third-Party Entwickler

3. **Support-Team**
   - Interne Referenz
   - FAQ-Quelle

---

**Erstellt:** November 2024  
**Version:** 1.0.0  
**Status:** Produktiv (https://help.planvo.de)


