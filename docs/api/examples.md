# Code-Beispiele

Fertige, produktionsreife Code-Beispiele für die Integration der Planvo Booking API in verschiedene Frameworks.

## 📦 Vollständige Komponenten

### React + TypeScript

Vollständige Booking-Komponente mit allen Schritten des Workflows.

=== "BookingWidget.tsx"
    ```typescript
    import React, { useState, useEffect } from 'react';
    import { ServiceSelector } from './components/ServiceSelector';
    import { DateTimePicker } from './components/DateTimePicker';
    import { CustomerForm } from './components/CustomerForm';
    import { BookingConfirmation } from './components/BookingConfirmation';
    import { usePlanvoAPI } from './hooks/usePlanvoAPI';

    export function BookingWidget() {
      const [step, setStep] = useState(1);
      const [selectedService, setSelectedService] = useState(null);
      const [selectedDateTime, setSelectedDateTime] = useState(null);
      const [booking, setBooking] = useState(null);

      const { services, loading } = usePlanvoAPI();

      if (loading) {
        return <div className="loading">Laden...</div>;
      }

      return (
        <div className="booking-widget">
          {step === 1 && (
            <ServiceSelector
              services={services}
              onSelect={(service) => {
                setSelectedService(service);
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <DateTimePicker
              service={selectedService}
              onSelect={(dateTime) => {
                setSelectedDateTime(dateTime);
                setStep(3);
              }}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <CustomerForm
              service={selectedService}
              dateTime={selectedDateTime}
              onSubmit={async (customerData) => {
                const result = await createBooking({
                  serviceId: selectedService._id,
                  employeeId: selectedDateTime.employeeId,
                  date: selectedDateTime.date,
                  time: selectedDateTime.time,
                  customer: customerData
                });
                setBooking(result);
                setStep(4);
              }}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <BookingConfirmation
              booking={booking}
              onNewBooking={() => {
                setStep(1);
                setSelectedService(null);
                setSelectedDateTime(null);
                setBooking(null);
              }}
            />
          )}
        </div>
      );
    }
    ```

=== "usePlanvoAPI.ts"
    ```typescript
    import { useState, useEffect } from 'react';

    const API_URL = process.env.NEXT_PUBLIC_PLANVO_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_PLANVO_API_KEY;

    interface Service {
      _id: string;
      title: string;
      description: string;
      category: string;
      pricing: {
        price: number;
        currency: string;
      };
      duration: {
        value: number;
        unit: string;
      };
    }

    export function usePlanvoAPI() {
      const [services, setServices] = useState<Service[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        fetchServices();
      }, []);

      const fetchServices = async () => {
        try {
          const response = await fetch(`${API_URL}/api/public/booking/services`, {
            headers: {
              'Authorization': `Bearer ${API_KEY}`
            }
          });

          if (!response.ok) {
            throw new Error('Failed to fetch services');
          }

          const data = await response.json();
          setServices(data.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
          setLoading(false);
        }
      };

      const getAvailableDays = async (year: number, month: number, serviceId: string) => {
        const response = await fetch(
          `${API_URL}/api/public/booking/available-days?year=${year}&month=${month}&serviceId=${serviceId}`,
          {
            headers: {
              'Authorization': `Bearer ${API_KEY}`
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch available days');
        const data = await response.json();
        return data.data.availableDays;
      };

      const getAvailability = async (date: string, serviceId: string, employeeId: string = 'any') => {
        const response = await fetch(
          `${API_URL}/api/public/booking/availability?date=${date}&serviceId=${serviceId}&employeeId=${employeeId}`,
          {
            headers: {
              'Authorization': `Bearer ${API_KEY}`
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch availability');
        const data = await response.json();
        return data.data.timeSlots;
      };

      const createBooking = async (bookingData: any) => {
        const response = await fetch(`${API_URL}/api/public/booking/book`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Booking failed');
        }

        const data = await response.json();
        return data.data;
      };

      return {
        services,
        loading,
        error,
        getAvailableDays,
        getAvailability,
        createBooking
      };
    }
    ```

