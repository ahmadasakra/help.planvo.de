# Abwesenheiten

> **Menüpunkt in der App:** **Abwesenheiten** (`/leave-management`)  
> **Seitentitel in der App:** Abwesenheitsverwaltung  
> **Lesezeit:** ca. 18 Minuten  
> **Verfügbar in:** Web, teilweise Mobile App  
> **Für:** Mitarbeiter, Teamleitung, HR, Verwaltung und Admins  
> **Modul:** Abwesenheiten / Personal & Urlaub

---

## Kurz erklärt

Mit der **Abwesenheitsverwaltung** in Planvo verwalten Sie Urlaub, Krankheit, unbezahlten Urlaub und weitere Abwesenheitsarten zentral an einem Ort.

Mitarbeiter können Abwesenheiten beantragen, Teamleitungen oder HR können Anträge prüfen und freigeben. Administratoren richten unter **Einstellungen** die verfügbaren **Urlaubstypen** ein — diese erscheinen dann in Anträgen und Kalendern.

!!! note "Kein Menüpunkt Abwesenheiten?"
    Ihr Tarif muss das Modul **Abwesenheiten** enthalten (ab **Basic**, je nach Branchenprofil). Zusätzlich brauchen Sie die Berechtigung, eigene oder Team-Abwesenheiten anzuzeigen.

---

## Teil A: Abwesenheitsverwaltung

Öffnen Sie in der Seitenleiste **Abwesenheiten**. Oben rechts legen Sie jederzeit einen neuen Antrag an: **+ Neuen Abwesenheitsantrag**.

---

### A.1 Monatsübersicht der Abwesenheiten

**Registerkarte:** **Übersicht** — Team-Abwesenheiten im Monat oder in der Woche.

![Monatsübersicht der Abwesenheiten](../assets/abwesenheit/1.png)

| Bereich | Erklärung |
|---------|-----------|
| Mitarbeiterliste | Links: Name und Bereich jedes Mitarbeiters |
| Monatskalender | Rechts: Tage des gewählten Monats |
| Farbliche Balken | Abwesenheiten als farbige Zeiträume |
| Kürzel | z. B. **UR** = Urlaub, **K** = Krankheit, **UN** = unbezahlter Urlaub |
| Heute-Markierung | Aktueller Tag hervorgehoben |
| Monat / Woche | Umschalten oben rechts |

**Zeitraum:** Pfeile neben dem Monat; mit **Heute** zurück zum aktuellen Datum.

