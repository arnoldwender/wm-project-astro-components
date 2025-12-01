# SaaS Marketing Bundle

Stack para landing pages de SaaS y marketing sites.

## Características

- ✅ React para interactividad
- ✅ SSR híbrido (forms, auth)
- ✅ MDX para changelog/blog
- ✅ Vercel analytics integrado
- ✅ Tailwind para UI rápida

## Estructura Típica SaaS

```
src/
├── pages/
│   ├── index.astro          # Landing principal
│   ├── features.astro       # Features detalladas
│   ├── pricing.astro        # Planes y precios
│   ├── about.astro          # About us
│   ├── blog/                # Blog / Changelog
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── docs/                # Documentación
│   ├── login.astro          # → Redirect a app
│   ├── signup.astro         # → Redirect a app
│   └── api/
│       ├── waitlist.ts      # Waitlist signup
│       └── contact.ts       # Contact form
├── components/
│   ├── Hero.astro
│   ├── Features.astro
│   ├── Pricing.astro        # Con React para toggle
│   ├── Testimonials.astro
│   ├── FAQ.astro
│   ├── CTA.astro
│   └── react/
│       ├── PricingToggle.tsx
│       ├── WaitlistForm.tsx
│       └── ContactForm.tsx
└── content/
    ├── blog/
    ├── changelog/
    └── docs/
```

## Componentes Clave

### Pricing Toggle (React Island)

```tsx
// src/components/react/PricingToggle.tsx
import { useState } from 'react';

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

export default function PricingToggle({ plans }: { plans: Plan[] }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <div className="toggle">
        <button onClick={() => setIsYearly(false)}>Monthly</button>
        <button onClick={() => setIsYearly(true)}>
          Yearly (Save 20%)
        </button>
      </div>

      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.name} className="plan-card">
            <h3>{plan.name}</h3>
            <p className="price">
              €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span>/{isYearly ? 'year' : 'month'}</span>
            </p>
            <ul>
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
```

Uso en Astro:

```astro
---
import PricingToggle from '../components/react/PricingToggle';

const plans = [
  { name: 'Starter', monthlyPrice: 9, yearlyPrice: 86, features: [...] },
  { name: 'Pro', monthlyPrice: 29, yearlyPrice: 278, features: [...] },
];
---

<PricingToggle plans={plans} client:visible />
```

### Waitlist Form

```tsx
// src/components/react/WaitlistForm.tsx
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'success' && <p>Thanks! You're on the list.</p>}
      {status === 'error' && <p>Something went wrong. Try again.</p>}
    </form>
  );
}
```

### Waitlist API

```typescript
// src/pages/api/waitlist.ts
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  // Validar email
  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });
  }

  // Guardar en tu servicio (Mailchimp, ConvertKit, DB, etc.)
  // await addToWaitlist(email);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
};
```

## Changelog con MDX

```mdx
---
title: "v2.1.0 - Dark Mode"
date: 2024-01-15
---

import { Badge } from '../components/Badge';

## What's New

<Badge variant="new">New Feature</Badge>

- **Dark Mode** - Finally! Toggle between light and dark themes.
- **Improved Performance** - 40% faster page loads.

<Badge variant="fix">Bug Fix</Badge>

- Fixed issue with login on Safari.

---

[Full release notes →](/releases/v2.1.0)
```

## Auth Redirects

```astro
---
// src/pages/login.astro
return Astro.redirect('https://app.your-saas.com/login');
---
```

O con SSR para tokens:

```astro
---
// src/pages/login.astro
export const prerender = false;

const token = Astro.cookies.get('auth_token');
if (token) {
  return Astro.redirect('https://app.your-saas.com/dashboard');
}
---

<!-- Show login form or redirect to auth provider -->
```
