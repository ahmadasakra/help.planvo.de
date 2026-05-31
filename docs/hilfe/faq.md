# Häufig gestellte Fragen (FAQ)

Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu Planvo.

---

## 🔐 Anmeldung & Account

### Wie kann ich mich anmelden?

Öffnen Sie `https://ihre-firma.planvo.de` und melden Sie sich mit **E-Mail/Passwort** oder **SSO (Keycloak)** an — je nach Mandant.

[:octicons-arrow-right-24: Detaillierte Anleitung](../erste-schritte/anmeldung.md)

### Ich habe mein Passwort vergessen. Was nun?

1. Klicken Sie auf **"Passwort vergessen?"**
2. Geben Sie Ihre E-Mail-Adresse ein
3. Sie erhalten einen Link zum Zurücksetzen
4. Erstellen Sie ein neues Passwort

### Kann ich mich auf mehreren Geräten anmelden?

Ja! Sie können sich gleichzeitig auf Desktop, Laptop, Smartphone und Tablet anmelden. Ihre Daten werden automatisch synchronisiert.

### Warum werde ich automatisch abgemeldet?

Aus Sicherheitsgründen werden Sie nach 7 Tagen Inaktivität automatisch abgemeldet.

---

## ⏰ Zeiterfassung

### Wie erfasse ich meine Arbeitszeit?

**Web:** Dashboard → "Arbeit starten" Button  
**Mobile:** Zeit-Tab → "Arbeit starten"

[:octicons-arrow-right-24: Web-Anleitung](../web/zeiterfassung.md)  
[:octicons-arrow-right-24: Mobile-Anleitung](../mobile/zeiterfassung.md)

### Was passiert, wenn ich vergesse auszustempeln?

Sie erhalten nach 12 Stunden eine Benachrichtigung. Sie können dann nachträglich die korrekte Zeit eintragen.

### Kann ich Zeiten nachträglich korrigieren?

Ja! Gehen Sie zur Stundenübersicht, wählen Sie den Tag und klicken Sie auf "Bearbeiten". Fügen Sie einen Korrekturgrund hinzu.

!!! warning "Genehmigung erforderlich"
    Korrekturen müssen von Ihrem Vorgesetzten genehmigt werden.

### Funktioniert die Zeiterfassung offline?

Ja! Die Mobile App funktioniert komplett offline. Ihre Zeiten werden automatisch synchronisiert, wenn Sie wieder online sind.

[:octicons-arrow-right-24: Offline-Modus](../mobile/offline-modus.md)

### Wie werden Überstunden berechnet?

Überstunden = Tatsächliche Arbeitszeit - Vertragliche Sollarbeitszeit

Beispiel: 42h gearbeitet - 40h Vertrag = 2h Überstunden

---

## 📅 Schichtplanung

### Wie bewerbe ich mich für eine Schicht?

1. Gehen Sie zu **Schichtpläne** (Menü **Mitarbeiter & HR**)
2. Finden Sie eine offene Schicht
3. Klicken Sie auf **"Bewerben"**
4. Fügen Sie optional eine Nachricht hinzu
5. Warten Sie auf Genehmigung

[:octicons-arrow-right-24: Schichtplanung](../web/schichten.md)

### Kann ich Schichten tauschen?

Ja! Sie können mit Kollegen Schichten tauschen. Der Schichtleiter muss den Tausch genehmigen.

### Wie werde ich über Schichtänderungen informiert?

Sie erhalten automatisch eine Push-Benachrichtigung und eine E-Mail bei:
- Neuen Schichtzuweisungen
- Schichtänderungen
- Schichtabsagen

---

## 📊 Projekte

### Wie erstelle ich ein neues Projekt?

1. Gehen Sie zu **Projekte**
2. Klicken Sie auf **"+ Neues Projekt"**
3. Füllen Sie die Details aus
4. Weisen Sie Team-Mitglieder zu
5. Klicken Sie auf **"Erstellen"**

[:octicons-arrow-right-24: Projektmanagement](../web/projekte.md)

### Kann ich mehreren Projekten gleichzeitig zugeordnet sein?

Ja! Sie können beliebig vielen Projekten zugeordnet sein und zwischen ihnen wechseln.

### Wie teile ich Dokumente im Projekt?

Öffnen Sie das Projekt → Tab "Dokumente" → "Hochladen"

Unterstützte Formate: PDF, Word, Excel, Bilder, ZIP

---

## 🏖️ Abwesenheiten

### Wie beantrage ich Urlaub?

1. Gehen Sie zu **Abwesenheiten**
2. Klicken Sie auf **Neuer Antrag**
3. Wählen Sie Zeitraum und Typ
4. Klicken Sie auf **Antrag stellen**

[:octicons-arrow-right-24: Abwesenheiten](../web/urlaub.md)

### Wie schnell wird mein Urlaubsantrag bearbeitet?

Ihr Vorgesetzter wird automatisch benachrichtigt und bearbeitet den Antrag normalerweise innerhalb von 1-2 Werktagen.

### Kann ich einen Urlaubsantrag zurückziehen?

Ja, solange er noch nicht genehmigt wurde. Gehen Sie zu Ihren Anträgen und klicken Sie auf "Zurückziehen".

### Wie viele Urlaubstage habe ich noch?

Ihr Resturlaub wird im Dashboard und unter **Abwesenheiten** angezeigt.

---

## 📱 Mobile App

