# Rechnungen & Angebote

> **⏱️ Lesezeit:** 12 Minuten  
> **📱 Verfügbar in:** Web  
> **👤 Für:** Geschäftsführung, Buchhaltung, Verkauf

---

## 📋 Was Sie in diesem Kapitel lernen

- ✅ Wie Sie professionelle Angebote erstellen
- ✅ Wie Sie Angebote in Rechnungen umwandeln
- ✅ Wie Sie Rechnungen versenden und verwalten
- ✅ Wie Sie Zahlungen erfassen und verfolgen
- ✅ Wie Sie Mahnungen erstellen
- ✅ Wie Sie Online-Zahlungen einrichten

---

## 🎯 Übersicht

Das Rechnungswesen in Planvo bietet Ihnen:

- 📄 **Angebotserstellung** - Professionelle Vorlagen mit automatischer Nummerierung
- 💰 **Rechnungsstellung** - Von Angebot bis Rechnung in einem Klick
- 💳 **Zahlungsverwaltung** - Stripe-Integration für Online-Zahlungen
- 📧 **Automatischer Versand** - E-Mails mit PDF-Anhang
- 🔔 **Mahnwesen** - Automatische Mahnungen bei überfälligen Rechnungen
- 📊 **Finanzübersicht** - Echtzeit-Status aller Rechnungen

---

## 📹 Video-Tutorial

!!! info "Video-Tutorial"
    **🎥 Video: Rechnungen & Angebote erstellen**
    
    In diesem Video zeigen wir Ihnen, wie Sie:
    - Ein Angebot erstellen
    - Ein Angebot in eine Rechnung umwandeln
    - Eine Rechnung versenden
    - Zahlungen erfassen
    
    *Video wird demnächst verfügbar sein*

---

## 📝 Angebot erstellen

### Neues Angebot anlegen

1. Klicken Sie im Hauptmenü auf **"Angebote"**
2. Klicken Sie auf **"+ Neues Angebot"**
3. Füllen Sie die Grunddaten aus:

**Pflichtfelder:**
- 👤 **Kunde** (aus Kundenliste wählen)
- 📅 **Angebotsdatum**
- 📅 **Gültigkeitsdatum** (Standard: 30 Tage)
- 💰 **Währung** (Standard: EUR)

**Optionale Felder:**
- 📍 **Objekt** (wenn Kunde mehrere Objekte hat)
- 📄 **Beschreibung/Anmerkungen**
- 🏷️ **Tags** (z.B. "Dringend", "Wiederkehrend")

### Positionen hinzufügen

**Position hinzufügen:**

1. Klicken Sie auf **"+ Position hinzufügen"**
2. Füllen Sie aus:
   - 📝 **Bezeichnung** (z.B. "Montagearbeiten")
   - 📊 **Menge** (z.B. 10)
   - 💰 **Einzelpreis** (z.B. 150,00 €)
   - 📈 **MwSt-Satz** (Standard: 19%)
   - 📄 **Beschreibung** (optional)

**Positionen-Typen:**
- 📦 **Artikel** - Aus Artikelstammdaten
- ⏱️ **Stunden** - Basierend auf Zeiterfassung
- 📋 **Text** - Freitext-Position

**Automatische Berechnung:**
```
Position 1: Montagearbeiten
├─ Menge: 10 Stunden
├─ Einzelpreis: 150,00 €
├─ Zwischensumme: 1.500,00 €
└─ MwSt (19%): 285,00 €

Position 2: Material
├─ Menge: 1
├─ Einzelpreis: 500,00 €
├─ Zwischensumme: 500,00 €
└─ MwSt (19%): 95,00 €

─────────────────────────
Zwischensumme: 2.000,00 €
MwSt gesamt: 380,00 €
─────────────────────────
Gesamtbetrag: 2.380,00 €
```

### Angebot speichern und versenden

