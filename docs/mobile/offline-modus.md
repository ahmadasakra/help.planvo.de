# Offline-Modus

> **⏱️ Lesezeit:** 4 Minuten  
> **📱 Plattform:** iOS & Android  
> **👤 Für:** Alle Benutzer

---

## 🎯 Was ist der Offline-Modus?

Der Offline-Modus ermöglicht Ihnen, Planvo **ohne Internetverbindung** zu nutzen:

- ✅ Zeiterfassung funktioniert vollständig
- ✅ Schichten ansehen
- ✅ Projekt-Informationen lesen
- ✅ Fotos aufnehmen (für später)
- ✅ Notizen erstellen

**Alles wird automatisch synchronisiert, sobald Sie wieder online sind!**

---

## 📴 Wie funktioniert es?

### Automatische Daten-Speicherung

Planvo speichert automatisch wichtige Daten auf Ihrem Gerät:

```
📦 Lokaler Speicher

✅ Letzte 30 Tage Zeiterfassung
✅ Nächste 14 Tage Schichten
✅ Aktive Projekte (Details)
✅ Ihre Aufgaben
✅ Team-Kontakte
✅ Nicht synchronisierte Aktionen

Gespeichert: ca. 15 MB
Letztes Update: Vor 5 Minuten
```

### Synchronisation

Bei Internet-Verbindung:
- ⚡ Automatische Sync alle 5 Minuten
- 📤 Upload nicht synchronisierter Daten
- 📥 Download neuer Daten

---

## ⚙️ Offline-Modus konfigurieren

### Einstellungen öffnen

1. Tippen Sie auf **Mehr** (≡)
2. Tippen Sie auf **Einstellungen**
3. Wählen Sie **Offline-Modus**

### Optionen

**Daten für Offline speichern:**
```
✅ Zeiterfassung
   └─ Letzten 30 Tage

✅ Schichtplan
   └─ Nächsten 14 Tage

✅ Projekte
   └─ Nur aktive Projekte
   
✅ Aufgaben
   └─ Mir zugewiesene

⬜ Dokumente
   └─ Verbraucht viel Speicher
```

**Synchronisations-Einstellungen:**
```
✅ Automatische Synchronisation
✅ Nur über WLAN synchronisieren
✅ Im Hintergrund synchronisieren
⬜ Mobile Daten nutzen
```

!!! warning "Mobile Daten"
    Wenn Sie mobile Daten nutzen, können zusätzliche Kosten entstehen. Bei großen Dateien kann die Synchronisation lange dauern.

---

## 📱 Was funktioniert offline?

### ✅ Vollständig verfügbar

| Funktion | Offline verfügbar? | Details |
|----------|-------------------|---------|
| ⏰ **Zeiterfassung** | ✅ Ja | Stempeln funktioniert komplett |
| 📅 **Schichten ansehen** | ✅ Ja | Bereits geladene Schichten |
| 📊 **Projekte ansehen** | ✅ Ja | Nur Details aktiver Projekte |
| 📸 **Fotos** | ✅ Ja | Werden später hochgeladen |
| 📝 **Notizen** | ✅ Ja | Lokal gespeichert |
| 📍 **GPS** | ✅ Ja | Standort wird erfasst |

### ⚠️ Eingeschränkt verfügbar

| Funktion | Offline verfügbar? | Einschränkung |
|----------|-------------------|---------------|
| 🏖️ **Urlaub** | ⚠️ Teilweise | Nur bereits geladene Anträge sichtbar |
| 💬 **Chat** | ⚠️ Teilweise | Keine neuen Nachrichten |
| 📄 **Dokumente** | ⚠️ Teilweise | Nur heruntergeladene Dateien |

### ❌ Nicht verfügbar

| Funktion | Offline verfügbar? | Grund |
|----------|-------------------|-------|
| 🆕 **Neuen Urlaub beantragen** | ❌ Nein | Benötigt Server |
| 📧 **Benachrichtigungen** | ❌ Nein | Benötigt Internet |
| 🔄 **Synchronisation** | ❌ Nein | Benötigt Internet |
| 👥 **Team laden** | ❌ Nein | Benötigt Server |

---

## 🔄 Synchronisations-Status

### Status anzeigen

In der App sehen Sie den Status oben:

**Online:**
```
✅ Online
Alle Daten synchronisiert
```

**Offline:**
```
📴 Offline
3 Aktionen warten auf Sync
```

**Synchronisiert gerade:**
```
🔄 Synchronisiere...
2 von 5 Aktionen
```

### Manuelle Synchronisation

1. Ziehen Sie auf einem Bildschirm nach unten
2. Oder: **Mehr** → **Synchronisieren**

### Nicht synchronisierte Aktionen

Unter **Mehr** → **Offline-Daten** sehen Sie:

```
📤 Wartet auf Synchronisation

⏰ Zeiterfassung (2)
├─ Arbeitsbeginn: 08:00
└─ Arbeitsende: 17:00

📸 Fotos (1)
└─ Baustelle_Foto_001.jpg

📝 Notizen (1)
└─ Projekt-Update vom 04.11
```

