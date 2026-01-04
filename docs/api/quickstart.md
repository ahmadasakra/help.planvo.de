# Schnellstart-Guide

Integrieren Sie die Planvo Booking API in 5 einfachen Schritten in Ihre Website!

## 🎯 Was Sie brauchen

- ✅ Ein aktives Planvo-Konto
- ✅ Eine Website (HTML, React, Vue, Angular, etc.)
- ✅ Grundkenntnisse in JavaScript
- ⏱️ **Zeit:** ca. 10 Minuten

## 📋 Schritt-für-Schritt-Anleitung

### Schritt 1: API Key erstellen

1. Melden Sie sich bei Planvo an: **[Ihre-Firma.planvo.de](https://planvo.de)**
2. Navigieren Sie zu **Einstellungen** → **API Keys**
3. Klicken Sie auf **"Neuer API Key"**
4. Füllen Sie das Formular aus:
   - **Name:** `Meine Website`
   - **Website URL:** `https://ihre-website.de`
   - **Website Source:** `Website Buchungen`
5. Klicken Sie auf **"Erstellen"**
6. **Kopieren Sie den API Key** (wird nur einmal angezeigt!)

!!! tip "Tipp"
    Speichern Sie den API Key sofort in einer `.env` Datei. Mehr dazu im nächsten Schritt.

### Schritt 2: Services in Planvo konfigurieren

Bevor Sie die API nutzen können, müssen Sie buchbare Services in Planvo anlegen:

1. Navigieren Sie zu **Dienstleistungen** → **Buchbare Services**
2. Klicken Sie auf **"Neuer Service"**
3. Füllen Sie die Service-Details aus:
   - **Titel:** z.B. "Beratungsgespräch"
   - **Kategorie:** z.B. "Beratung"
   - **Preis:** z.B. "150 €"
   - **Dauer:** z.B. "60 Minuten"
   - **Beschreibung:** Kurze Beschreibung des Services
4. Klicken Sie auf **"Speichern"**

#### Verfügbarkeiten festlegen

1. Wechseln Sie zum Tab **"Verfügbarkeiten"**
2. Klicken Sie auf **"Neue Verfügbarkeit"**
3. Wählen Sie einen Mitarbeiter aus
4. Legen Sie die verfügbaren Zeiten fest:
   ```
   Montag:    09:00 - 17:00
   Dienstag:  09:00 - 17:00
   Mittwoch:  09:00 - 17:00
   Donnerstag: 09:00 - 17:00
   Freitag:   09:00 - 15:00
   ```
5. Klicken Sie auf **"Speichern"**

### Schritt 3: API Key in Ihrer Website speichern

#### Option A: Vanilla JavaScript / HTML

Erstellen Sie eine `.env` Datei im Root Ihrer Website:

```bash
# .env
PLANVO_API_KEY=pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7
PLANVO_API_URL=https://api.planvo.de
```

#### Option B: React / Next.js

```bash
# .env.local
NEXT_PUBLIC_PLANVO_API_KEY=pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7
NEXT_PUBLIC_PLANVO_API_URL=https://api.planvo.de
```

#### Option C: Vue / Nuxt

```bash
# .env
VITE_PLANVO_API_KEY=pk_live_ff206e4e66a5e6693ebeccd9f3e0d4b97435ef36376da54872c1c3aa30c15fc7
VITE_PLANVO_API_URL=https://api.planvo.de
```

!!! danger "Wichtig: .gitignore"
    Fügen Sie `.env` zu Ihrer `.gitignore` hinzu!
    ```gitignore
    .env
    .env.local
    ```

### Schritt 4: Erste API-Anfrage testen

#### Vanilla JavaScript

Erstellen Sie eine `booking.js` Datei:

```javascript
// booking.js
const API_KEY = 'pk_live_your_api_key_here'; // Aus .env laden!
const API_URL = 'https://api.planvo.de';

async function getServices() {
  try {
    const response = await fetch(`${API_URL}/api/public/booking/services`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Available Services:', data.data);
    return data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
}

// Services laden
getServices();
```

#### React

```jsx
// hooks/usePlanvoServices.js
import { useState, useEffect } from 'react';

export function usePlanvoServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PLANVO_API_URL}/api/public/booking/services`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PLANVO_API_KEY}`
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch services');

        const data = await response.json();
        setServices(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}

// Verwendung in Komponente:
// const { services, loading, error } = usePlanvoServices();
```

#### Vue 3 (Composition API)

```vue
<!-- composables/usePlanvoServices.js -->
<script setup>
import { ref, onMounted } from 'vue';

export function usePlanvoServices() {
  const services = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PLANVO_API_URL}/api/public/booking/services`,
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PLANVO_API_KEY}`
          }
        }
      );

      if (!response.ok) throw new Error('Failed to fetch services');

      const data = await response.json();
      services.value = data.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchServices();
  });

  return { services, loading, error };
}
</script>
```

