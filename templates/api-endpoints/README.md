# API Endpoints Templates

Plantillas de API endpoints para Astro SSR.

## Requisitos

Para usar estos endpoints, necesitas SSR habilitado:

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // o 'server'
  adapter: vercel(), // o netlify(), cloudflare(), etc.
});
```

## Endpoints Disponibles

### Contact Form (`contact.ts`)

Formulario de contacto con validación y rate limiting.

```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here..."
}
```

Features:
- Rate limiting (5 req/min por IP)
- Honeypot spam protection
- Input validation y sanitización
- Integración con Resend (comentada)

### Newsletter (`newsletter.ts`)

Suscripción a newsletter con múltiples providers.

```
POST /api/newsletter
Content-Type: application/json

{
  "email": "user@example.com",
  "provider": "mailchimp",
  "tags": ["blog", "updates"]
}
```

Providers soportados:
- Mailchimp
- ConvertKit
- Buttondown
- Custom/Database

### Search (`search.ts`)

Búsqueda server-side en Content Collections.

```
GET /api/search?q=astro&type=blog&limit=10&offset=0
```

Features:
- Búsqueda en múltiples colecciones
- Scoring por relevancia
- Highlighting de resultados
- Paginación

### OG Image (`og-image.ts`)

Generación dinámica de imágenes Open Graph.

```
GET /api/og/blog?title=My%20Post&description=...&author=John&date=2024-01-15
```

Features:
- Templates por tipo (blog, product, docs)
- Customizable
- Usa @vercel/og en Edge

## Configuración por Provider

### Resend (Email)

```bash
# .env
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=you@example.com
```

### Mailchimp

```bash
# .env
MAILCHIMP_API_KEY=xxxxx-us21
MAILCHIMP_LIST_ID=xxxxx
```

### ConvertKit

```bash
# .env
CONVERTKIT_API_KEY=xxxxx
CONVERTKIT_FORM_ID=12345
```

### Buttondown

```bash
# .env
BUTTONDOWN_API_KEY=xxxxx
```

## Patrón de Respuesta

Todos los endpoints siguen el mismo patrón:

```typescript
// Success
{
  "success": true,
  "message": "Operation completed",
  "data": { ... }
}

// Error
{
  "success": false,
  "error": "Error message",
  "errors": { // Validation errors
    "field": "Field error message"
  }
}
```

## Rate Limiting

Los endpoints incluyen rate limiting básico en memoria.
Para producción, usa Redis:

```typescript
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: import.meta.env.UPSTASH_URL,
  token: import.meta.env.UPSTASH_TOKEN,
});

async function checkRateLimit(ip: string): Promise<boolean> {
  const key = `ratelimit:${ip}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60); // 1 minute window
  }

  return count <= 5; // 5 requests per minute
}
```

## CORS

Los endpoints incluyen headers CORS básicos.
Para configuración más compleja:

```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': import.meta.env.SITE,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};
```

## Seguridad

### Input Sanitization

```typescript
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')      // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove JS URLs
    .slice(0, 5000);           // Limit length
}
```

### Honeypot Field

En tu formulario, añade un campo oculto:

```html
<input
  type="text"
  name="honeypot"
  style="display: none"
  tabindex="-1"
  autocomplete="off"
/>
```

Si el campo tiene valor, es probablemente un bot.

## Cliente de Ejemplo

```typescript
// lib/api.ts
export async function submitContact(data: ContactData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Request failed');
  }

  return result;
}

export async function subscribeNewsletter(email: string) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  return response.json();
}

export async function search(query: string, options = {}) {
  const params = new URLSearchParams({ q: query, ...options });
  const response = await fetch(`/api/search?${params}`);
  return response.json();
}
```

## Testing

```typescript
// tests/api/contact.test.ts
import { describe, it, expect } from 'vitest';

describe('Contact API', () => {
  it('validates required fields', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.errors).toBeDefined();
  });

  it('accepts valid submission', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message with enough characters.',
      }),
    });

    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
```