**Speichern:**
1. Klicken Sie auf **"Speichern"**
2. Das Angebot erhält automatisch eine Nummer (z.B. "ANG-2024-001")
3. Status: **"Entwurf"**

**Versenden:**
1. Klicken Sie auf **"Versenden"**
2. Wählen Sie:
   - 📧 **E-Mail-Versand** (PDF wird automatisch angehängt)
   - 📄 **PDF herunterladen** (für manuellen Versand)
   - 📋 **Drucken**
3. Bei E-Mail-Versand:
   - Empfänger wird automatisch ausgewählt (Kunden-E-Mail)
   - Betreff wird automatisch generiert
   - Sie können eine Nachricht hinzufügen
4. Klicken Sie auf **"Senden"**
5. Status ändert sich zu **"Versendet"**

!!! tip "Tipp: Angebotsvorlagen"
    Erstellen Sie häufig genutzte Angebote als Vorlagen, um Zeit zu sparen.

---

## 💰 Angebot in Rechnung umwandeln

### Automatische Umwandlung

**Wenn Kunde Angebot annimmt:**

1. Öffnen Sie das Angebot
2. Klicken Sie auf **"Angebot annehmen"**
3. Wählen Sie:
   - ✅ **Automatisch in Rechnung umwandeln**
   - 📅 **Rechnungsdatum** (Standard: Heute)
   - 📅 **Fälligkeitsdatum** (Standard: +30 Tage)
4. Klicken Sie auf **"Umwandeln"**
5. ✅ Eine neue Rechnung wird automatisch erstellt
6. Status des Angebots: **"Umgewandelt"**

### Manuelle Umwandlung

1. Öffnen Sie das Angebot
2. Klicken Sie auf **"In Rechnung umwandeln"**
3. Passen Sie ggf. Positionen an (z.B. Mengen korrigieren)
4. Klicken Sie auf **"Rechnung erstellen"**

!!! warning "Wichtig"
    Positionen mit Menge 0 werden automatisch ausgeschlossen.

---

## 📄 Rechnung erstellen

### Neue Rechnung anlegen

1. Klicken Sie im Hauptmenü auf **"Rechnungen"**
2. Klicken Sie auf **"+ Neue Rechnung"**
3. Füllen Sie die Grunddaten aus:

**Pflichtfelder:**
- 👤 **Kunde**
- 📅 **Rechnungsdatum**
- 📅 **Fälligkeitsdatum**
- 💰 **Währung**

**Positionen hinzufügen:**
- Gleiche Funktion wie bei Angeboten
- Oder: **"Aus Angebot übernehmen"**

### Rechnungsnummer

Rechnungsnummern werden automatisch generiert:
- Format: `RE-2024-001` (konfigurierbar)
- Fortlaufend pro Jahr
- Eindeutig und nicht änderbar

### Rechnung versenden

**E-Mail-Versand:**
1. Klicken Sie auf **"Versenden"**
2. Wählen Sie **"Per E-Mail versenden"**
3. PDF wird automatisch generiert und angehängt
4. Status: **"Versendet"**

**Manueller Versand:**
1. Klicken Sie auf **"PDF herunterladen"**
2. Drucken Sie die Rechnung
3. Status manuell auf **"Versendet"** setzen

---

## 💳 Zahlungen erfassen

### Zahlungseingang buchen

1. Öffnen Sie die Rechnung
2. Klicken Sie auf **"Zahlung erfassen"**
3. Füllen Sie aus:
   - 💰 **Betrag** (z.B. 2.380,00 €)
   - 📅 **Zahlungsdatum**
   - 💳 **Zahlungsart**:
     - Überweisung
     - Bar
     - Kreditkarte
     - SEPA-Lastschrift
     - Online-Zahlung (Stripe)
   - 📄 **Verwendungszweck** (optional)
4. Klicken Sie auf **"Speichern"**

**Automatische Status-Änderung:**
- **Teilweise bezahlt**: Wenn Betrag < Rechnungsbetrag
- **Bezahlt**: Wenn Betrag = Rechnungsbetrag
- **Überbezahlt**: Wenn Betrag > Rechnungsbetrag

