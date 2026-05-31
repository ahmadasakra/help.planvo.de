# Planvo API Dokumentation

Vollständige Dokumentation für die Planvo Booking API.

## 📚 Inhalt

- **[Übersicht](index.md)** - Einführung und Features
- **[API Keys verwalten](api-keys.md)** - API Key erstellen und sichern
- **[Schnellstart-Guide](quickstart.md)** - Integration in 5 Minuten
- **[API-Referenz](reference.md)** - Vollständige Endpoint-Dokumentation
- **[Code-Beispiele](examples.md)** - Fertige Komponenten für alle Frameworks
- **[OpenAPI Spec](openapi.yaml)** - Maschinenlesbare API-Spezifikation

## 🚀 Quick Start

1. **API Key erstellen**
   - Anmelden bei [Ihre-Firma.planvo.de](https://planvo.de)
   - Navigieren zu Einstellungen → API Keys
   - "Neuer API Key" erstellen

2. **Service konfigurieren**
   - Dienstleistungen → Buchbare Services
   - Neuen Service erstellen
   - Verfügbarkeiten festlegen

3. **API integrieren**
   ```javascript
   const API_KEY = 'pk_live_your_key_here';
   const response = await fetch('https://api.planvo.de/api/public/booking/services', {
     headers: { 'Authorization': `Bearer ${API_KEY}` }
   });
   ```

## 📖 Vollständige Anleitung

Lesen Sie den **[Schnellstart-Guide](quickstart.md)** für eine detaillierte Schritt-für-Schritt-Anleitung.

## 🔐 Authentifizierung

Alle Endpoints erfordern API Key Authentifizierung:

```http
Authorization: Bearer pk_live_your_api_key_here
```

## 📋 Verfügbare Endpoints

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| `/services` | GET | Buchbare Services abrufen |
| `/employees` | GET | Buchbare Mitarbeiter abrufen |
| `/available-days` | GET | Verfügbare Tage im Monat |
| `/availability` | GET | Verfügbare Zeitslots |
| `/book` | POST | Buchung erstellen |

## 💻 Beispiele

### React
```jsx
import { usePlanvoServices } from './hooks/usePlanvoAPI';

function BookingWidget() {
  const { services, loading } = usePlanvoServices();
  // ...
}
```

### Vue
```vue
<script setup>
import { usePlanvoAPI } from './composables/usePlanvoAPI';
const { services } = usePlanvoAPI();
</script>
```

### Vanilla JS
```javascript
const services = await fetch('https://api.planvo.de/api/public/booking/services', {
  headers: { 'Authorization': `Bearer ${API_KEY}` }
}).then(r => r.json());
```

Mehr Beispiele in **[Code-Beispiele](examples.md)**.

## 🆘 Support

- 📧 E-Mail: [info@planvo.de](mailto:info@planvo.de)
- 💬 Chat: Verfügbar im Planvo-Dashboard
- 📚 Community: [community.planvo.de](https://community.planvo.de)

## 📄 Lizenz

Diese API ist proprietär und nur für Planvo-Kunden verfügbar.

© 2024 Planvo - Alle Rechte vorbehalten.








