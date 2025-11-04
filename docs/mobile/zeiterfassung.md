# Zeiterfassung Mobile

> **⏱️ Lesezeit:** 5 Minuten  
> **📱 Plattform:** iOS & Android  
> **👤 Für:** Alle Mitarbeiter

---

## 🎯 Übersicht

Die mobile Zeiterfassung ermöglicht:

- ⚡ **Schnelles Stempeln** - Mit einem Fingertipp
- 📍 **GPS-Tracking** - Standort wird erfasst
- 📴 **Offline-fähig** - Funktioniert ohne Internet
- 🔔 **Erinnerungen** - Nie wieder vergessen auszustempeln
- 📊 **Übersicht** - Alle Zeiten im Blick

---

## ⏰ Arbeitsbeginn stempeln

### Schritt 1: Zeit-Tab öffnen

Tippen Sie unten auf das **Uhr-Symbol** ⏰

### Schritt 2: Arbeit starten

1. Sie sehen den großen grünen Button **"Arbeit starten"**
2. Optional: Wählen Sie ein **Projekt** aus dem Dropdown
3. Optional: Fügen Sie eine **Notiz** hinzu
4. Tippen Sie auf **"Arbeit starten"**

![Mobile Stempeln Start]

### Status während der Arbeit

Nach dem Einstempeln sehen Sie:

```
🟢 Aktiv

⏱️ 03:24:15
Laufende Arbeitszeit

📍 Hamburg Zentrale
GPS-Standort

📊 Projekt: Büroumbau

[Pause starten]    [Arbeitsende]
```

---

## ☕ Pause verwalten

### Pause starten

1. Tippen Sie auf den orangenen Button **"Pause starten"**
2. Die Uhr stoppt
3. Status wechselt zu "In Pause"

```
⏸️ In Pause

⏱️ 04:15:30
Arbeitszeit

☕ 00:15:00
Pausenzeit

[Pause beenden]
```

### Pause beenden

1. Tippen Sie auf **"Pause beenden"**
2. Die Zeiterfassung läuft weiter
3. Die Pause wird von der Gesamtzeit abgezogen

---

## 🏁 Arbeitsende stempeln

### Ausstempeln

1. Tippen Sie auf den roten Button **"Arbeitsende"**
2. Das System zeigt eine Zusammenfassung:

```
✅ Arbeitstag beendet

📊 Zusammenfassung
━━━━━━━━━━━━━━━━━━━
⏰ Beginn:    08:00 Uhr
🏁 Ende:      17:00 Uhr
──────────────────────
⏱️  Arbeitszeit: 8h 30min
☕ Pausen:     45min
──────────────────────
✅ Netto:      8h 15min
📊 Überstunden: +15min

📍 Hamburg Zentrale
📊 Projekt: Büroumbau

[Bestätigen]
```

3. Tippen Sie auf **"Bestätigen"**

!!! tip "Notiz hinzufügen"
    Wischen Sie nach unten, um eine Notiz zu Ihrem Arbeitstag hinzuzufügen.

---

## 📍 GPS-Tracking

### Funktionsweise

Wenn GPS aktiviert ist:
- 📍 Standort wird beim Stempeln erfasst
- 🗺️ Auf der Karte angezeigt
- 📊 In Übersicht einsehbar

### GPS aktivieren/deaktivieren

1. **Mehr** → **Einstellungen** → **Zeiterfassung**
2. **GPS-Tracking** an/aus

!!! info "Datenschutz"
    GPS wird NUR beim Stempeln erfasst, nicht permanent. Sie können GPS jederzeit deaktivieren.

---

## 📊 Stundenübersicht

### Ansicht öffnen

1. Im **Zeit-Tab**
2. Tippen Sie oben rechts auf das **Kalender-Symbol** 📅

### Tagesansicht

```
📅 Heute - Mo, 04.11.2024

08:00 - 12:00    4h 00min
[PAUSE]          30min
12:30 - 17:00    4h 30min
────────────────────────
✅ Gesamt:       8h 30min
📊 Netto:        8h 00min
```

Tippen Sie auf einen Eintrag für Details.

### Wochenansicht

```
📅 KW 45 (28.10 - 03.11.2024)

Mo  ████████  8h 00min  ✅
Di  ████████  8h 15min  ✅
Mi  ████████  8h 00min  ✅
Do  ████████  8h 30min  ✅
Fr  ████████  8h 00min  ✅
Sa  ░░░░░░░░  Frei
So  ░░░░░░░░  Frei
────────────────────────
Gesamt: 40h 45min
```

### Monatsansicht

Wischen Sie nach links/rechts für vorherige/nächste Monate.

---

## ✏️ Zeiten korrigieren

### Nachträglich ändern

1. **Zeit-Tab** → **Kalender**
2. Tippen Sie auf den Tag
3. Tippen Sie auf das **Stift-Symbol** ✏️
4. Passen Sie an:
   - Startzeit
   - Endzeit
   - Pausen