### Zahlungsstatus

| Status | Beschreibung | Icon |
|--------|--------------|------|
| **Entwurf** | Rechnung noch nicht versendet | 📝 |
| **Versendet** | Rechnung wurde versendet, noch nicht bezahlt | 📧 |
| **Teilweise bezahlt** | Teilzahlung erhalten | 💰 |
| **Bezahlt** | Vollständig bezahlt | ✅ |
| **Überfällig** | Fälligkeitsdatum überschritten | ⚠️ |
| **Storniert** | Rechnung wurde storniert | ❌ |

---

## 🔔 Mahnungen verwalten

### Automatische Mahnung erstellen

**Bei überfälligen Rechnungen:**

1. Gehen Sie zu **"Rechnungen"** → **"Überfällig"**
2. Wählen Sie die Rechnung(en) aus
3. Klicken Sie auf **"Mahnung erstellen"**
4. Wählen Sie:
   - 📄 **Mahnungsstufe** (1. Mahnung, 2. Mahnung, 3. Mahnung)
   - 💰 **Mahngebühr** (optional)
   - 📧 **Automatisch versenden**
5. Klicken Sie auf **"Mahnung erstellen"**

**Mahnungsstufen:**
- **1. Mahnung**: Freundliche Erinnerung (nach 7 Tagen)
- **2. Mahnung**: Letzte Zahlungsaufforderung (nach 14 Tagen)
- **3. Mahnung**: Inkasso-Androhung (nach 21 Tagen)

### Manuelle Mahnung

1. Öffnen Sie die Rechnung
2. Klicken Sie auf **"Mahnung erstellen"**
3. Passen Sie den Text an
4. Versenden Sie per E-Mail oder Druck

---

## 💳 Online-Zahlungen (Stripe)

### Stripe einrichten

**Voraussetzungen:**
- Stripe-Account vorhanden
- API-Keys konfiguriert

**Einrichtung:**
1. Gehen Sie zu **"Einstellungen"** → **"Zahlungen"**
2. Klicken Sie auf **"Stripe verbinden"**
3. Geben Sie Ihre Stripe API-Keys ein:
   - **Publishable Key** (öffentlich)
   - **Secret Key** (geheim)
4. Klicken Sie auf **"Speichern"**

### Zahlungslink erstellen

**Für Kunden:**
1. Öffnen Sie die Rechnung
2. Klicken Sie auf **"Zahlungslink erstellen"**
3. Wählen Sie:
   - 💰 **Betrag** (vollständig oder teilweise)
   - 📅 **Gültigkeitsdauer** (Standard: 30 Tage)
4. Klicken Sie auf **"Link generieren"**
5. Kopieren Sie den Link und senden Sie ihn an den Kunden

**Kunde zahlt:**
- Kunde klickt auf Link
- Wird zu Stripe Checkout weitergeleitet
- Zahlung per Kreditkarte oder SEPA
- Status wird automatisch auf **"Bezahlt"** gesetzt

---

## 📊 Finanzübersicht

### Rechnungsübersicht

**Filter-Optionen:**
- 📅 **Zeitraum** (Dieser Monat, Dieses Jahr, Benutzerdefiniert)
- 👤 **Kunde** (Alle oder spezifischer Kunde)
- 📊 **Status** (Alle, Offen, Bezahlt, Überfällig)
- 💰 **Betrag** (Min/Max)

**Ansichten:**
- 📋 **Liste** - Alle Rechnungen in Tabelle
- 📊 **Diagramm** - Visualisierung nach Status
- 📈 **Trend** - Entwicklung über Zeit

### Statistiken

