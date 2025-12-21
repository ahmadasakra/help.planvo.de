# API Keys verwalten

Ein API Key ist Ihr persönlicher Zugangsschlüssel zur Planvo Booking API. Mit ihm können Sie Ihre Website sicher mit Ihrem Planvo-Konto verbinden.

## 🔑 Was ist ein API Key?

Ein API Key ist ein eindeutiger, verschlüsselter Schlüssel, der:

- ✅ Ihre Website mit Ihrem Planvo-Konto verbindet
- ✅ Sicherstellt, dass nur autorisierte Anfragen akzeptiert werden
- ✅ Ihnen volle Kontrolle über Zugriffe gibt
- ✅ Detaillierte Nutzungsstatistiken liefert

!!! warning "Wichtig: API Key geheim halten"
    Behandeln Sie Ihren API Key wie ein Passwort! Teilen Sie ihn niemals öffentlich oder committen Sie ihn nicht in Git-Repositories.

## 📝 API Key erstellen

### Schritt 1: Zu API Keys navigieren

1. Melden Sie sich bei Planvo an: [www.planvo.de](https://www.planvo.de)
2. Klicken Sie auf **Einstellungen** (⚙️) in der linken Navigation
3. Wählen Sie **API Keys** aus dem Menü

![API Keys im Menü](../assets/screenshots/api-keys-menu.png)

### Schritt 2: Neuen API Key erstellen

1. Klicken Sie auf den Button **"Neuer API Key"**
2. Füllen Sie das Formular aus:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Name** | Ein eindeutiger Name für Ihren Key | `Meine Portfolio-Website` |
| **Website URL** (optional) | Die URL Ihrer Website | `https://www.ihre-website.de` |
| **Website Source** (optional) | Interner Name für Tracking | `Portfolio Buchungen` |
| **Ablaufdatum** (optional) | Wann der Key automatisch deaktiviert wird | `31.12.2025` |
| **Anfragen pro Minute** | Maximale Anfragen pro Minute | `60` (Standard) |
| **Anfragen pro Tag** | Maximale Anfragen pro Tag | `1000` (Standard) |
| **IP Whitelist** (optional) | Erlaubte IP-Adressen (eine pro Zeile) | `192.168.1.1` |

3. Klicken Sie auf **"Erstellen"**

### Schritt 3: API Key speichern

!!! danger "⚠️ Wichtiger Hinweis"
    Ihr API Key wird **nur einmal** angezeigt! Speichern Sie ihn jetzt an einem sicheren Ort.

Nach der Erstellung sehen Sie einen Dialog mit Ihrem neuen API Key:

```
pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7
```

**So speichern Sie Ihren Key:**

=== "Option 1: .env Datei (Empfohlen)"

    Speichern Sie den Key in einer `.env` Datei in Ihrem Projekt:

    ```bash
    # .env
    PLANVO_API_KEY=pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7
    PLANVO_API_URL=https://api.planvo.de
    ```

    **Wichtig:** Fügen Sie `.env` zu Ihrer `.gitignore` hinzu!

    ```gitignore
    # .gitignore
    .env
    .env.local
    ```

=== "Option 2: Passwort-Manager"

    Speichern Sie den Key in einem Passwort-Manager wie:
    
    - 1Password
    - LastPass
    - Bitwarden
    - KeePass

=== "Option 3: Notiz-App (verschlüsselt)"

    Nutzen Sie eine verschlüsselte Notiz-App wie:
    
    - Apple Notes (mit Passwort)
    - Notion (Private Page)
    - Evernote (verschlüsselte Notiz)

### Schritt 4: Integration vorbereiten

Kopieren Sie die bereitgestellten Integrations-Beispiele:

#### JavaScript / Fetch

```javascript
// .env file
PLANVO_API_KEY=pk_live_your_api_key_here

// JavaScript
const response = await fetch('https://api.planvo.de/api/public/booking/services', {
  headers: {
    'Authorization': `Bearer ${process.env.PLANVO_API_KEY}`
  }
});

const data = await response.json();
console.log(data);
```

#### cURL (zum Testen)

```bash
curl -X GET "https://api.planvo.de/api/public/booking/services" \
  -H "Authorization: Bearer pk_live_your_api_key_here"
```

## 📊 API Key verwalten

### Übersicht

In der API Keys-Liste sehen Sie alle Ihre Keys mit wichtigen Informationen:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Der von Ihnen vergebene Name |
| **API Key Preview** | Die ersten Zeichen des Keys (z.B. `pk_live_****************`) |
| **Website** | Die verknüpfte Website |
| **Status** | 🟢 Aktiv oder 🔴 Inaktiv |
| **Verwendungen** | Anzahl der API-Aufrufe |
| **Zuletzt verwendet** | Zeitstempel der letzten Nutzung |
| **Erstellt** | Erstellungsdatum |
| **Aktionen** | Verfügbare Aktionen |

### Verfügbare Aktionen

#### 🔄 Status umschalten (Aktivieren/Deaktivieren)

- **Klicken Sie auf den Schalter** (🟢/🔴)
- Der Key wird sofort aktiviert oder deaktiviert
- Deaktivierte Keys können keine API-Anfragen mehr durchführen

!!! tip "Tipp: Temporäre Deaktivierung"
    Nutzen Sie die Deaktivierung, wenn Sie Ihre Website vorübergehend vom Planvo-System trennen möchten, ohne den Key zu löschen.

#### 📈 Statistiken ansehen

Klicken Sie auf das **Statistik-Icon** (📊), um detaillierte Informationen zu sehen:

- **Gesamtanfragen:** Wie oft wurde der Key verwendet?
- **Letzte Nutzung:** Wann wurde der Key zuletzt genutzt?
- **Rate Limits:** Ihre aktuellen Limits
- **Durchschnittliche Nutzung:** Anfragen pro Tag

**Beispiel-Statistik:**

```
📊 API Key Statistiken - Meine Portfolio-Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gesamtanfragen:        1,234
Zuletzt verwendet:     vor 5 Minuten
Status:                🟢 Aktiv

Rate Limits:
  - Pro Minute:        60 Anfragen
  - Pro Tag:           1,000 Anfragen

Durchschnitt:          42 Anfragen/Tag
Seit:                  30 Tagen
```

#### 🗑️ API Key löschen

1. Klicken Sie auf das **Löschen-Icon** (🗑️)
2. Bestätigen Sie die Aktion im Dialog
3. Der Key wird permanent deaktiviert (Soft Delete)

!!! danger "Achtung: Nicht rückgängig machbar"
    Gelöschte Keys können nicht wiederhergestellt werden. Ihre Website kann dann keine Anfragen mehr durchführen!

## 🔒 Sicherheits-Best-Practices

### 1. Umgebungsvariablen verwenden

❌ **Niemals so:**
```javascript
// BAD: Key direkt im Code
const API_KEY = 'pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7';
```

✅ **Immer so:**
```javascript
// GOOD: Key in Umgebungsvariable
const API_KEY = process.env.PLANVO_API_KEY;
```

### 2. .gitignore konfigurieren

Fügen Sie sensible Dateien zu `.gitignore` hinzu:

```gitignore
# Environment variables
.env
.env.local
.env.production

# API Keys
api-keys.txt
secrets.json
```

### 3. Separate Keys für verschiedene Umgebungen

Erstellen Sie separate API Keys für:

- 🔧 **Entwicklung:** `pk_test_...` (niedrige Rate Limits)
- 🌐 **Staging:** `pk_test_...` (mittlere Rate Limits)
- 🚀 **Production:** `pk_live_...` (hohe Rate Limits)

### 4. IP-Whitelist aktivieren (optional)

Beschränken Sie den Zugriff auf bekannte IP-Adressen:

1. Bearbeiten Sie Ihren API Key
2. Fügen Sie Ihre Server-IP hinzu (eine pro Zeile):
   ```
   192.168.1.100
   203.0.113.42
   ```
3. Speichern Sie die Änderungen

### 5. Regelmäßige Rotation

Erneuern Sie Ihre API Keys regelmäßig (z.B. alle 6 Monate):

1. Erstellen Sie einen neuen API Key
2. Aktualisieren Sie Ihre Website mit dem neuen Key
3. Löschen Sie den alten Key nach erfolgreicher Migration

## 🚨 Was tun bei Sicherheitsvorfällen?

Wenn Sie vermuten, dass Ihr API Key kompromittiert wurde:

1. **🔴 Sofort deaktivieren:** Klicken Sie auf den Toggle-Button
2. **📝 Neuen Key erstellen:** Generieren Sie einen neuen API Key
3. **🔄 Website aktualisieren:** Ersetzen Sie den alten Key durch den neuen
4. **🗑️ Alten Key löschen:** Entfernen Sie den kompromittierten Key
5. **📧 Support kontaktieren:** Informieren Sie uns unter [security@planvo.de](mailto:security@planvo.de)

## ❓ Häufig gestellte Fragen (FAQ)

??? question "Wie viele API Keys kann ich erstellen?"
    
    Sie können unbegrenzt viele API Keys erstellen. Wir empfehlen, separate Keys für verschiedene Websites oder Umgebungen zu verwenden.

??? question "Was passiert, wenn ich mein Rate Limit überschreite?"
    
    Wenn Sie Ihr Rate Limit überschreiten, erhalten Sie eine `429 Too Many Requests` Antwort. Ihre Anfragen werden automatisch nach Ablauf des Zeitfensters wieder zugelassen.

??? question "Kann ich die Rate Limits erhöhen?"
    
    Ja! Bearbeiten Sie Ihren API Key und passen Sie die Limits nach Bedarf an. Für sehr hohe Limits kontaktieren Sie bitte unseren Support.

??? question "Was bedeutet 'pk_live_' und 'pk_test_'?"
    
    - `pk_live_`: Production Keys für Live-Websites
    - `pk_test_`: Test Keys für Entwicklung und Staging
    
    Aktuell gibt es keinen funktionalen Unterschied, aber wir empfehlen die Verwendung von Test-Keys für Entwicklungsumgebungen.

??? question "Kann ich einen gelöschten API Key wiederherstellen?"
    
    Nein, gelöschte API Keys können nicht wiederhergestellt werden. Sie müssen einen neuen Key erstellen.

??? question "Werden meine API Keys verschlüsselt gespeichert?"
    
    Ja! API Keys werden mit SHA-256 gehasht und sicher in unserer Datenbank gespeichert. Nur der Hash wird gespeichert, niemals der Klartext-Key.

## 🎯 Nächste Schritte

Nachdem Sie Ihren API Key erstellt haben:

1. **[📚 Schnellstart-Guide lesen](quickstart.md)** - Integrieren Sie die API in 5 Minuten
2. **[📖 API-Referenz studieren](reference.md)** - Lernen Sie alle verfügbaren Endpoints kennen
3. **[💻 Code-Beispiele ansehen](examples.md)** - Nutzen Sie fertige Beispiele für Ihr Framework

---

**Benötigen Sie Hilfe?** Kontaktieren Sie uns:

- 📧 E-Mail: [info@planvo.de](mailto:info@planvo.de)
- 💬 Chat: Verfügbar im Planvo-Dashboard
- 📚 Community: [community.planvo.de](https://community.planvo.de)