**Neuer Antrag:** [A.4 Abwesenheit beantragen](#a4-abwesenheit-beantragen).

!!! info "Ohne Team-Rechte"
    Ohne Berechtigung für das gesamte Team zeigt **Übersicht** Ihren **persönlichen Jahreskalender** (ähnlich A.2, nur für Sie). Die Monatsübersicht oben ist die **Team-Ansicht** für Führungskräfte und HR.

---

### A.2 Jahreskalender für das Team

**Registerkarte:** **Jahreskalender** — ein ganzes Jahr kompakt.

![Jahreskalender für das Team](../assets/abwesenheit/2.png)

| Funktion | Nutzen |
|----------|--------|
| Ganzes Jahr sichtbar | Engpässe und Urlaubshäufungen erkennen |
| Feiertage | Automatisch markiert |
| Wochenenden | Optisch abgesetzt |
| Farben & Legende | Urlaub, Krankheit, unbezahlter Urlaub unterscheidbar |

**Tipp:** Tag anklicken oder Zeitraum ziehen → **Urlaubsantrag** mit vorausgefüllten Daten ([A.4](#a4-abwesenheit-beantragen)).

---

### A.3 Abwesenheitsanträge prüfen und freigeben

**Registerkarte:** **Anträge** — alle Anträge in einer Tabelle.

![Abwesenheitsanträge verwalten](../assets/abwesenheit/3.png)

| Spalte | Bedeutung |
|--------|-----------|
| Mitarbeiter | Antragsteller |
| Abwesenheitstyp | z. B. Urlaub, Krankheit (aus [Teil B](#teil-b-urlaubstypen-in-den-einstellungen)) |
| Dauer | Zeitraum und Tage |
| Status | Ausstehend, freigegeben, abgelehnt |
| Notizen | Zusatzinfos |
| Antrag & Freigabe | Zeitpunkt und Bearbeiter |
| Aktionen | Freigeben, ablehnen, stornieren |

**Status**

| Status | Bedeutung |
|--------|-----------|
| Ausstehend | Wartet auf Entscheidung |
| Freigegeben | Genehmigt — erscheint im Kalender und Urlaubskonto |
| Abgelehnt | Nicht genehmigt |
| Storniert | Zurückgezogen, Historie bleibt |

**Suchen & filtern:** Feld **Anträge suchen…** und Dropdown **Alle Status**.

**Aktionen** (mit Genehmigungs-Recht): **Haken** = freigeben, **X** = ablehnen, **Storno** = stornieren (bei Freigabe oft mit Pflicht-Grund).

---

### A.4 Abwesenheit beantragen

**+ Neuen Abwesenheitsantrag** oder Kalender → **Urlaubsantrag**.

![Abwesenheit beantragen](../assets/abwesenheit/antrag.png)

| Feld | Erklärung |
|------|-----------|
| Mitarbeiter | Bei HR/Admin wählbar; sonst eigenes Profil |
| Abwesenheitsart | Typ aus den [Urlaubstypen](#teil-b-urlaubstypen-in-den-einstellungen) (z. B. Urlaub, Krankheit) |
| Zeitraum | Start und Ende; Anzeige der **Arbeitstage** (ohne Sa/So) |
| Notizen | Optional, bis 500 Zeichen |

Bei **bezahltem Urlaub** zeigt das Formular das **Urlaubskonto** und warnt bei zu wenig Rest — Einreichung ist oft trotzdem möglich.

**Absenden:** **Antrag stellen** → Status **Ausstehend** in [A.3](#a3-abwesenheitsanträge-prüfen-und-freigeben). Freigabe durch Teamleitung, HR oder Admin.

---

### A.5 Urlaubskonto verstehen

**Registerkarte:** **Urlaubskonto**.

![Urlaubskonto verwalten](../assets/abwesenheit/4.png)

| Karte | Erklärung |
|-------|-----------|
| Urlaubsanspruch | Jahresanspruch in Tagen |
| Genommene Tage | Bereits genutzt |
| Verfügbar | Noch planbar |
| Resturlaub Vorjahr | Übertrag |
| Ausstehend | Beantragt, noch nicht entschieden |

**Berechnung (vereinfacht):**

```text
Urlaubsanspruch
+ Resturlaub Vorjahr
- genommene Urlaubstage
- genehmigte (zukünftige) Urlaubstage
- geplante / ausstehende Urlaubstage
= verfügbarer Resturlaub
```

Die **Detailtabelle** darunter führt dieselbe Logik Schritt für Schritt aus. **Jahresübersicht** und **Bearbeitungshistorie** liefern Details und Änderungsverlauf.

---

### A.6 Abwesenheiten auswerten

**Eigener Menüpunkt** — nicht unter den Registerkarten von Abwesenheiten.

![Abwesenheitsauswertung](../assets/abwesenheit/5.png)

**Weg:** Seitenleiste → **Auswertung** (`/analyse`) → **Abwesenheitsauswertung**

| Bereich | Erklärung |
|---------|-----------|
| Kennzahlen | Mitarbeiter, Ø Resturlaub, Krankentage, Anzahl Typen |
| Krankenstand pro Monat | Balkendiagramm |
| Abwesenheitstypen | Verteilung nach Art |
| Urlaubsstand — Alle Mitarbeiter | Tabelle je Person |
| Export (.xlsx) | Excel-Export |
| Aktualisieren | Daten für gewähltes Jahr laden |

Mehr: [Auswertung (Web)](auswertung.md).

---

## Teil B: Urlaubstypen in den Einstellungen

**Für HR und Admins:** Welche Abwesenheitsarten Mitarbeiter wählen können, legen Sie zentral fest. Die Typen aus Teil B erscheinen in Anträgen ([A.4](#a4-abwesenheit-beantragen)), Kalendern ([A.1](#a1-monatsübersicht-der-abwesenheiten), [A.2](#a2-jahreskalender-für-das-team)) und Auswertungen ([A.6](#a6-abwesenheiten-auswerten)).

Im gleichen Bereich **Personal & Urlaub** finden Sie außerdem (ohne eigene Screenshots hier):

- **Urlaubskonto-Einstellungen** — Regeln zum Jahresurlaub
- **Feiertage** — betriebliche und gesetzliche Feiertage
- **Arbeitszeitmodelle** — Sollzeiten für die Zeiterfassung

---

### B.1 Urlaubstypen in den Einstellungen öffnen

![Einstellungen → Personal & Urlaub → Urlaubstypen](../assets/abwesenheit/urlaubstypen-01-einstellungen.png)

**Navigation**

1. Seitenleiste → **Einstellungen**
2. Kategorie **Personal & Urlaub**
3. **Urlaubstypen** auswählen

Hier verwalten Sie alle Abwesenheitsarten des Unternehmens zentral — ein Einstieg für HR und Admins.

---

### B.2 Urlaubstypen zentral verwalten

![Übersicht Urlaubstypen mit Name, Kategorie und Beschreibung](../assets/abwesenheit/urlaubstypen-02-uebersicht.png)

Auf der Seite **Urlaubstypen** sehen Sie eine Tabelle:

| Spalte | Inhalt |
|--------|--------|
| **Name** | Anzeigename mit Farbpunkt (z. B. Urlaub, Krankheit) |
| **Kategorie** | Systemkategorie (z. B. Bezahlter Urlaub, Krankheit mit Lohnfortzahlung) |
| **Beschreibung** | Kurzerklärung für HR und Anträge |

**Typische Typen** (Beispiel aus der Einrichtung):

| Farbe | Name | Kategorie |
|-------|------|-----------|
| Grün | Urlaub | Bezahlter Urlaub |
| Rosa | Krankheit | Krankheit mit Lohnfortzahlung |
| Lavendel | Unbezahlter Urlaub | Unbezahlter Urlaub |

Mit **Bearbeiten** (oben rechts) passen Sie bestehende Typen an oder legen neue an. Optional: **Einrichtungsanleitung** für kontextuelle Hilfe in der App.

---

### B.3 Neue Abwesenheitsart erstellen

![Dialog Abwesenheitsart erstellen](../assets/abwesenheit/urlaubstypen-03-anlegen.png)

Über **Hinzufügen** / Anlegen im Bearbeitungsmodus öffnet sich **Abwesenheitsart erstellen**.

| Feld | Pflicht | Erklärung |
|------|---------|-----------|
| **Name** | Ja | Bezeichnung im Antrag und Kalender (z. B. „Sonderurlaub“) |
| **Kategorie** | Ja | Steuert Auswertung und Urlaubskonto — z. B. Bezahlter Urlaub, Krankheit mit Lohnfortzahlung, Arbeitsbedingte Abwesenheit |
| **Beschreibung** | Nein | Interne Erläuterung für HR |
| **Farbe** | Ja | Farbpunkt in Kalendern und Listen |
| **Gesamt-Tage Quelle** | Ja | z. B. **Kein Limit** oder Anbindung ans Urlaubskonto (Tooltip im Formular) |
| **Übertragung vom Vorjahr erlauben** | Optional | Checkbox für Resturlaub-Übertrag bei diesem Typ |

**Speichern:** **Erstellen** — der Typ steht sofort in [A.4](#a4-abwesenheit-beantragen) zur Auswahl.

**Verfügbare Kategorien** (Auswahl im Formular):

| Kategorie | Typische Nutzung |
|-----------|------------------|
| Bezahlter Urlaub | Jahresurlaub |
| Unbezahlter Urlaub | Unbezahlte Freistellung |
| Krankheit mit / ohne Lohnfortzahlung | Krankmeldungen |
| Stundenabbau | Überstunden abbauen |
| Arbeitsbedingte Abwesenheit | Homeoffice, Schulung, Dienstreise |
| Feiertag, Elternzeit, Mutterschutz | Spezialfälle |

!!! warning "Typ bereits in Verwendung?"
    Beim Löschen oder starken Ändern prüft Planvo, ob der Typ schon in Anträgen vorkommt. Nutzen Sie dann eher **Bearbeiten** statt Löschen.

---

## Auch woanders in Planvo

| Ort | Zweck |
|-----|--------|
| **Mitarbeiter** → Profil → **Abwesenheit** | Urlaubskonto und Anträge einer Person |
| **Mobile App** | Abwesenheitsantrag unterwegs |
| **Dashboard** | Aktuelle Abwesenheiten (je nach Rolle) |

---

## Häufige Fragen

### Kann ich einen ausstehenden Antrag ändern?

Nein — **stornieren** und **neu anlegen**.

### Was passiert nach der Freigabe?

Eintrag in **Übersicht** / **Jahreskalender**; **Urlaubskonto** wird aktualisiert.

### Warum fehlt die Team-Monatsübersicht?

Dafür brauchen Sie Team-Lese-Rechte. Sonst ist **Übersicht** Ihr persönlicher Jahreskalender.

### Wer darf Urlaubstypen anlegen?

In der Regel Admins und HR mit Zugriff auf **Einstellungen** → **Urlaubstypen**.

### Welchen Typ soll ich als Mitarbeiter wählen?

Die Liste kommt aus [Teil B](#teil-b-urlaubstypen-in-den-einstellungen). Bei Unklarheit: Personalabteilung.

---

## Hilfe & Support

--8<-- "includes/kontakt-ssot.md"

---

## Verwandte Themen

- [Auswertung](auswertung.md) — Abwesenheitsauswertung (A.6)
- [Schichtpläne](schichten.md) — Planung neben Abwesenheiten
- [Mobile App](../mobile/index.md) — Anträge unterwegs

---

*Screenshots: Abwesenheitsverwaltung (`1`–`5`, `antrag`), Urlaubstypen (`urlaubstypen-01`–`03`).*