**Dashboard zeigt:**
```
💰 Offene Rechnungen
├─ Anzahl: 15
├─ Gesamtbetrag: 45.230,00 €
└─ Ø Fälligkeit: 12 Tage

✅ Bezahlte Rechnungen (dieser Monat)
├─ Anzahl: 42
├─ Gesamtbetrag: 128.450,00 €
└─ Ø Zahlungsziel: 18 Tage

⚠️ Überfällige Rechnungen
├─ Anzahl: 3
├─ Gesamtbetrag: 8.500,00 €
└─ Älteste: 45 Tage
```

---

## 📥 Export & Berichte

### Rechnungen exportieren

1. Gehen Sie zu **"Rechnungen"**
2. Wählen Sie Filter (optional)
3. Klicken Sie auf **"Exportieren"**
4. Wählen Sie Format:
   - 📄 **PDF** (für Archivierung)
   - 📊 **Excel** (für Buchhaltung)
   - 📋 **CSV** (für Import in andere Systeme)

### Monatsbericht

**Automatischer Bericht:**
- Alle Rechnungen des Monats
- Gruppiert nach Status
- Summen und Durchschnitte
- Export als PDF oder Excel

---

## ⚙️ Einstellungen

### Rechnungsnummern

**Konfiguration:**
1. **Einstellungen** → **"Rechnungswesen"**
2. **Nummernformat**:
   - Format: `RE-{YEAR}-{NUMBER}`
   - Beispiel: `RE-2024-001`
3. **Startnummer** pro Jahr
4. **Präfix** (z.B. "RE", "INV")

### Rechnungsvorlagen

**Vorlage anpassen:**
1. **Einstellungen** → **"Rechnungsvorlagen"**
2. Wählen Sie Vorlage:
   - Standard
   - Modern
   - Minimalistisch
3. Passen Sie an:
   - Logo
   - Farben
   - Schriftarten
   - Footer-Text

### Automatische Aktionen

**Konfigurierbare Automatismen:**
- ✅ **Angebot annehmen** → Automatisch Rechnung erstellen
- ✅ **Rechnung versenden** → Automatisch E-Mail senden
- ✅ **Überfällig** → Automatisch Mahnung erstellen
- ✅ **Bezahlt** → Automatisch Bestätigung senden

---

## 💡 Tipps & Tricks

!!! tip "Tipp 1: Schnellzugriff"
    Speichern Sie häufig genutzte Positionen als Favoriten für schnelles Hinzufügen.

!!! tip "Tipp 2: Bulk-Aktionen"
    Wählen Sie mehrere Rechnungen aus und versenden Sie sie gleichzeitig.

!!! tip "Tipp 3: Wiederkehrende Rechnungen"
    Erstellen Sie Vorlagen für monatliche/wiederkehrende Rechnungen.

!!! tip "Tipp 4: Zahlungserinnerungen"
    Aktivieren Sie automatische Erinnerungen 3 Tage vor Fälligkeit.

---

## ❓ Häufige Fragen

### Kann ich ein Angebot nachträglich ändern?

Ja, solange es noch nicht in eine Rechnung umgewandelt wurde. Nach der Umwandlung ist das Angebot gesperrt.

### Wie funktioniert die automatische Nummerierung?

Rechnungsnummern werden automatisch fortlaufend vergeben. Das Format ist in den Einstellungen konfigurierbar.

### Kann ich Rechnungen stornieren?

Ja, Sie können Rechnungen stornieren. Die ursprüngliche Rechnung bleibt im System, wird aber als "Storniert" markiert.

### Wie lange werden Rechnungen gespeichert?

Rechnungen werden dauerhaft gespeichert und können jederzeit abgerufen werden (GoBD-konform).

---

## 🔗 Verwandte Themen

- [Kundenverwaltung](kunden.md)
- [Projektmanagement](projekte.md)
- [Zeiterfassung](zeiterfassung.md)

---

[:octicons-arrow-right-24: Weiter zu Kundenverwaltung](kunden.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Zurück zur Übersicht](../web/index.md){ .md-button }

---

*Letzte Aktualisierung: November 2024 | Version 1.6.6*

