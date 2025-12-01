# Corporate Bundle

Stack para sitios corporativos multi-idioma.

## Características

- ✅ i18n nativo (DE/EN/ES)
- ✅ SSR híbrido para formularios
- ✅ MDX para contenido
- ✅ React para interactividad
- ✅ Netlify adapter

## Estructura Multi-idioma

```
src/
├── pages/
│   ├── index.astro           # /  (Alemán)
│   ├── about.astro           # /about
│   ├── en/
│   │   ├── index.astro       # /en
│   │   └── about.astro       # /en/about
│   └── es/
│       ├── index.astro       # /es
│       └── about.astro       # /es/about
├── content/
│   ├── services/             # Servicios (default: DE)
│   │   └── web-development.md
│   ├── en/services/
│   │   └── web-development.md
│   └── es/services/
│       └── web-development.md
└── i18n/
    └── index.ts              # Traducciones UI
```

## Uso de Traducciones

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<nav>
  <a href="/">{t('nav.home')}</a>
  <a href="/about">{t('nav.about')}</a>
  <a href="/contact">{t('nav.contact')}</a>
</nav>
```

## Language Switcher

```astro
---
import { languages, getLangFromUrl, getLocalizedPath } from '../i18n';

const currentLang = getLangFromUrl(Astro.url);
const currentPath = Astro.url.pathname;
---

<div class="language-switcher">
  {Object.entries(languages).map(([lang, label]) => (
    <a
      href={getLocalizedPath(currentPath, lang)}
      class:list={[
        'lang-link',
        { active: lang === currentLang }
      ]}
      hreflang={lang}
    >
      {label}
    </a>
  ))}
</div>
```

## Hreflang Tags

```astro
---
import { getAlternateUrls } from '../i18n';

const alternates = getAlternateUrls(Astro.url.pathname, Astro.site);
---

<head>
  {alternates.map(({ lang, url }) => (
    <link rel="alternate" hreflang={lang} href={url} />
  ))}
  <link rel="alternate" hreflang="x-default" href={Astro.site} />
</head>
```

## Content Collections Multi-idioma

```typescript
// src/content/config.ts
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Slug de la versión en idioma default para linking
    defaultSlug: z.string().optional(),
  }),
});
```

Query con idioma:

```astro
---
import { getCollection } from 'astro:content';

const lang = getLangFromUrl(Astro.url);
const prefix = lang === 'de' ? '' : `${lang}/`;

const services = await getCollection('services', ({ id }) => {
  return id.startsWith(prefix);
});
---
```

## Formulario de Contacto

```astro
---
// src/pages/api/contact.ts
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  // Validación, envío de email, etc.

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
---
```

## Legal Pages

Páginas requeridas para Alemania:

- `/impressum` - Aviso legal (requerido)
- `/datenschutz` - Política de privacidad (GDPR)
- `/agb` - Términos y condiciones

Con versiones en cada idioma.
