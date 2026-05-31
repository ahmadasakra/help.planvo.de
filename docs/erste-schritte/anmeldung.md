# Anmeldung bei Planvo

> **⏱️ Lesezeit:** 4 Minuten  
> **📱 Verfügbar in:** Web & Mobile App  
> **👤 Für:** Alle Benutzer

---

## 🔐 Anmeldung — Überblick

Je nach Mandant melden Sie sich auf eine der folgenden Arten an:

| Variante | Wann? | Hinweis |
|----------|-------|---------|
| **SSO (Keycloak)** | Von Ihrer Firma eingerichtet | Anmeldung über Firmen-Login (z. B. Microsoft) |
| **E-Mail & Passwort** | Legacy-Mandanten | Klassisches Login-Formular |
| **Mobile App** | iOS & Android | Subdomain + E-Mail + Passwort (oder SSO-Flow) |

Ihre Firma teilt Ihnen mit, welche Variante gilt.

---

## Web-Version

### Schritt 1: Planvo öffnen

```
https://ihre-firma.planvo.de
```

Ersetzen Sie `ihre-firma` durch die Subdomain Ihres Mandanten (z. B. `demo` für [demo.planvo.de](https://demo.planvo.de)).

!!! info "Ihre Planvo-Adresse"
    Die Subdomain erhalten Sie vom Administrator oder per E-Mail nach der Registrierung.

### Schritt 2: Anmelden

**SSO (Keycloak):**

1. Seite öffnen — ggf. Weiterleitung zum Firmen-Login
2. Mit Ihrem Firmen-Konto anmelden
3. Nach erfolgreicher Anmeldung landen Sie in Planvo

**E-Mail & Passwort (Legacy):**

1. E-Mail-Adresse eingeben
2. Passwort eingeben
3. Optional: „Angemeldet bleiben“
4. **Anmelden** klicken

!!! warning "Direkter Login deaktiviert?"
    Wenn Ihr Mandant vollständig auf Keycloak umgestellt ist, ist das klassische Passwort-Formular nicht mehr verfügbar. Nutzen Sie den SSO-Button bzw. den Link Ihres Administrators.

---

## Mobile App

1. Planvo App öffnen
2. **Subdomain** eingeben (z. B. `ihre-firma` — ohne `.planvo.de`)
3. E-Mail und Passwort eingeben
4. **Anmelden** tippen

!!! tip "Biometrische Anmeldung"
    Nach der ersten Anmeldung können Sie Face ID / Touch ID aktivieren.

---

## 🔑 Passwort vergessen?

Nur bei Mandanten mit **Legacy-Login**:

1. **Passwort vergessen?** wählen
2. E-Mail eingeben und Link anfordern
3. E-Mail öffnen und neues Passwort setzen

Bei **SSO** verwaltet Ihr IT-Administrator oder Identity-Provider die Passwörter.

---

## 🔐 Passwort-Anforderungen (Legacy)

- Mindestens **8 Zeichen**
- Groß- und Kleinbuchstaben, Zahl, Sonderzeichen
- Kein triviales Wort oder Geburtsdatum

---

## 🔒 Zwei-Faktor-Authentifizierung (2FA)

Falls Ihr Mandant 2FA aktiviert hat, folgen Sie den Hinweisen beim Login oder in **Einstellungen → Sicherheit**.

---

## 🌍 Mehrere Geräte

Sie können parallel am Desktop, Laptop, Tablet und Smartphone angemeldet sein. Daten synchronisieren sich automatisch.

---

## 🚪 Abmelden

**Web:** Profilbild oben rechts → **Abmelden**

**Mobile App:** **Einstellungen** → **Abmelden** (Bezeichnung kann je nach App-Version variieren)

---

## ❓ Probleme beim Anmelden

### „E-Mail oder Passwort falsch“

- Schreibweise prüfen
- Bei Legacy: Passwort zurücksetzen
- Bei SSO: Firmen-Login erneut versuchen
- Administrator kontaktieren

### „Konto gesperrt“ / zu viele Versuche

Nach **5 fehlgeschlagenen Login-Versuchen** innerhalb von 15 Minuten kann der Zugang für **bis zu 30 Minuten** blockiert sein. Warten oder Administrator kontaktieren.

### „Server nicht erreichbar“

- Subdomain prüfen (`ihre-firma.planvo.de`)
- Internetverbindung prüfen
- Kurz warten und erneut versuchen
- [Support](../hilfe/kontakt.md) kontaktieren

---

## 📞 Support

--8<-- "includes/kontakt-ssot.md"

---

[:octicons-arrow-right-24: Weiter zum Dashboard](dashboard.md){ .md-button .md-button--primary }

*Letzte Aktualisierung: Mai 2026*
