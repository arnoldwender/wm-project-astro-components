# DSGVO-Compliant Social Components

Social-Media-Komponenten ohne Tracking und externe Scripts.

## Installation

Keine zusätzlichen Abhängigkeiten erforderlich.

## Komponenten

### SocialShare

Share-Buttons im "Shariff"-Stil - erst beim aktiven Teilen werden Daten übertragen.

```astro
---
import { SocialShare } from '@wendermedia/astro-components/social';
---

<SocialShare
  url={Astro.url.href}
  title="Mein Artikel"
  description="Eine kurze Beschreibung"
  platforms={['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'copy']}
/>
```

#### Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `url` | `string` | erforderlich | URL zum Teilen |
| `title` | `string` | erforderlich | Titel des geteilten Inhalts |
| `description` | `string` | `''` | Beschreibung (für E-Mail) |
| `image` | `string` | `''` | Bild-URL (für Pinterest) |
| `hashtags` | `string[]` | `[]` | Hashtags (für Twitter) |
| `via` | `string` | `''` | Twitter-Handle |
| `platforms` | `Platform[]` | alle | Welche Plattformen anzeigen |
| `variant` | `string` | `'buttons'` | `buttons`, `icons`, `minimal` |
| `size` | `string` | `'md'` | `sm`, `md`, `lg` |
| `direction` | `string` | `'horizontal'` | `horizontal`, `vertical` |
| `showConsent` | `boolean` | `true` | Consent-Hinweis anzeigen |
| `consentText` | `string` | - | Benutzerdefinierter Consent-Text |

#### Verfügbare Plattformen

- `facebook` - Facebook Share
- `twitter` - X (Twitter) Tweet
- `linkedin` - LinkedIn Share
- `xing` - XING Share
- `whatsapp` - WhatsApp Message
- `telegram` - Telegram Message
- `email` - E-Mail
- `pinterest` - Pinterest Pin
- `reddit` - Reddit Submit
- `copy` - Link kopieren

### SocialFollow

Links zu Social-Media-Profilen - komplett ohne Tracking.

```astro
---
import { SocialFollow } from '@wendermedia/astro-components/social';
---

<SocialFollow
  links={[
    { platform: 'facebook', url: 'https://facebook.com/yourpage' },
    { platform: 'instagram', url: 'https://instagram.com/yourhandle' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/yourcompany' },
    { platform: 'github', url: 'https://github.com/yourorg' },
  ]}
  variant="filled"
  size="md"
/>
```

#### Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `links` | `SocialLink[]` | erforderlich | Array von Profil-Links |
| `variant` | `string` | `'default'` | `default`, `filled`, `outline`, `minimal` |
| `size` | `string` | `'md'` | `sm`, `md`, `lg` |
| `showLabels` | `boolean` | `false` | Plattform-Namen anzeigen |
| `direction` | `string` | `'horizontal'` | `horizontal`, `vertical` |

#### Verfügbare Plattformen

- `facebook`, `instagram`, `twitter`, `linkedin`, `xing`
- `youtube`, `tiktok`, `pinterest`
- `github`, `dribbble`, `behance`

## DSGVO-Konformität

### Das Problem mit Standard-Share-Buttons

Herkömmliche Social-Buttons (Facebook Like, Twitter Follow) laden beim Seitenaufruf:
- JavaScript von den Social-Media-Plattformen
- Tracking-Pixel und Cookies
- Übertragen Nutzerdaten (auch ohne Interaktion!)

### Unsere Lösung

1. **Keine externen Scripts** - Alles läuft lokal
2. **Keine Cookies** - Kein Tracking ohne Aktion
3. **Nur Links** - Share-URLs werden erst beim Klick geöffnet
4. **Consent-Hinweis** - Nutzer werden informiert

### Wie es funktioniert

```
Normaler Share-Button          Unser Share-Button
─────────────────────          ─────────────────

Seite lädt                     Seite lädt
    │                              │
    ▼                              ▼
Facebook Script lädt           Nur HTML/CSS/JS lokal
    │                              │
    ▼                              (keine externen Requests)
IP + Cookies an Facebook           │
    │                              ▼
    ▼                          Nutzer klickt
Button angezeigt                   │
    │                              ▼
    ▼                          Popup öffnet sich
Nutzer klickt                      │
    │                              ▼
    ▼                          Erst jetzt: Daten an Facebook
Teilen (schon getrackt!)       (nur diese eine Aktion)
```

## Styling-Varianten

### Buttons (Default)

```astro
<SocialShare variant="buttons" />
```
Volle Buttons mit Icons und Labels.

### Icons Only

```astro
<SocialShare variant="icons" />
```
Nur Icons, kompakter.

### Minimal

```astro
<SocialShare variant="minimal" />
```
Sehr dezent, keine Hintergrundfarben.

### Filled (Follow)

```astro
<SocialFollow variant="filled" />
```
Buttons in Plattform-Farben.

## Beispiele

### Blog-Post Footer

```astro
---
import { SocialShare } from '@wendermedia/astro-components/social';
---

<footer class="post-footer">
  <h3>Artikel teilen</h3>
  <SocialShare
    url={Astro.url.href}
    title={post.data.title}
    description={post.data.description}
    platforms={['twitter', 'linkedin', 'email', 'copy']}
    variant="icons"
    size="lg"
  />
</footer>
```

### Website Footer

```astro
---
import { SocialFollow } from '@wendermedia/astro-components/social';
---

<footer>
  <div class="social-links">
    <h4>Folge uns</h4>
    <SocialFollow
      links={[
        { platform: 'instagram', url: 'https://instagram.com/example' },
        { platform: 'facebook', url: 'https://facebook.com/example' },
        { platform: 'linkedin', url: 'https://linkedin.com/company/example' },
      ]}
      variant="outline"
    />
  </div>
</footer>
```

### Produkt-Seite

```astro
<SocialShare
  url={`https://shop.example.com/products/${product.slug}`}
  title={product.name}
  image={product.image}
  platforms={['facebook', 'pinterest', 'whatsapp', 'copy']}
  consentText="Beim Teilen werden Daten an die jeweilige Plattform übertragen."
/>
```

## Datenschutzerklärung

Füge diesen Abschnitt hinzu:

```markdown
## Social Media Plugins

Wir verwenden auf unserer Website keine Social-Media-Plugins, die
automatisch Daten an die jeweiligen Plattformen übertragen.

Stattdessen setzen wir auf datenschutzfreundliche Share-Links.
Erst wenn Sie aktiv auf einen Share-Button klicken, öffnet sich
ein neues Fenster zur jeweiligen Plattform. Nur in diesem Moment
werden Daten übertragen.

Bei Links zu unseren Social-Media-Profilen handelt es sich um
einfache Hyperlinks ohne eingebettete Tracking-Funktionen.
```

## Accessibility

- Alle Buttons haben `aria-label` mit Plattform-Namen
- Fokus-Styles für Keyboard-Navigation
- Icons haben `aria-hidden="true"`
- Semantic HTML mit `<nav>` und `<ul>` (Follow)