5. Fügen Sie einen **Korrekturgrund** hinzu
6. Tippen Sie auf **"Speichern"**

```
⚠️ Korrektur ausstehend

Ihre Änderung wartet auf
Genehmigung durch Vorgesetzten.

Status: ⏳ Ausstehend
```

---

## 🔔 Erinnerungen

### Erinnerungen konfigurieren

1. **Mehr** → **Einstellungen** → **Zeiterfassung**
2. Aktivieren Sie:

**Verfügbare Erinnerungen:**
- ⏰ Einstempeln (08:00 Uhr)
- 🏁 Ausstempeln (17:00 Uhr)
- ⚠️ Lange Stempelung (> 10 Stunden)
- 📊 Wöchentliche Zusammenfassung (Freitag)

!!! tip "Smart Notifications"
    Die App lernt Ihre typischen Arbeitszeiten und erinnert Sie automatisch.

---

## 📴 Offline-Modus

### Offline stempeln

Die Zeiterfassung funktioniert **komplett offline**:

1. Öffnen Sie die App (kein Internet nötig)
2. Stempeln Sie wie gewohnt
3. Die Zeit wird lokal gespeichert
4. Bei nächster Internet-Verbindung wird automatisch synchronisiert

```
📴 Offline-Modus aktiv

✅ Zeiterfassung funktioniert
⏳ Daten werden synchronisiert,
   sobald Internet verfügbar ist

Nicht synchronisiert: 3 Einträge
```

[:octicons-arrow-right-24: Mehr zum Offline-Modus](offline-modus.md)

---

## 📊 Statistiken

### Persönliche Übersicht

Wischen Sie im **Zeit-Tab** nach unten für Statistiken:

```
📊 Dieser Monat

⏰ Arbeitsstunden:    160h
📊 Überstunden:       +2h 30min
📅 Arbeitstage:       20 von 22
☕ Ø Pausen:          42min/Tag

📈 Trends
├─ Diese Woche:  +1h 15min
├─ Letzte Woche: +45min
└─ Trend:        ↗️ +30min
```

---

## 🎨 Widget (iOS & Android)

### Home-Screen Widget hinzufügen

**iOS:**
1. Langer Druck auf Home-Screen
2. Tippen Sie auf **+** oben links
3. Suchen Sie **"Planvo"**
4. Wählen Sie Widget-Größe
5. **"Widget hinzufügen"**

**Android:**
1. Langer Druck auf Home-Screen
2. **Widgets**
3. Suchen Sie **"Planvo"**
4. Ziehen Sie auf Home-Screen

**Widget zeigt:**
```
┌─────────────────────┐
│  Planvo             │
│                     │
│  🟢 Nicht eingestempelt │
│                     │
│  [Arbeit starten]   │
│                     │
│  Letzte: 8h 15min   │
└─────────────────────┘
```

---

## 💡 Tipps & Tricks

!!! tip "Tipp 1: Widget nutzen"
    Mit dem Widget können Sie direkt vom Home-Screen stempeln!

!!! tip "Tipp 2: Siri / Google Assistant"
    
    **iOS:** "Hey Siri, starte Planvo Zeiterfassung"  
    **Android:** "Ok Google, öffne Planvo Zeit"

!!! tip "Tipp 3: Schnelle Notizen"
    Sprechen Sie Notizen über das Mikrofon-Symbol ein (Sprache-zu-Text).

!!! tip "Tipp 4: Hintergrund-Erinnerung"
    Aktivieren Sie Standort-basierte Erinnerungen: "Willst du einstempeln?" wenn Sie bei der Arbeit ankommen.

---

## ❓ Häufige Fragen

### Was passiert, wenn mein Akku leer wird?

Ihre bereits erfassten Zeiten bleiben gespeichert. Stempeln Sie einfach nach dem Aufladen aus.

### Funktioniert GPS auch in Gebäuden?

GPS ist in Gebäuden oft ungenau. Die App nutzt dann WLAN und Mobilfunk zur Standortbestimmung.

### Kann ich nachträglich GPS-Daten hinzufügen?

Nein, GPS wird nur beim Stempeln erfasst und kann nachträglich nicht ergänzt werden.

### Synchronisiert die App automatisch?

Ja, bei aktiver Internetverbindung synchronisiert die App alle 5 Minuten automatisch.

---

## 🔗 Verwandte Themen

- [Zeiterfassung Web](../web/zeiterfassung.md)
- [Offline-Modus](offline-modus.md)
- [GPS-Einstellungen](offline-modus.md)
- [Schichten ansehen](index.md)

---

[:octicons-arrow-right-24: Weiter zum Offline-Modus](offline-modus.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Zurück zur Übersicht](index.md){ .md-button }

---

*Letzte Aktualisierung: November 2024 | Version 1.6.6*

