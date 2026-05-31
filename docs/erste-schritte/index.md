# Erste Schritte mit Planvo

Willkommen bei Planvo! Diese Anleitung hilft Ihnen, schnell und einfach mit Planvo zu starten — für Handwerksbetriebe, Dienstleister und KMU.

---

## 📋 Was Sie in diesem Bereich lernen

- ✅ Wie Sie sich bei Planvo anmelden (Web, App, ggf. SSO)
- ✅ Wie das Dashboard aufgebaut ist
- ✅ Welche Bereiche es in der Seitenleiste gibt
- ✅ Wie Sie Ihr Profil einrichten

---

## 🎯 Navigation in der Web-App

Planvo gliedert Funktionen in Bereiche der **linken Seitenleiste**. Die sichtbaren Menüpunkte hängen von **Rolle, Berechtigung und Tarif** ab.

| Menüpunkt | Route | Beschreibung | Tarif (min.) |
|-----------|-------|--------------|--------------|
| **Dashboard** | `/dashboard` | Persönliche Übersicht | Alle |
| **Auswertung** | `/analyse` | Kennzahlen, Diagramme, Reports | Business |
| **Projekte** | `/projects` | Projekte verwalten | Business |
| **Plantafel** | `/plantafel` | Visuelle Einsatzplanung | Premium |
| **Zeiterfassung** | `/project-time` | Kalender, Zeiteinträge, Stundenkonto | Business |
| **Aufgaben** | `/taskmanager` | Tasks im Team | Pro |
| **Mitarbeiter** | `/employee` | Stammdaten, Teams, HR | Business |
| **Schichtpläne** | `/shiftplans` | Schichtplanung | Pro |
| **Abwesenheiten** | `/leave-management` | Urlaub, Krankheit, Freigaben | Business |
| **Kunden** | `/clients` | Kunden und Kontakte | Business |
| **Rechnungen** | `/documents/invoices` | Ausgangsrechnungen, Mahnungen | Pro |
| **Angebote** | `/documents/quotes` | Angebote und Kalkulation | Pro |
| **Auftragsbestätigungen** | `/documents/order-confirmations` | ABs | Pro |
| **Lieferscheine** | `/documents/delivery-notes` | Liefernachweise | Pro |
| **Eingangsrechnungen** | `/incoming-invoices` | Eingehende Belege | Pro |
| **DMS** | `/dms` | Dokumentenmanagement | Premium |
| **Katalog** | `/katalog` | Material / Stammartikel | Pro |
| **Einstellungen** | `/settings` | Mandant, Rollen, App-Einstellungen | Admin |

!!! tip "Menüpunkt fehlt?"
    Ihr Tarif oder Ihre Rolle schaltet Module frei. Details: [planvo.de/preise](https://www.planvo.de/preise) oder Administrator kontaktieren.

---

## 🚀 Quick Start Guide

### Schritt 1: Anmelden

1. Öffnen Sie `https://ihre-firma.planvo.de` (Subdomain von Ihrem Administrator)
2. Melden Sie sich mit **E-Mail/Passwort** oder **SSO (Keycloak)** an — je nach Firma
3. Bei der App: Subdomain, E-Mail und Passwort eingeben

[:octicons-arrow-right-24: Detaillierte Anmeldeanleitung](anmeldung.md)

---

### Schritt 2: Dashboard kennenlernen

Nach der Anmeldung sehen Sie das **Dashboard** mit u. a.:

- Zeiterfassung (Widget, je nach Tarif)
- Projekte, Aufgaben, Schichten
- Geburtstage im Team (HR)
- Kennzahlen und Benachrichtigungen

[:octicons-arrow-right-24: Dashboard-Übersicht](dashboard.md)

---

### Schritt 3: Erste Aktion ausführen

=== "Zeit erfassen"

    1. Seitenleiste → **Projekte & Planung** → **Zeiterfassung**
    2. **+ Zeit erfassen** oder Eintrag im Kalender anlegen
    3. Projekt, Datum, Start und Ende wählen
    
    [:octicons-arrow-right-24: Zeiterfassung](../web/zeiterfassung.md)

=== "Abwesenheit beantragen"

    1. Seitenleiste → **Mitarbeiter & HR** → **Abwesenheiten**
    2. **Neuer Antrag** wählen
    3. Zeitraum und Art der Abwesenheit angeben
    
    [:octicons-arrow-right-24: Abwesenheiten](../web/urlaub.md)

=== "Projekt ansehen"

    1. Seitenleiste → **Projekte & Planung** → **Projekte**
    2. Projekt in der Liste öffnen
    
    [:octicons-arrow-right-24: Projekte](../web/projekte.md)

---

## 📱 Mobile App installieren

[:octicons-arrow-right-24: Mobile App Guide](../mobile/installation.md)

---

## 🎓 Nächste Schritte

1. [Zeiterfassung](../web/zeiterfassung.md)
2. [Abwesenheiten](../web/urlaub.md)
3. [Schichtpläne](../web/schichten.md)
4. [Mobile App](../mobile/index.md)

---

## ❓ Häufige Fragen

### Ich kann mich nicht anmelden. Was tun?

1. Subdomain und E-Mail prüfen
2. Bei Legacy-Login: „Passwort vergessen?“
3. Bei SSO: Firmen-Login (Microsoft/Google) nutzen
4. Administrator oder [Support](../hilfe/kontakt.md) kontaktieren

### Wo finde ich meine Stammdaten?

Profilbild oben rechts → **Profil** / **Einstellungen**

### Kann ich Planvo auf mehreren Geräten nutzen?

Ja — Desktop, Tablet und Smartphone synchronisieren Ihre Daten.

---

## 📞 Weitere Hilfe

--8<-- "includes/kontakt-ssot.md"

---

[:octicons-arrow-right-24: Weiter zu Anmeldung](anmeldung.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Weiter zu Dashboard](dashboard.md){ .md-button }

*Letzte Aktualisierung: Mai 2026*