---

## 📍 GPS im Offline-Modus

### Funktionsweise

GPS funktioniert **auch offline**:

- 📍 Standort wird vom Gerät erfasst
- 💾 Lokal gespeichert
- 🔄 Bei Synchronisation hochgeladen

### Genauigkeit

**Online:**
- GPS + WLAN + Mobilfunk
- Genauigkeit: 5-10 Meter

**Offline:**
- Nur GPS-Satelliten
- Genauigkeit: 10-50 Meter
- In Gebäuden ungenau

!!! tip "Beste Genauigkeit"
    Für beste GPS-Genauigkeit offline:
    
    1. Gehen Sie nach draußen
    2. Warten Sie 30 Sekunden
    3. Dann stempeln

---

## 💾 Speicher-Verwaltung

### Speicherplatz prüfen

**Mehr** → **Einstellungen** → **Offline-Modus** → **Speicher**

```
📊 Speicher-Nutzung

Zeiterfassung:   2 MB
Schichten:       1 MB
Projekte:        8 MB
Fotos:          45 MB
Sonstiges:       4 MB
──────────────────────
Gesamt:         60 MB

[Cache leeren]
```

### Cache leeren

Wenn Sie Speicherplatz freigeben möchten:

1. **Mehr** → **Einstellungen** → **Offline-Modus**
2. Tippen Sie auf **"Cache leeren"**
3. Wählen Sie, was gelöscht werden soll:
   - ⬜ Zeiterfassung (Nicht empfohlen)
   - ⬜ Schichten
   - ✅ Projekt-Details
   - ✅ Fotos (auf Server gesichert)
   - ✅ Temporäre Dateien

!!! warning "Vorsicht"
    Nicht synchronisierte Daten werden NICHT gelöscht, auch wenn Sie den Cache leeren.

---

## 🚨 Probleme & Lösungen

### Problem: Synchronisation schlägt fehl

**Mögliche Ursachen:**
- ❌ Keine Internetverbindung
- ❌ Server nicht erreichbar
- ❌ Zu viele Daten auf einmal

**Lösung:**
1. Prüfen Sie Ihre Internetverbindung
2. Versuchen Sie es später erneut
3. Kontaktieren Sie Support, wenn Problem besteht

### Problem: Daten wurden nicht gespeichert

**Lösung:**
1. Prüfen Sie **Mehr** → **Offline-Daten**
2. Sind die Aktionen dort aufgelistet?
3. Wenn ja: Warten auf Synchronisation
4. Wenn nein: Möglicherweise verloren gegangen

!!! danger "Wichtig"
    Löschen Sie die App NICHT, bevor alle Daten synchronisiert sind!

### Problem: Zu viel Speicher belegt

**Lösung:**
1. Leeren Sie den Cache (siehe oben)
2. Reduzieren Sie Offline-Zeitraum:
   - Letzte 7 Tage statt 30 Tage
   - Nächste 7 Tage statt 14 Tage
3. Deaktivieren Sie Dokumente offline

---

## 💡 Best Practices

!!! tip "Tipp 1: Regelmäßig synchronisieren"
    Verbinden Sie sich mindestens 1x täglich mit Internet, um Daten zu synchronisieren.

!!! tip "Tipp 2: WLAN nutzen"
    Für große Uploads (viele Fotos) nutzen Sie WLAN statt mobile Daten.

!!! tip "Tipp 3: Akku sparen"
    Deaktivieren Sie automatische Hintergrund-Sync für bessere Akkulaufzeit.

!!! tip "Tipp 4: Vor Urlaub vorbereiten"
    Laden Sie relevante Daten vor Reisen mit schlechtem Internet herunter.

---

## ❓ Häufige Fragen

### Wie lange bleiben Daten offline verfügbar?

Daten bleiben bis zu 30 Tage offline verfügbar. Danach sollten Sie synchronisieren.

### Was passiert bei App-Update offline?

Die App aktualisiert sich nur, wenn Sie online sind. Offline-Daten bleiben erhalten.

### Können mehrere Aktionen offline durchgeführt werden?

Ja! Die App speichert alle Aktionen lokal und synchronisiert sie in der Reihenfolge, in der sie durchgeführt wurden.

### Was ist, wenn ich offline und online arbeite?

Kein Problem! Die App erkennt Konflikte und löst sie intelligent:
- Online-Änderungen haben Vorrang
- Sie werden bei Konflikten benachrichtigt

---

## 🔗 Verwandte Themen

- [Zeiterfassung Mobile](zeiterfassung.md)
- [App Installation](installation.md)
- [GPS-Tracking](zeiterfassung.md)
- [Fehlerbehebung](../hilfe/faq.md)

---

[:octicons-arrow-right-24: Zurück zur Mobile-Übersicht](index.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Zur Zeiterfassung](zeiterfassung.md){ .md-button }

---

*Letzte Aktualisierung: November 2024 | Version 1.6.6*