### Schritt 5: Services anzeigen

#### HTML + JavaScript

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Termin buchen - Ihre Firma</title>
  <style>
    .service-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin: 10px 0;
      cursor: pointer;
      transition: box-shadow 0.3s;
    }
    .service-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .service-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .service-price {
      color: #6366f1;
      font-size: 18px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <h1>Wählen Sie einen Service</h1>
  <div id="services-container">
    Laden...
  </div>

  <script>
    const API_KEY = 'pk_live_your_api_key_here';
    const API_URL = 'https://api.planvo.de';

    async function loadServices() {
      const response = await fetch(`${API_URL}/api/public/booking/services`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await response.json();
      
      const container = document.getElementById('services-container');
      container.innerHTML = '';

      data.data.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
          <div class="service-title">${service.title}</div>
          <div class="service-description">${service.description}</div>
          <div class="service-price">${service.pricing.price} ${service.pricing.currency}</div>
          <div class="service-duration">${service.duration.value} ${service.duration.unit}</div>
        `;
        card.onclick = () => selectService(service);
        container.appendChild(card);
      });
    }

    function selectService(service) {
      console.log('Service ausgewählt:', service);
      // Weiter zu Mitarbeiter-Auswahl oder Verfügbarkeiten
    }

    loadServices();
  </script>
</body>
</html>
```

#### React Komponente

```jsx
// components/ServiceSelector.jsx
import { usePlanvoServices } from '../hooks/usePlanvoServices';

export function ServiceSelector({ onServiceSelect }) {
  const { services, loading, error } = usePlanvoServices();

  if (loading) return <div>Laden...</div>;
  if (error) return <div>Fehler: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Wählen Sie einen Service</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map(service => (
          <div
            key={service._id}
            onClick={() => onServiceSelect(service)}
            className="border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-indigo-600 font-bold text-lg">
                {service.pricing.price} {service.pricing.currency}
              </span>
              <span className="text-gray-500">
                {service.duration.value} {service.duration.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## ✅ Nächste Schritte

Glückwunsch! Sie haben erfolgreich Ihre erste API-Integration erstellt. 🎉

### Was Sie jetzt tun sollten:

1. **[📖 Vollständigen Buchungs-Workflow implementieren](reference.md#booking-workflow)**
   - Mitarbeiter auswählen
   - Verfügbarkeiten anzeigen
   - Buchung erstellen

2. **[💻 Fertige Code-Beispiele ansehen](examples.md)**
   - Komplette Booking-Komponenten
   - React, Vue, Angular Beispiele
   - TypeScript-Integrationen

3. **[🎨 UI-Komponenten anpassen](examples.md#ui-komponenten)**
   - Design-Vorlagen
   - Tailwind CSS Beispiele
   - Mobile-responsive Layouts

## 🆘 Probleme?

### API Key funktioniert nicht?

- ✅ Prüfen Sie, ob der Key aktiviert ist (grüner Status)
- ✅ Überprüfen Sie, ob Sie den kompletten Key kopiert haben
- ✅ Stellen Sie sicher, dass der Key mit `pk_live_` beginnt

### Keine Services werden angezeigt?

- ✅ Haben Sie mindestens einen Service in Planvo erstellt?
- ✅ Ist der Service als "Enabled" markiert?
- ✅ Haben Sie Verfügbarkeiten für den Service angelegt?

### CORS-Fehler in der Console?

CORS-Fehler sollten nicht auftreten, da unsere API alle Origins erlaubt. Falls doch:

1. Prüfen Sie, ob Sie den API Key im `Authorization` Header senden
2. Stellen Sie sicher, dass Sie die Production-URL verwenden: `https://api.planvo.de`
3. Kontaktieren Sie unseren Support: [info@planvo.de](mailto:info@planvo.de)

## 💡 Hilfreiche Ressourcen

- 📚 **[Vollständige API-Referenz](reference.md)** - Alle Endpoints im Detail
- 💻 **[Code-Beispiele](examples.md)** - Fertige Komponenten für alle Frameworks
- 🔑 **[API Keys verwalten](api-keys.md)** - Sicherheit und Best Practices
- ❓ **[FAQ](../hilfe/faq.md)** - Häufig gestellte Fragen

---

**Benötigen Sie Hilfe?**

- 📧 E-Mail: [info@planvo.de](mailto:info@planvo.de)
- 💬 Live-Chat: Verfügbar im Planvo-Dashboard
- 📚 Community: [community.planvo.de](https://community.planvo.de)








