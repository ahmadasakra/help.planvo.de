# Mobile App installieren

> **⏱️ Lesezeit:** 5 Minuten  
> **📱 Plattformen:** iOS & Android  
> **👤 Für:** Alle Benutzer

---

## 📲 Installation

### iOS (iPhone/iPad)

**Voraussetzungen:**
- iOS 14.0 oder höher
- iPhone 6s oder neuer

**Schritt-für-Schritt:**

1. Öffnen Sie den **App Store**
2. Tippen Sie auf das **Suchen-Symbol** 🔍
3. Geben Sie **"Planvo"** ein
4. Tippen Sie auf **"Laden"**
5. Authentifizieren Sie sich mit **Face ID / Touch ID / Passwort**
6. Warten Sie, bis der Download abgeschlossen ist
7. Tippen Sie auf **"Öffnen"**

**Direktlink:**
```
App Store → Suche nach "Planvo"
```

---

### Android

**Voraussetzungen:**
- Android 8.0 oder höher
- Mindestens 100 MB freier Speicher

**Schritt-für-Schritt:**

1. Öffnen Sie **Google Play Store**
2. Tippen Sie auf das **Suchen-Symbol** 🔍
3. Geben Sie **"Planvo"** ein
4. Tippen Sie auf **"Installieren"**
5. Akzeptieren Sie die **Berechtigungen**
6. Warten Sie, bis der Download abgeschlossen ist
7. Tippen Sie auf **"Öffnen"**

**Direktlink:**
```
Google Play → Suche nach "Planvo"
```

---

## 🔐 Erstes Login

### Schritt 1: App öffnen

Nach der Installation öffnen Sie die Planvo App.

### Schritt 2: Anmelden

Sie sehen den Login-Bildschirm:

**Eingaben:**
1. **Firma-ID** (z.B. `ihre-firma`)
   - Dies ist Teil Ihrer Web-URL: `ihre-firma.planvo.de`
   - Wird Ihnen von Ihrem Administrator mitgeteilt

2. **E-Mail-Adresse**
   - Ihre Firmen-E-Mail-Adresse

3. **Passwort**
   - Ihr Planvo-Passwort

4. Tippen Sie auf **"Anmelden"**

![Mobile Login Screenshot Platzhalter]

---

### Schritt 3: Biometrische Anmeldung aktivieren

Nach dem ersten Login werden Sie gefragt:

**iOS:**
> "Möchten Sie Face ID / Touch ID aktivieren?"

**Android:**
> "Möchten Sie biometrische Anmeldung aktivieren?"

!!! tip "Empfehlung"
    Aktivieren Sie biometrische Anmeldung für schnelleren und sichereren Zugriff!

---

## 🔔 Berechtigungen

Die App benötigt folgende Berechtigungen:

### Erforderlich

| Berechtigung | Zweck | Pflicht? |
|--------------|-------|----------|
| 📶 **Internet** | Daten synchronisieren | ✅ Ja |
| 🔔 **Benachrichtigungen** | Push-Nachrichten | ✅ Empfohlen |

### Optional

| Berechtigung | Zweck | Pflicht? |
|--------------|-------|----------|
| 📍 **Standort** | GPS-Zeiterfassung | ⚪ Optional |
| 📷 **Kamera** | Fotos für Projekte | ⚪ Optional |
| 📁 **Speicher** | Dokumente speichern | ⚪ Optional |
| 📅 **Kalender** | Schichten im Kalender | ⚪ Optional |

!!! info "Berechtigungen verwalten"
    Sie können Berechtigungen jederzeit in den Geräteeinstellungen ändern:
    
    **iOS:** Einstellungen → Planvo  
    **Android:** Einstellungen → Apps → Planvo → Berechtigungen

---

## 🎨 App-Tour

Beim ersten Start sehen Sie eine kurze Einführung:

**Bildschirm 1: Zeiterfassung**
```
"Stempeln Sie mit einem Fingertipp
Ihre Arbeitszeit wird automatisch erfasst"
[Weiter]
```

**Bildschirm 2: Schichten**
```
"Sehen Sie Ihre Schichten
Bewerben Sie sich für offene Schichten"
[Weiter]
```

**Bildschirm 3: Offline**
```
"Funktioniert auch ohne Internet
Ihre Daten werden automatisch synchronisiert"
[Los geht's]
```

Sie können die Tour überspringen oder später erneut ansehen unter:
**Mehr** → **Hilfe** → **App-Tour**

---

## 🧭 Navigation

Die App hat 5 Haupt-Tabs:

```
┌─────────────────────────────────┐
│                                 │
│      [Hauptinhalt hier]         │
│                                 │
└─────────────────────────────────┘
  🏠    ⏰    📅    📊    ≡
 Home  Zeit Schicht Projekte Mehr
```

**Tabs erklärt:**
- 🏠 **Home** - Dashboard, Übersicht
- ⏰ **Zeit** - Zeiterfassung
- 📅 **Schichten** - Schichtplan
- 📊 **Projekte** - Projekte & Aufgaben
- ≡ **Mehr** - Einstellungen, Profil, Hilfe

---

## ⚙️ Erste Einstellungen

### Profil vervollständigen

1. Tippen Sie auf **Mehr** (≡)
2. Tippen Sie auf Ihr **Profilbild**
3. Füllen Sie aus:
   - 📸 Profilbild hochladen
   - 📞 Telefonnummer
   - 📍 Standort
   - 🎂 Geburtstag (optional)

### Benachrichtigungen konfigurieren

1. **Mehr** → **Einstellungen** → **Benachrichtigungen**
2. Aktivieren Sie:
   - 🔔 Push-Benachrichtigungen
   - ⏰ Schicht-Erinnerungen (24h vorher)
   - 📢 Wichtige Updates
   - 💬 Team-Nachrichten

### Offline-Modus aktivieren

1. **Mehr** → **Einstellungen** → **Offline-Modus**
2. Aktivieren Sie **"Daten für Offline speichern"**
3. Wählen Sie, was gespeichert werden soll:
   - ✅ Letzte 30 Tage Zeiterfassung
   - ✅ Nächste 14 Tage Schichten
   - ✅ Aktive Projekte

[:octicons-arrow-right-24: Mehr zum Offline-Modus](offline-modus.md)

---

## 🔐 Sicherheit

### Touch ID / Face ID / Biometrie

**Aktivieren:**
1. **Mehr** → **Einstellungen** → **Sicherheit**
2. Aktivieren Sie **"Biometrische Anmeldung"**
3. Authentifizieren Sie sich einmalig

**Hinweis:** Ihre Anmeldedaten werden sicher im Gerätespeicher (iOS Keychain / Android Keystore) verschlüsselt.

### Auto-Logout

Aus Sicherheitsgründen werden Sie automatisch abgemeldet:
- Nach 7 Tagen Inaktivität
- Bei Passwortänderung
- Bei Sicherheitsupdates

---

## 🔄 App aktualisieren

### Automatische Updates

**Aktivieren Sie automatische Updates:**

**iOS:**
1. Einstellungen → App Store
2. Aktivieren Sie **"App-Updates"**

**Android:**
1. Play Store → Menü → Einstellungen
2. **Automatische App-Updates** → "Immer"

### Manuelle Updates

**iOS:**
1. App Store öffnen
2. **Updates-Tab**
3. **"Aktualisieren"** bei Planvo

**Android:**
1. Play Store öffnen
2. **Meine Apps & Spiele**
3. **"Aktualisieren"** bei Planvo

!!! info "Update-Benachrichtigungen"
    Die App benachrichtigt Sie, wenn ein Update verfügbar ist.

---

## ❓ Häufige Probleme

### App lässt sich nicht installieren

**iOS:**
- Prüfen Sie, ob genug Speicherplatz frei ist
- iOS-Version muss mindestens 14.0 sein
- Starten Sie das Gerät neu

**Android:**
- Prüfen Sie Speicherplatz
- Android-Version mindestens 8.0
- Starten Sie das Gerät neu

### Login funktioniert nicht

1. Prüfen Sie Internetverbindung
2. Prüfen Sie Firma-ID, E-Mail, Passwort
3. Versuchen Sie Passwort zurücksetzen
4. Kontaktieren Sie Ihren Administrator

### App stürzt ab

1. Starten Sie die App neu
2. Aktualisieren Sie auf die neueste Version
3. Starten Sie das Gerät neu
4. Installieren Sie die App neu (Daten bleiben erhalten)
5. Kontaktieren Sie den Support

---

## 🔗 Verwandte Themen

- [Zeiterfassung Mobile](zeiterfassung.md)
- [Offline-Modus](offline-modus.md)
- [Anmeldung Web](../erste-schritte/anmeldung.md)
- [Benachrichtigungen verwalten](index.md)

---

[:octicons-arrow-right-24: Weiter zur Zeiterfassung](zeiterfassung.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Weiter zum Offline-Modus](offline-modus.md){ .md-button }

---

*Letzte Aktualisierung: November 2024 | Version 1.6.6*

