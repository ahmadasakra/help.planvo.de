# API-Referenz

Vollständige Dokumentation aller Planvo Booking API Endpoints.

## 🌐 Base URL

=== "Production"
    ```
    https://api.planvo.de
    ```

=== "Development"
    ```
    http://localhost:8888
    ```

## 🔐 Authentifizierung

Alle Endpoints erfordern API Key Authentifizierung via `Authorization` Header:

```http
Authorization: Bearer pk_live_your_api_key_here
```

### Beispiel-Request

```javascript
const response = await fetch('https://api.planvo.de/api/public/booking/services', {
  headers: {
    'Authorization': 'Bearer pk_live_your_api_key_here',
    'Content-Type': 'application/json'
  }
});
```

## 📋 Verfügbare Endpoints

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| [`/services`](#get-services) | GET | Alle buchbaren Services abrufen |
| [`/employees`](#get-employees) | GET | Alle buchbaren Mitarbeiter abrufen |
| [`/available-days`](#get-available-days) | GET | Verfügbare Tage im Monat abrufen |
| [`/availability`](#get-availability) | GET | Verfügbare Zeitslots abrufen |
| [`/book`](#create-booking) | POST | Buchung erstellen |

---

## Endpoints

### GET /services

Ruft alle buchbaren Services ab, die aktiviert und nicht gelöscht sind.

**URL:** `GET /api/public/booking/services`

#### Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Beratungsgespräch",
      "description": "60-minütiges Beratungsgespräch zu Ihrem Projekt",
      "category": "Beratung",
      "pricing": {
        "price": 150,
        "currency": "EUR",
        "taxRate": 19
      },
      "duration": {
        "value": 60,
        "unit": "minutes"
      },
      "features": [
        "Individuelle Beratung",
        "Lösungsvorschläge",
        "Dokumentation"
      ],
      "enabled": true,
      "sortOrder": 1
    }
  ]
}
```

#### Response Fields

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `_id` | string | Eindeutige Service-ID |
| `title` | string | Service-Titel |
| `description` | string | Service-Beschreibung |
| `category` | string | Service-Kategorie |
| `pricing.price` | number | Preis |
| `pricing.currency` | string | Währung (EUR, USD, etc.) |
| `pricing.taxRate` | number | Steuersatz (%) |
| `duration.value` | number | Dauer-Wert |
| `duration.unit` | string | Dauer-Einheit (minutes, hours) |
| `features` | array | Liste der Features |
| `enabled` | boolean | Ist aktiviert? |
| `sortOrder` | number | Sortierreihenfolge |

#### Beispiel-Code

=== "JavaScript"
    ```javascript
    const getServices = async () => {
      const response = await fetch(
        'https://api.planvo.de/api/public/booking/services',
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );
      const data = await response.json();
      return data.data;
    };
    ```

=== "React"
    ```jsx
    import { useState, useEffect } from 'react';

    function useServices() {
      const [services, setServices] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch('https://api.planvo.de/api/public/booking/services', {
          headers: { 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}` }
        })
          .then(res => res.json())
          .then(data => setServices(data.data))
          .finally(() => setLoading(false));
      }, []);

      return { services, loading };
    }
    ```

=== "cURL"
    ```bash
    curl -X GET "https://api.planvo.de/api/public/booking/services" \
      -H "Authorization: Bearer pk_live_your_api_key_here"
    ```

---

### GET /employees

Ruft alle buchbaren Mitarbeiter ab.

**URL:** `GET /api/public/booking/employees`

#### Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Max Mustermann",
      "email": "max@firma.de",
      "phone": "+49 123 456789",
      "role": "Berater",
      "available": true
    }
  ]
}
```

#### Response Fields

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `_id` | string | Eindeutige Mitarbeiter-ID |
| `name` | string | Vollständiger Name |
| `email` | string | E-Mail-Adresse |
| `phone` | string | Telefonnummer |
| `role` | string | Rolle/Position |
| `available` | boolean | Ist verfügbar? |

#### Beispiel-Code

=== "JavaScript"
    ```javascript
    const getEmployees = async () => {
      const response = await fetch(
        'https://api.planvo.de/api/public/booking/employees',
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );
      const data = await response.json();
      return data.data;
    };
    ```

=== "cURL"
    ```bash
    curl -X GET "https://api.planvo.de/api/public/booking/employees" \
      -H "Authorization: Bearer pk_live_your_api_key_here"
    ```

---

### GET /available-days

Ruft alle verfügbaren Tage in einem Monat ab. Nützlich für die Anzeige von Kalendern mit markierten verfügbaren Tagen.

**URL:** `GET /api/public/booking/available-days`

#### Query Parameters

| Parameter | Typ | Required | Beschreibung |
|-----------|-----|----------|--------------|
| `year` | number | Ja | Jahr (z.B. `2025`) |
| `month` | number | Ja | Monat (1-12) |
| `serviceId` | string | Optional | Filter nach Service-ID |
| `employeeId` | string | Optional | Filter nach Mitarbeiter-ID |

#### Response

```json
{
  "success": true,
  "data": {
    "year": 2025,
    "month": 1,
    "availableDays": [
      1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17,
      20, 21, 22, 23, 24, 27, 28, 29, 30, 31
    ],
    "totalDays": 23
  }
}
```

#### Response Fields

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `year` | number | Jahr |
| `month` | number | Monat (1-12) |
| `availableDays` | array | Liste der verfügbaren Tage (1-31) |
| `totalDays` | number | Anzahl verfügbarer Tage |

#### Beispiel-Code

=== "JavaScript"
    ```javascript
    const getAvailableDays = async (year, month, serviceId) => {
      const params = new URLSearchParams({
        year,
        month,
        ...(serviceId && { serviceId })
      });

      const response = await fetch(
        `https://api.planvo.de/api/public/booking/available-days?${params}`,
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );
      const data = await response.json();
      return data.data.availableDays;
    };

    // Verwendung
    const days = await getAvailableDays(2025, 1, 'service_id_123');
    console.log('Verfügbare Tage:', days);
    ```

=== "React"
    ```jsx
    function useAvailableDays(year, month, serviceId) {
      const [days, setDays] = useState([]);

      useEffect(() => {
        const params = new URLSearchParams({ year, month, serviceId });
        fetch(`https://api.planvo.de/api/public/booking/available-days?${params}`, {
          headers: { 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}` }
        })
          .then(res => res.json())
          .then(data => setDays(data.data.availableDays));
      }, [year, month, serviceId]);

      return days;
    }
    ```

=== "cURL"
    ```bash
    curl -X GET "https://api.planvo.de/api/public/booking/available-days?year=2025&month=1&serviceId=507f1f77bcf86cd799439011" \
      -H "Authorization: Bearer pk_live_your_api_key_here"
    ```

---

### GET /availability

Ruft verfügbare Zeitslots für ein bestimmtes Datum ab.

**URL:** `GET /api/public/booking/availability`

#### Query Parameters

| Parameter | Typ | Required | Beschreibung |
|-----------|-----|----------|--------------|
| `date` | string | Ja | Datum im Format `YYYY-MM-DD` |
| `serviceId` | string | Ja | Service-ID |
| `employeeId` | string | Optional | Mitarbeiter-ID (`any` für alle) |

#### Response

```json
{
  "success": true,
  "data": {
    "date": "2025-01-15",
    "timeSlots": [
      {
        "time": "09:00",
        "available": true,
        "employeeId": "507f1f77bcf86cd799439012",
        "employeeName": "Max Mustermann"
      },
      {
        "time": "10:00",
        "available": true,
        "employeeId": "507f1f77bcf86cd799439012",
        "employeeName": "Max Mustermann"
      },
      {
        "time": "11:00",
        "available": false,
        "reason": "Bereits gebucht"
      }
    ]
  }
}
```

#### Response Fields

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `date` | string | Datum (YYYY-MM-DD) |
| `timeSlots` | array | Liste der Zeitslots |
| `timeSlots[].time` | string | Uhrzeit (HH:mm) |
| `timeSlots[].available` | boolean | Ist verfügbar? |
| `timeSlots[].employeeId` | string | Mitarbeiter-ID |
| `timeSlots[].employeeName` | string | Mitarbeiter-Name |
| `timeSlots[].reason` | string | Grund (falls nicht verfügbar) |

#### Beispiel-Code

=== "JavaScript"
    ```javascript
    const getAvailability = async (date, serviceId, employeeId = 'any') => {
      const params = new URLSearchParams({
        date,
        serviceId,
        employeeId
      });

      const response = await fetch(
        `https://api.planvo.de/api/public/booking/availability?${params}`,
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        }
      );
      const data = await response.json();
      return data.data.timeSlots;
    };

    // Verwendung
    const slots = await getAvailability('2025-01-15', 'service_id_123');
    console.log('Verfügbare Zeitslots:', slots);
    ```

=== "cURL"
    ```bash
    curl -X GET "https://api.planvo.de/api/public/booking/availability?date=2025-01-15&serviceId=507f1f77bcf86cd799439011&employeeId=any" \
      -H "Authorization: Bearer pk_live_your_api_key_here"
    ```

---

### POST /book

Erstellt eine neue Buchung. Der Kunde wird automatisch angelegt, falls noch nicht vorhanden.

**URL:** `POST /api/public/booking/book`

#### Request Body

```json
{
  "serviceId": "507f1f77bcf86cd799439011",
  "employeeId": "507f1f77bcf86cd799439012",
  "date": "2025-01-15",
  "time": "10:00",
  "customer": {
    "name": "Anna Schmidt",
    "email": "anna@example.com",
    "phone": "+49 123 456789"
  },
  "notes": "Ich möchte gerne über Marketing-Strategien sprechen"
}
```

#### Request Fields

| Feld | Typ | Required | Beschreibung |
|------|-----|----------|--------------|
| `serviceId` | string | Ja | Service-ID |
| `employeeId` | string | Ja | Mitarbeiter-ID |
| `date` | string | Ja | Datum (YYYY-MM-DD) |
| `time` | string | Ja | Uhrzeit (HH:mm) |
| `customer.name` | string | Ja | Kundenname |
| `customer.email` | string | Ja | Kunden-E-Mail |
| `customer.phone` | string | Ja | Kunden-Telefon |
| `notes` | string | Optional | Zusätzliche Notizen |

#### Response

```json
{
  "success": true,
  "message": "Buchung erfolgreich erstellt",
  "data": {
    "bookingId": "507f1f77bcf86cd799439013",
    "appointmentNumber": "A-000123",
    "service": {
      "title": "Beratungsgespräch",
      "duration": 60
    },
    "employee": {
      "name": "Max Mustermann",
      "email": "max@firma.de"
    },
    "appointment": {
      "date": "2025-01-15",
      "time": "10:00",
      "endTime": "11:00"
    },
    "customer": {
      "name": "Anna Schmidt",
      "email": "anna@example.com",
      "customerNumber": "PW-000456"
    },
    "status": "pending",
    "emailSent": true
  }
}
```

#### Response Fields

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `bookingId` | string | Eindeutige Buchungs-ID |
| `appointmentNumber` | string | Termin-Nummer (z.B. A-000123) |
| `service` | object | Service-Details |
| `employee` | object | Mitarbeiter-Details |
| `appointment` | object | Termin-Details |
| `customer` | object | Kunden-Details |
| `status` | string | Status (`pending`, `confirmed`, `cancelled`) |
| `emailSent` | boolean | Wurde E-Mail versendet? |

#### Beispiel-Code

=== "JavaScript"
    ```javascript
    const createBooking = async (bookingData) => {
      const response = await fetch(
        'https://api.planvo.de/api/public/booking/book',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data.data;
    };

    // Verwendung
    const booking = await createBooking({
      serviceId: 'service_id_123',
      employeeId: 'employee_id_456',
      date: '2025-01-15',
      time: '10:00',
      customer: {
        name: 'Anna Schmidt',
        email: 'anna@example.com',
        phone: '+49 123 456789'
      },
      notes: 'Ich möchte gerne über Marketing-Strategien sprechen'
    });

    console.log('Buchung erstellt:', booking);
    ```

=== "React"
    ```jsx
    function BookingForm() {
      const [loading, setLoading] = useState(false);

      const handleSubmit = async (formData) => {
        setLoading(true);
        try {
          const response = await fetch(
            'https://api.planvo.de/api/public/booking/book',
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            }
          );

          if (!response.ok) throw new Error('Booking failed');

          const data = await response.json();
          alert(`Buchung erfolgreich! Termin-Nummer: ${data.data.appointmentNumber}`);
        } catch (error) {
          alert(`Fehler: ${error.message}`);
        } finally {
          setLoading(false);
        }
      };

      return (
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleSubmit(Object.fromEntries(formData));
        }}>
          {/* Form fields */}
        </form>
      );
    }
    ```

=== "cURL"
    ```bash
    curl -X POST "https://api.planvo.de/api/public/booking/book" \
      -H "Authorization: Bearer pk_live_your_api_key_here" \
      -H "Content-Type: application/json" \
      -d '{
        "serviceId": "507f1f77bcf86cd799439011",
        "employeeId": "507f1f77bcf86cd799439012",
        "date": "2025-01-15",
        "time": "10:00",
        "customer": {
          "name": "Anna Schmidt",
          "email": "anna@example.com",
          "phone": "+49 123 456789"
        },
        "notes": "Marketing-Beratung gewünscht"
      }'
    ```

---

## 🔄 Booking Workflow

Typischer Ablauf einer Buchung:

```mermaid
graph TD
    A[Kunde besucht Website] --> B[Services laden]
    B --> C[Service auswählen]
    C --> D[Verfügbare Tage laden]
    D --> E[Tag auswählen]
    E --> F[Zeitslots laden]
    F --> G[Zeit auswählen]
    G --> H[Kundendaten eingeben]
    H --> I[Buchung absenden]
    I --> J{Erfolgreich?}
    J -->|Ja| K[Bestätigung anzeigen]
    J -->|Nein| L[Fehler anzeigen]
    K --> M[E-Mail erhalten]
```

### Schritt-für-Schritt Implementierung

#### 1. Services laden

```javascript
const services = await fetch('/api/public/booking/services', {
  headers: { 'Authorization': `Bearer ${API_KEY}` }
}).then(r => r.json());
```

#### 2. Service auswählen

```javascript
const selectedService = services.data[0];
```

#### 3. Verfügbare Tage laden

```javascript
const availableDays = await fetch(
  `/api/public/booking/available-days?year=2025&month=1&serviceId=${selectedService._id}`,
  { headers: { 'Authorization': `Bearer ${API_KEY}` } }
).then(r => r.json());
```

#### 4. Zeitslots laden

```javascript
const timeSlots = await fetch(
  `/api/public/booking/availability?date=2025-01-15&serviceId=${selectedService._id}&employeeId=any`,
  { headers: { 'Authorization': `Bearer ${API_KEY}` } }
).then(r => r.json());
```

#### 5. Buchung erstellen

```javascript
const booking = await fetch('/api/public/booking/book', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    serviceId: selectedService._id,
    employeeId: timeSlots.data.timeSlots[0].employeeId,
    date: '2025-01-15',
    time: '10:00',
    customer: {
      name: 'Anna Schmidt',
      email: 'anna@example.com',
      phone: '+49 123 456789'
    }
  })
}).then(r => r.json());
```

---

## 🚨 Error Handling

### HTTP Status Codes

| Code | Beschreibung |
|------|--------------|
| `200` | Erfolgreiche Anfrage |
| `201` | Erfolgreich erstellt |
| `400` | Ungültige Anfrage (z.B. fehlende Parameter) |
| `401` | Nicht authentifiziert (ungültiger API Key) |
| `403` | Keine Berechtigung |
| `404` | Ressource nicht gefunden |
| `429` | Rate Limit überschritten |
| `500` | Interner Server-Fehler |

### Error Response Format

```json
{
  "success": false,
  "message": "Validation failed",
  "error": "Missing required field: customer.email"
}
```

### Beispiel Error Handling

```javascript
async function makeRequest(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json();
      
      switch (response.status) {
        case 400:
          throw new Error(`Ungültige Anfrage: ${error.message}`);
        case 401:
          throw new Error('API Key ist ungültig oder abgelaufen');
        case 429:
          throw new Error('Zu viele Anfragen. Bitte warten Sie einen Moment.');
        case 500:
          throw new Error('Server-Fehler. Bitte versuchen Sie es später erneut.');
        default:
          throw new Error(error.message || 'Ein Fehler ist aufgetreten');
      }
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

---

## 🔒 Rate Limiting

Standard Rate Limits pro API Key:

- **60 Anfragen pro Minute**
- **1,000 Anfragen pro Tag**

### Rate Limit Headers

```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640995200
```

### Rate Limit überschritten

```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "retryAfter": 60
}
```

---

## 📚 Weitere Ressourcen

- **[Schnellstart-Guide](quickstart.md)** - Erste Integration in 5 Minuten
- **[Code-Beispiele](examples.md)** - Fertige Komponenten für alle Frameworks
- **[API Keys verwalten](api-keys.md)** - Sicherheit und Best Practices

---

**Benötigen Sie Hilfe?**

- 📧 E-Mail: [info@planvo.de](mailto:info@planvo.de)
- 💬 Live-Chat: Verfügbar im Planvo-Dashboard
- 📚 Community: [community.planvo.de](https://community.planvo.de)








