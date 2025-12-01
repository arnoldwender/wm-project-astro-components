# DSGVO-Compliant Map Components

Karten-Komponenten die erst nach expliziter Zustimmung des Nutzers externe Ressourcen laden.

## Installation

Keine zusätzlichen Abhängigkeiten erforderlich. Leaflet wird dynamisch geladen (nur für OpenStreetMap).

## Komponenten

### GoogleMap

Google Maps mit Consent-Placeholder.

```astro
---
import { GoogleMap } from '@wendermedia/astro-components/maps';
---

<GoogleMap
  lat={52.520008}
  lng={13.404954}
  zoom={15}
  apiKey={import.meta.env.PUBLIC_GOOGLE_MAPS_KEY}
  title="Unser Standort"
  height="400px"
/>
```

#### Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `lat` | `number` | erforderlich | Breitengrad |
| `lng` | `number` | erforderlich | Längengrad |
| `zoom` | `number` | `14` | Zoom-Stufe (1-20) |
| `mapType` | `string` | `'roadmap'` | `roadmap`, `satellite`, `hybrid`, `terrain` |
| `apiKey` | `string` | - | Google Maps API Key |
| `width` | `string` | `'100%'` | Breite |
| `height` | `string` | `'400px'` | Höhe |
| `title` | `string` | `'Google Maps'` | Titel im Consent-Dialog |
| `consentText` | `string` | - | Benutzerdefinierter Consent-Text |
| `buttonText` | `string` | `'Karte laden'` | Button-Text |
| `privacyLinkUrl` | `string` | `/datenschutz#google-maps` | Link zur Datenschutzerklärung |
| `consentKey` | `string` | `'google-maps-consent'` | LocalStorage-Schlüssel |

### OpenStreetMap

Datenschutzfreundlichere Alternative mit Leaflet.

```astro
---
import { OpenStreetMap } from '@wendermedia/astro-components/maps';
---

<OpenStreetMap
  lat={52.520008}
  lng={13.404954}
  zoom={15}
  title="Unser Büro"
  markerPopup="<strong>WenderMedia</strong><br>Musterstraße 1"
/>
```

#### Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `lat` | `number` | erforderlich | Breitengrad |
| `lng` | `number` | erforderlich | Längengrad |
| `zoom` | `number` | `14` | Zoom-Stufe |
| `tileProvider` | `string` | `'osm'` | `osm`, `carto`, `stamen`, `custom` |
| `customTileUrl` | `string` | - | URL für Custom-Tiles |
| `markerTitle` | `string` | `'Standort'` | Marker-Tooltip |
| `markerPopup` | `string` | - | Popup-Inhalt (HTML) |
| `showAttribution` | `boolean` | `true` | Attribution anzeigen |

## DSGVO-Konformität

### Warum ist das wichtig?

1. **Keine Datenübertragung ohne Zustimmung** - Externe Karten laden Ressourcen von Google/OSM-Servern und übertragen dabei IP-Adressen
2. **Informierte Zustimmung** - Der Nutzer sieht vor dem Laden, welche Daten übertragen werden
3. **Opt-in statt Opt-out** - Die Karte wird erst nach aktivem Klick geladen
4. **Speicherung der Entscheidung** - Optional kann der Nutzer die Zustimmung speichern

### Consent-Flow

```
┌─────────────────────────────────────┐
│                                     │
│      [Karten-Platzhalter]          │
│                                     │
│  "Diese Karte wird von Google      │
│   Maps bereitgestellt..."          │
│                                     │
│     [ Karte laden ]                │
│                                     │
│  □ Auswahl merken                  │
│                                     │
└─────────────────────────────────────┘
         │
         ▼ Klick
┌─────────────────────────────────────┐
│                                     │
│    [Interaktive Karte]             │
│                                     │
└─────────────────────────────────────┘
```

### Datenschutzerklärung

Füge diesen Abschnitt zu deiner Datenschutzerklärung hinzu:

```markdown
## Google Maps

Wir nutzen auf unserer Website den Kartendienst Google Maps.
Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
Dublin 4, Irland.

Die Nutzung von Google Maps erfolgt nur nach Ihrer ausdrücklichen
Einwilligung. Beim Laden der Karte wird Ihre IP-Adresse an Google
übertragen. Google kann dadurch nachvollziehen, von welcher Website
aus eine Anfrage gestellt wurde.

Mehr Informationen: https://policies.google.com/privacy

## OpenStreetMap

Wir nutzen alternativ den Kartendienst OpenStreetMap. Beim Laden
der Kartenkacheln werden Daten an die OpenStreetMap Foundation
übertragen. Die Nutzung erfolgt nur nach Ihrer ausdrücklichen
Einwilligung.

Mehr Informationen: https://wiki.osmfoundation.org/wiki/Privacy_Policy
```

## Tile-Provider für OSM

### Standard (OSM)
```astro
<OpenStreetMap tileProvider="osm" />
```

### CARTO (cleaner look)
```astro
<OpenStreetMap tileProvider="carto" />
```

### Self-hosted Tiles
Für volle DSGVO-Konformität:

```astro
<OpenStreetMap
  tileProvider="custom"
  customTileUrl="https://tiles.your-server.com/{z}/{x}/{y}.png"
/>
```

## Integration mit Consent-Managern

### Klaro / Tarteaucitron

```javascript
// klaro-config.js
const klaroConfig = {
  services: [
    {
      name: 'google-maps',
      title: 'Google Maps',
      purposes: ['functional'],
      cookies: [],
      callback: function(consent, service) {
        if (consent) {
          localStorage.setItem('google-maps-consent', 'true');
          // Trigger map load
          document.querySelectorAll('[data-action="load-map"]').forEach(btn => {
            btn.click();
          });
        } else {
          localStorage.removeItem('google-maps-consent');
        }
      }
    }
  ]
};
```

## Best Practices

1. **Zeige immer eine Alternative** - Der "Route planen" Link funktioniert auch ohne Consent
2. **Verwende aussagekräftige Consent-Texte** - Erkläre was passiert
3. **Verlinke zur Datenschutzerklärung** - Für mehr Details
4. **Speichere Consent nur wenn gewünscht** - Die Checkbox ist opt-in
