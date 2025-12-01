# Deployment Configurations

Configuraciones completas para desplegar Astro en diferentes plataformas.

## Comparación de Plataformas

| Feature | Vercel | Netlify | Cloudflare |
|---------|--------|---------|------------|
| **Edge Functions** | ✅ | ✅ | ✅ |
| **Serverless Functions** | ✅ | ✅ | ✅ (Workers) |
| **ISR** | ✅ Native | ⚠️ Builders | ❌ |
| **Image CDN** | ✅ | ✅ | ✅ |
| **Forms** | ❌ | ✅ Native | ❌ |
| **Database** | Postgres | ❌ | ✅ D1 |
| **KV Storage** | ✅ (Edge Config) | ❌ | ✅ |
| **Object Storage** | ✅ Blob | ❌ | ✅ R2 |
| **Split Testing** | ✅ | ✅ | ❌ |
| **Analytics** | ✅ | ✅ | ✅ |
| **Free Tier** | Generous | Generous | Very Generous |
| **Pricing** | Per-request | Per-build | Per-request |

## Vercel (`vercel.mjs`)

**Mejor para:** SaaS, E-commerce, Apps con ISR

```bash
npm install @astrojs/vercel
```

### Características

- ISR nativo (páginas regeneradas bajo demanda)
- Edge Middleware
- Web Analytics + Speed Insights
- Image Optimization
- Cron Jobs

### Configuración Mínima

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
});
```

### ISR Example

```astro
---
// src/pages/products/[slug].astro
export const prerender = true;

// Esta página se regenera cada hora
---
```

```javascript
// astro.config.mjs
adapter: vercel({
  isr: {
    expiration: 60 * 60, // 1 hora
  },
}),
```

## Netlify (`netlify.mjs`)

**Mejor para:** JAMstack, Blogs, Sites con formularios

```bash
npm install @astrojs/netlify
```

### Características

- Netlify Forms (formularios sin backend)
- Edge Functions
- Split Testing nativo
- Deploy Previews
- i18n redirects

### Configuración Mínima

```javascript
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
});
```

### Netlify Forms

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

## Cloudflare (`cloudflare.mjs`)

**Mejor para:** Global performance, Apps con D1/KV/R2

```bash
npm install @astrojs/cloudflare
```

### Características

- 300+ edge locations
- D1 Database (SQLite)
- KV Storage
- R2 Object Storage
- Workers AI
- Unlimited bandwidth (Pages)

### Configuración Mínima

```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
});
```

### D1 Database

```typescript
// src/pages/api/users.ts
export const GET: APIRoute = async ({ locals }) => {
  const { DB } = locals.runtime.env;
  const { results } = await DB.prepare('SELECT * FROM users').all();
  return new Response(JSON.stringify(results));
};
```

## Decisión de Plataforma

```
¿Qué necesitas?
│
├── Formularios sin código → Netlify
│
├── ISR / On-demand regeneration → Vercel
│
├── Base de datos edge → Cloudflare (D1)
│
├── Object storage barato → Cloudflare (R2)
│
├── Analytics incluido → Vercel o Cloudflare
│
├── Máximo rendimiento global → Cloudflare
│
├── Team collaboration → Vercel
│
└── Presupuesto limitado → Cloudflare (gratis generoso)
```

## Configuración por Entorno

### Development

```bash
# .env.local
PUBLIC_SITE_URL=http://localhost:4321
DATABASE_URL=local
```

### Production

Configurar en el dashboard de cada plataforma:
- Vercel: Settings > Environment Variables
- Netlify: Site settings > Environment variables
- Cloudflare: Settings > Variables

## CI/CD

### GitHub Actions (Vercel)

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### GitHub Actions (Cloudflare)

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          command: pages deploy dist --project-name=my-site
```

## Tips

1. **Static First** - Usa `output: 'static'` si no necesitas SSR
2. **Hybrid para APIs** - `output: 'hybrid'` permite SSG + API routes
3. **Edge Middleware** - Úsalo para geo-redirects, A/B testing
4. **Caching** - Configura headers de cache para assets estáticos
5. **Secrets** - Nunca commits secrets, usa variables de entorno