=== "ServiceSelector.tsx"
    ```typescript
    import React from 'react';
    import { Service } from '../types';

    interface Props {
      services: Service[];
      onSelect: (service: Service) => void;
    }

    export function ServiceSelector({ services, onSelect }: Props) {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Wählen Sie einen Service</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service._id}
                onClick={() => onSelect(service)}
                className="border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
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

### Vue 3 + Composition API

=== "BookingWidget.vue"
    ```vue
    <template>
      <div class="booking-widget">
        <!-- Step 1: Service Selection -->
        <ServiceSelector
          v-if="step === 1"
          :services="services"
          @select="onServiceSelect"
        />

        <!-- Step 2: Date & Time Selection -->
        <DateTimePicker
          v-if="step === 2"
          :service="selectedService"
          @select="onDateTimeSelect"
          @back="step = 1"
        />

        <!-- Step 3: Customer Details -->
        <CustomerForm
          v-if="step === 3"
          :service="selectedService"
          :date-time="selectedDateTime"
          @submit="onCustomerSubmit"
          @back="step = 2"
        />

        <!-- Step 4: Confirmation -->
        <BookingConfirmation
          v-if="step === 4"
          :booking="booking"
          @new-booking="resetBooking"
        />
      </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import { usePlanvoAPI } from './composables/usePlanvoAPI';
    import ServiceSelector from './components/ServiceSelector.vue';
    import DateTimePicker from './components/DateTimePicker.vue';
    import CustomerForm from './components/CustomerForm.vue';
    import BookingConfirmation from './components/BookingConfirmation.vue';

    const { services, createBooking } = usePlanvoAPI();

    const step = ref(1);
    const selectedService = ref(null);
    const selectedDateTime = ref(null);
    const booking = ref(null);

    const onServiceSelect = (service) => {
      selectedService.value = service;
      step.value = 2;
    };

    const onDateTimeSelect = (dateTime) => {
      selectedDateTime.value = dateTime;
      step.value = 3;
    };

    const onCustomerSubmit = async (customerData) => {
      const result = await createBooking({
        serviceId: selectedService.value._id,
        employeeId: selectedDateTime.value.employeeId,
        date: selectedDateTime.value.date,
        time: selectedDateTime.value.time,
        customer: customerData
      });

      booking.value = result;
      step.value = 4;
    };

    const resetBooking = () => {
      step.value = 1;
      selectedService.value = null;
      selectedDateTime.value = null;
      booking.value = null;
    };
    </script>
    ```

=== "usePlanvoAPI.js"
    ```javascript
    import { ref, onMounted } from 'vue';

    const API_URL = import.meta.env.VITE_PLANVO_API_URL;
    const API_KEY = import.meta.env.VITE_PLANVO_API_KEY;

    export function usePlanvoAPI() {
      const services = ref([]);
      const loading = ref(true);
      const error = ref(null);

      const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      };

      const fetchServices = async () => {
        try {
          const response = await fetch(`${API_URL}/api/public/booking/services`, {
            headers
          });

          if (!response.ok) throw new Error('Failed to fetch services');

          const data = await response.json();
          services.value = data.data;
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      };

      const getAvailableDays = async (year, month, serviceId) => {
        const response = await fetch(
          `${API_URL}/api/public/booking/available-days?year=${year}&month=${month}&serviceId=${serviceId}`,
          { headers }
        );

        if (!response.ok) throw new Error('Failed to fetch available days');
        const data = await response.json();
        return data.data.availableDays;
      };

      const getAvailability = async (date, serviceId, employeeId = 'any') => {
        const response = await fetch(
          `${API_URL}/api/public/booking/availability?date=${date}&serviceId=${serviceId}&employeeId=${employeeId}`,
          { headers }
        );

        if (!response.ok) throw new Error('Failed to fetch availability');
        const data = await response.json();
        return data.data.timeSlots;
      };

      const createBooking = async (bookingData) => {
        const response = await fetch(`${API_URL}/api/public/booking/book`, {
          method: 'POST',
          headers,
          body: JSON.stringify(bookingData)
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Booking failed');
        }

        const data = await response.json();
        return data.data;
      };

      onMounted(() => {
        fetchServices();
      });

      return {
        services,
        loading,
        error,
        getAvailableDays,
        getAvailability,
        createBooking
      };
    }
    ```

### Vanilla JavaScript

Einfache Integration ohne Framework.

=== "booking.html"
    ```html
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Termin buchen</title>
      <link rel="stylesheet" href="booking.css">
    </head>
    <body>
      <div class="booking-container">
        <!-- Step 1: Services -->
        <div id="step-services" class="step active">
          <h2>Wählen Sie einen Service</h2>
          <div id="services-list"></div>
        </div>

        <!-- Step 2: Date & Time -->
        <div id="step-datetime" class="step">
          <h2>Wählen Sie Datum und Uhrzeit</h2>
          <div id="calendar"></div>
          <div id="timeslots"></div>
        </div>

        <!-- Step 3: Customer Details -->
        <div id="step-customer" class="step">
          <h2>Ihre Kontaktdaten</h2>
          <form id="customer-form">
            <input type="text" name="name" placeholder="Ihr Name" required>
            <input type="email" name="email" placeholder="E-Mail" required>
            <input type="tel" name="phone" placeholder="Telefon" required>
            <textarea name="notes" placeholder="Anmerkungen (optional)"></textarea>
            <button type="submit">Termin buchen</button>
          </form>
        </div>

        <!-- Step 4: Confirmation -->
        <div id="step-confirmation" class="step">
          <h2>✅ Buchung erfolgreich!</h2>
          <div id="booking-details"></div>
        </div>
      </div>

      <script src="booking.js"></script>
    </body>
    </html>
    ```

=== "booking.js"
    ```javascript
    const API_KEY = 'pk_live_your_api_key_here';
    const API_URL = 'https://api.planvo.de';

    let state = {
      step: 1,
      selectedService: null,
      selectedDate: null,
      selectedTime: null,
      selectedEmployee: null
    };

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      loadServices();
    });

    // Load Services
    async function loadServices() {
      const response = await fetch(`${API_URL}/api/public/booking/services`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await response.json();

      const container = document.getElementById('services-list');
      container.innerHTML = data.data.map(service => `
        <div class="service-card" onclick="selectService('${service._id}')">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-footer">
            <span class="price">${service.pricing.price} ${service.pricing.currency}</span>
            <span class="duration">${service.duration.value} ${service.duration.unit}</span>
          </div>
        </div>
      `).join('');
    }

    // Select Service
    async function selectService(serviceId) {
      const response = await fetch(`${API_URL}/api/public/booking/services`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await response.json();
      state.selectedService = data.data.find(s => s._id === serviceId);

      goToStep(2);
      loadCalendar();
    }

    // Load Calendar
    async function loadCalendar() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;

      const response = await fetch(
        `${API_URL}/api/public/booking/available-days?year=${year}&month=${month}&serviceId=${state.selectedService._id}`,
        { headers: { 'Authorization': `Bearer ${API_KEY}` } }
      );
      const data = await response.json();

      // Render calendar with available days
      renderCalendar(year, month, data.data.availableDays);
    }

    // Render Calendar
    function renderCalendar(year, month, availableDays) {
      const calendar = document.getElementById('calendar');
      const daysInMonth = new Date(year, month, 0).getDate();

      let html = '<div class="calendar-grid">';
      for (let day = 1; day <= daysInMonth; day++) {
        const isAvailable = availableDays.includes(day);
        const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        html += `
          <div 
            class="calendar-day ${isAvailable ? 'available' : 'disabled'}"
            onclick="${isAvailable ? `selectDate('${date}')` : ''}"
          >
            ${day}
          </div>
        `;
      }
      html += '</div>';

      calendar.innerHTML = html;
    }

    // Select Date
    async function selectDate(date) {
      state.selectedDate = date;

      const response = await fetch(
        `${API_URL}/api/public/booking/availability?date=${date}&serviceId=${state.selectedService._id}&employeeId=any`,
        { headers: { 'Authorization': `Bearer ${API_KEY}` } }
      );
      const data = await response.json();

      const container = document.getElementById('timeslots');
      container.innerHTML = data.data.timeSlots
        .filter(slot => slot.available)
        .map(slot => `
          <button 
            class="timeslot" 
            onclick="selectTime('${slot.time}', '${slot.employeeId}')"
          >
            ${slot.time}
          </button>
        `).join('');
    }

    // Select Time
    function selectTime(time, employeeId) {
      state.selectedTime = time;
      state.selectedEmployee = employeeId;
      goToStep(3);
    }

    // Submit Customer Form
    document.getElementById('customer-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const customer = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
      };

      const bookingData = {
        serviceId: state.selectedService._id,
        employeeId: state.selectedEmployee,
        date: state.selectedDate,
        time: state.selectedTime,
        customer,
        notes: formData.get('notes') || ''
      };

      try {
        const response = await fetch(`${API_URL}/api/public/booking/book`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        });

        if (!response.ok) throw new Error('Booking failed');

        const data = await response.json();
        showConfirmation(data.data);
        goToStep(4);
      } catch (error) {
        alert(`Fehler: ${error.message}`);
      }
    });

    // Show Confirmation
    function showConfirmation(booking) {
      const container = document.getElementById('booking-details');
      container.innerHTML = `
        <div class="confirmation-box">
          <p><strong>Termin-Nummer:</strong> ${booking.appointmentNumber}</p>
          <p><strong>Service:</strong> ${booking.service.title}</p>
          <p><strong>Datum:</strong> ${booking.appointment.date}</p>
          <p><strong>Uhrzeit:</strong> ${booking.appointment.time} - ${booking.appointment.endTime}</p>
          <p><strong>Mitarbeiter:</strong> ${booking.employee.name}</p>
          <p class="success-message">✉️ Eine Bestätigungs-E-Mail wurde an ${booking.customer.email} gesendet.</p>
          <button onclick="location.reload()">Neuer Termin</button>
        </div>
      `;
    }

    // Navigate Steps
    function goToStep(stepNumber) {
      document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
      });
      document.getElementById(`step-${
        ['services', 'datetime', 'customer', 'confirmation'][stepNumber - 1]
      }`).classList.add('active');
      state.step = stepNumber;
    }
    ```

=== "booking.css"
    ```css
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }

    .booking-container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      padding: 40px;
    }

    .step {
      display: none;
    }

    .step.active {
      display: block;
    }

    h2 {
      margin-bottom: 24px;
      color: #1a1a1a;
    }

    /* Services */
    #services-list {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .service-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .service-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    .service-card h3 {
      margin-bottom: 8px;
      color: #1a1a1a;
    }

    .service-card p {
      color: #666;
      margin-bottom: 16px;
    }

    .service-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      color: #6366f1;
      font-weight: bold;
      font-size: 18px;
    }

    .duration {
      color: #999;
    }

    /* Calendar */
    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
      margin-bottom: 24px;
    }

    .calendar-day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .calendar-day.available:hover {
      background: #6366f1;
      color: white;
    }

    .calendar-day.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* Timeslots */
    #timeslots {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 12px;
    }

    .timeslot {
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
    }

    .timeslot:hover {
      background: #6366f1;
      color: white;
      border-color: #6366f1;
    }

    /* Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    input, textarea {
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    button[type="submit"] {
      padding: 16px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    button[type="submit"]:hover {
      background: #4f46e5;
    }

    /* Confirmation */
    .confirmation-box {
      border: 2px solid #10b981;
      border-radius: 12px;
      padding: 24px;
      background: #f0fdf4;
    }

    .confirmation-box p {
      margin-bottom: 12px;
    }

    .success-message {
      margin-top: 24px;
      padding: 16px;
      background: #10b981;
      color: white;
      border-radius: 8px;
      text-align: center;
    }

    .confirmation-box button {
      margin-top: 24px;
      width: 100%;
      padding: 16px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }
    ```

## 📚 Weitere Ressourcen

- **[Schnellstart-Guide](quickstart.md)** - Erste Integration in 5 Minuten
- **[API-Referenz](reference.md)** - Vollständige API-Dokumentation
- **[API Keys verwalten](api-keys.md)** - Sicherheit und Best Practices

---

**Benötigen Sie Hilfe?**

- 📧 E-Mail: [info@planvo.de](mailto:info@planvo.de)
- 💬 Live-Chat: Verfügbar im Planvo-Dashboard
- 📚 Community: [community.planvo.de](https://community.planvo.de)








