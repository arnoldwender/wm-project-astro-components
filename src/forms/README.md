# Premium Form Components

GDPR/DSGVO compliant form components with premium UX and conversion optimization.

## Components

### Newsletter
High-converting newsletter signup with GDPR compliance.

```astro
---
import { Newsletter } from '@wendermedia/astro-components/forms';
---

<Newsletter
  title="Stay updated"
  description="Get the latest news delivered to your inbox."
  privacyPolicyUrl="/privacy"
  variant="card"
  showConsent={true}
  doubleOptIn={true}
  incentive={{
    title: 'Free eBook',
    description: 'Subscribe and get our guide to web development.',
    image: '/ebook-cover.png',
  }}
/>
```

**Variants:**
- `card` - Elevated card with shadow
- `inline` - Horizontal compact layout
- `stacked` - Vertical centered form
- `minimal` - Bare essentials
- `banner` - Sticky site-wide banner

**GDPR Features:**
- Explicit consent checkbox (not pre-checked)
- Double opt-in support
- Privacy policy link required
- Clear unsubscribe mention
- Honeypot spam protection

### Contact
Full-featured contact form with dynamic fields and sidebar.

```astro
---
import { Contact } from '@wendermedia/astro-components/forms';

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  {
    name: 'subject',
    label: 'Subject',
    type: 'select',
    options: [
      { value: 'general', label: 'General Inquiry' },
      { value: 'support', label: 'Technical Support' },
      { value: 'sales', label: 'Sales' },
    ],
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 5 },
];
---

<Contact
  title="Get in touch"
  description="We'd love to hear from you."
  fields={fields}
  privacyPolicyUrl="/privacy"
  variant="split"
  contactInfo={{
    email: 'hello@example.com',
    phone: '+49 123 456 789',
    address: 'Musterstraße 123\n12345 Berlin\nGermany',
    hours: 'Mon-Fri: 9:00-18:00\nSat-Sun: Closed',
  }}
  socialLinks={[
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/...', icon: '<svg>...</svg>' },
    { platform: 'Twitter', url: 'https://twitter.com/...', icon: '<svg>...</svg>' },
  ]}
/>
```

**Variants:**
- `default` - Centered single-column form
- `split` - Two-column with contact info sidebar
- `card` - Compact card design
- `minimal` - Bare form without container

**Field Types:**
- `text` - Single-line text input
- `email` - Email with validation
- `tel` - Phone number
- `textarea` - Multi-line text
- `select` - Dropdown selection
- `file` - File upload with size validation

### ContactForm (Legacy)
Original contact form component, kept for backward compatibility.

```astro
---
import { ContactForm } from '@wendermedia/astro-components/forms';
---

<ContactForm
  title="Contact Us"
  action="/api/contact"
/>
```

## GDPR/DSGVO Compliance

All forms implement:

### Required Elements
1. **Explicit Consent** - Unchecked checkbox for marketing consent
2. **Privacy Policy Link** - Clear link to privacy policy (required prop)
3. **Purpose Statement** - Clear description of data usage
4. **Unsubscribe Info** - Mention of easy unsubscribe option

### Best Practices
- No pre-ticked consent boxes
- Separate checkboxes for different purposes
- Double opt-in for newsletters (recommended in Germany)
- Data minimization (only collect necessary fields)
- Clear, concise language

### Consent Text Examples

```astro
<!-- Newsletter -->
<Newsletter
  consentText="I agree to receive newsletters and accept the"
  privacyPolicyUrl="/privacy"
/>

<!-- Contact Form -->
<Contact
  consentText="I agree to the processing of my data according to the"
  privacyPolicyUrl="/privacy"
/>
```

## Spam Protection

All forms include honeypot fields:

```html
<!-- Hidden honeypot field -->
<div class="hidden" aria-hidden="true">
  <input type="text" name="website" tabindex="-1" autocomplete="off" />
</div>
```

If `website` field is filled, submission is silently ignored (bot detected).

## Form Submission

### Client-side Handling

```javascript
// Forms submit via fetch() with JSON response handling
const response = await fetch(form.action, {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' },
});
```

### Server-side Example (Astro API Route)

```typescript
// src/pages/api/contact.ts
export async function POST({ request }) {
  const data = await request.formData();

  // Check honeypot
  if (data.get('website')) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  // Validate consent
  if (!data.get('consent')) {
    return new Response(JSON.stringify({ error: 'Consent required' }), { status: 400 });
  }

  // Process form...
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  // Send email, store in database, etc.

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
```

## Accessibility

All forms include:
- Proper `<label>` associations
- Required field indicators (`*`)
- Error state announcements
- Focus management on submit
- Keyboard navigation support
- Screen reader friendly

## Styling

Forms use Tailwind CSS classes. Customize via:

```astro
<Newsletter
  class="my-custom-styles"
  bgColor="bg-blue-900"
  textColor="light"
/>
```

## View Transitions

All forms reinitialize on `astro:page-load` for View Transitions support.

## Legal Notice

These components help implement GDPR compliance but do not constitute legal advice. Consult a legal professional for your specific requirements.

## Resources

- [GDPR Newsletter Compliance](https://gdprlocal.com/gdpr-newsletter-compliance/)
- [DSGVO Sign-Up Forms](https://www.mailerlite.com/blog/how-to-create-opt-in-forms-that-still-work-under-gdpr)
- [Newsletter Signup Best Practices](https://www.mailerlite.com/blog/optimize-email-signup-form)