### Wo kann ich die Mobile App herunterladen?

**iOS:** App Store → Suche "Planvo"  
**Android:** Google Play Store → Suche "Planvo"

[:octicons-arrow-right-24: Installations-Anleitung](../mobile/installation.md)

### Warum funktioniert GPS nicht?

**Mögliche Ursachen:**
- GPS ist in den Geräteeinstellungen deaktiviert
- Planvo hat keine Standort-Berechtigung
- Sie befinden sich in einem Gebäude

**Lösung:**
1. Geräteeinstellungen → Standort → Aktivieren
2. Geräteeinstellungen → Apps → Planvo → Berechtigungen → Standort → Immer erlauben

### Verbraucht die App viel Akku?

Nein! Die App ist optimiert für minimalen Akku-Verbrauch. GPS wird nur beim Stempeln aktiviert, nicht permanent.

### Kann ich die App ohne Internet nutzen?

Ja! Die wichtigsten Funktionen (Zeiterfassung, Schichten ansehen) funktionieren offline.

[:octicons-arrow-right-24: Offline-Modus Details](../mobile/offline-modus.md)

---

## 🔧 Technische Probleme

### Die App stürzt ab. Was tun?

1. Starten Sie die App neu
2. Aktualisieren Sie auf die neueste Version
3. Starten Sie Ihr Gerät neu
4. Installieren Sie die App neu (Daten bleiben erhalten)
5. Kontaktieren Sie den Support

### Meine Daten werden nicht synchronisiert

**Checkliste:**
1. ✅ Internetverbindung aktiv?
2. ✅ Angemeldet in der App?
3. ✅ Neueste App-Version installiert?
4. ✅ Automatische Synchronisation aktiviert?

**Lösung:** Ziehen Sie in der App nach unten (Pull-to-Refresh) für manuelle Synchronisation.

### Ich kann keine Dokumente hochladen

**Mögliche Ursachen:**
- Datei zu groß (max. 50 MB)
- Dateiformat nicht unterstützt
- Keine Internet-Verbindung
- Speicher voll

**Lösung:**
- Komprimieren Sie große Dateien
- Nutzen Sie unterstützte Formate (PDF, JPG, PNG, DOC)
- Prüfen Sie Ihre Verbindung

### Warum ist die Web-Version langsam?

**Mögliche Ursachen:**
- Langsame Internetverbindung
- Zu viele offene Browser-Tabs
- Cache voll
- Veralteter Browser

**Lösung:**
1. Leeren Sie den Browser-Cache
2. Schließen Sie unnötige Tabs
3. Aktualisieren Sie Ihren Browser
4. Versuchen Sie einen anderen Browser

---

## 🔐 Sicherheit & Datenschutz

### Ist Planvo DSGVO-konform?

Ja! Planvo ist vollständig DSGVO-konform. Alle Daten werden in Deutschland/EU gespeichert und verschlüsselt übertragen.

### Wer kann meine Daten sehen?

- **Ihre Zeiterfassung:** Sie selbst, Ihr Vorgesetzter, HR
- **Ihre Projekte:** Projekt-Team-Mitglieder
- **Ihre Urlaubsanträge:** Sie selbst, Ihr Vorgesetzter, HR
- **GPS-Daten:** Nur Sie selbst und Ihr Vorgesetzter

### Kann ich meine Daten exportieren?

Ja! Unter **Einstellungen** → **Daten & Datenschutz** → **Daten exportieren**

### Kann ich meinen Account löschen?

Ja, kontaktieren Sie Ihren Administrator oder unseren Support für die Account-Löschung.

---

## 💰 Rechnungen & Abrechnung

### Wie erstelle ich eine Rechnung?

1. Gehen Sie zu **Rechnungen**
2. Klicken Sie auf **"+ Neue Rechnung"**
3. Wählen Sie den Kunden
4. Fügen Sie Positionen hinzu
5. Klicken Sie auf **"Erstellen"**

### Kann ich Rechnungsvorlagen erstellen?

Ja! Erstellen Sie eine Rechnung und speichern Sie sie als Vorlage für zukünftige Verwendung.

### Welche Zahlungsmethoden werden unterstützt?

- Überweisung
- PayPal
- Stripe (Kreditkarte)
- SEPA-Lastschrift

---

## ❓ Weitere Hilfe

### Ich finde meine Frage nicht hier

Keine Sorge! Hier sind weitere Ressourcen:

<div class="grid cards" markdown>

-   :material-book-open-page-variant:{ .lg } **Dokumentation**
    
    ---
    
    Vollständige Anleitungen
    
    [:octicons-arrow-right-24: Zur Dokumentation](../index.md)

-   :material-email:{ .lg } **E-Mail Support**
    
    ---
    
    Detaillierte Anfragen
    
    [support@planvo.de](mailto:support@planvo.de)

-   :material-chat:{ .lg } **Live-Chat**
    
    ---
    
    Schnelle Antworten
    
    [Chat öffnen](https://www.planvo.de)

-   :material-phone:{ .lg } **Telefon**
    
    ---
    
    Mo-Fr 9:00-17:00
    
    [+49 176 45827800](tel:+4917645827800)

</div>

---

[:octicons-arrow-right-24: Kontakt & Support](kontakt.md){ .md-button .md-button--primary }
[:octicons-arrow-right-24: Zurück zur Startseite](../index.md){ .md-button }

---

*Letzte Aktualisierung: November 2024*

