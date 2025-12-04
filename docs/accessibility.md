# Accessibility Guide

This guide covers WCAG 2.1 AA compliance and BFSG (Barrierefreiheitsstärkungsgesetz) requirements.

## Overview

All @wendermedia/astro-components are built with accessibility as a core requirement:

- WCAG 2.1 AA compliant
- BFSG compliant (German Accessibility Strengthening Act)
- Keyboard navigable
- Screen reader friendly
- Focus management
- Color contrast compliant

## WCAG 2.1 AA Requirements

### Perceivable

#### 1.1 Text Alternatives

All images have `alt` attributes:

```astro
<OptimizedImage
  src="/hero.jpg"
  alt="Team working in modern office space"
/>
```

For decorative images, use empty alt:

```astro
<img src="/decoration.svg" alt="" role="presentation" />
```

#### 1.3 Adaptable

Use semantic HTML structure:

```astro
<main id="main-content">
  <article>
    <h1>Article Title</h1>
    <section>
      <h2>Section Heading</h2>
      <p>Content...</p>
    </section>
  </article>
</main>
```

#### 1.4 Distinguishable

Color contrast requirements:
- Normal text: 4.5:1 minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI components: 3:1 minimum

Our design tokens meet these requirements:

```css
/* Meets 4.5:1 on white background */
--color-text-primary: #1e293b;

/* Meets 3:1 for large text */
--color-text-secondary: #475569;
```

### Operable

#### 2.1 Keyboard Accessible

All interactive elements are keyboard accessible:

```astro
<!-- Buttons -->
<button type="button" onclick="handleClick()">
  Click me
</button>

<!-- Links -->
<a href="/page">Go to page</a>

<!-- Custom interactive elements -->
<div
  role="button"
  tabindex="0"
  onkeydown="handleKeyDown(event)"
  onclick="handleClick()"
>
  Custom button
</div>
```

#### 2.4 Navigable

Skip to content link:

```astro
<SkipToContent targetId="main-content" />

<header>...</header>

<main id="main-content">
  <!-- Main content here -->
</main>
```

Proper focus management in modals:

```astro
<Modal id="dialog" title="Dialog">
  <!-- Focus is trapped within modal -->
  <input type="text" />
  <button type="submit">Submit</button>
</Modal>
```

### Understandable

#### 3.1 Readable

Set the page language:

```astro
<html lang="de">
```

For multilingual content:

```astro
<p>This is English. <span lang="de">Das ist Deutsch.</span></p>
```

#### 3.2 Predictable

Consistent navigation across pages:

```astro
<!-- Same navigation on all pages -->
<Header
  navItems={siteNavigation}
  siteName={siteName}
/>
```

#### 3.3 Input Assistance

Form validation with clear error messages:

```astro
<ContactForm
  action="/api/contact"
  fields={[
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail-Adresse',
      required: true,
      errorMessage: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    },
  ]}
/>
```

### Robust

#### 4.1 Compatible

Valid HTML and ARIA usage:

```astro
<!-- Correct ARIA usage -->
<nav aria-label="Hauptnavigation">
  <ul role="list">
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Expanded/collapsed state -->
<button
  aria-expanded="false"
  aria-controls="menu"
>
  Menu
</button>
<div id="menu" hidden>...</div>
```

## BFSG Compliance

The BFSG (effective June 28, 2025) requires digital accessibility for:

- E-commerce websites
- Banking services
- Transportation services
- Electronic communications

### Required Features

#### 1. Font Resizing (BFSG §3)

```astro
<FontResizer
  label="Textgröße:"
  minSize={75}
  maxSize={200}
  step={25}
/>
```

Implementation stores preference:

```ts
// Automatically saved to localStorage
localStorage.getItem('font-size'); // "125"
```

#### 2. Color Contrast Mode

```astro
<ThemeToggle
  defaultTheme="system"
  labels={{
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
  }}
/>
```

#### 3. Keyboard Navigation

All components support full keyboard navigation:

| Component | Keys |
|-----------|------|
| Accordion | Enter/Space to toggle, Arrow keys to navigate |
| Tabs | Arrow keys to switch, Enter/Space to activate |
| Modal | Escape to close, Tab to cycle focus |
| Menu | Arrow keys to navigate, Enter to select |

#### 4. Screen Reader Announcements

```astro
<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

<!-- Cart updates -->
<Cart
  announceChanges={true}
  announcementPrefix="Warenkorb aktualisiert:"
/>
```

## Testing Accessibility

### Automated Testing

```bash
# Run accessibility tests
npm run test:a11y
```

Using the testing utilities:

```ts
import {
  runA11yAudit,
  expectNoA11yViolations,
  getViolationsByImpact,
} from '@wendermedia/astro-components/testing';

describe('Component A11y', () => {
  it('should have no violations', async () => {
    const element = document.querySelector('.component');
    await expectNoA11yViolations(element);
  });

  it('should have no critical violations', async () => {
    const results = await runA11yAudit(document.body);
    const critical = getViolationsByImpact(results, 'critical');
    expect(critical).toHaveLength(0);
  });
});
```

### Manual Testing Checklist

#### Keyboard Navigation

- [ ] All interactive elements focusable with Tab
- [ ] Focus order matches visual order
- [ ] Focus visible on all elements
- [ ] No keyboard traps
- [ ] Escape closes modals/dropdowns

#### Screen Reader

- [ ] Page has proper heading hierarchy (h1 → h2 → h3)
- [ ] Images have descriptive alt text
- [ ] Form fields have associated labels
- [ ] Error messages announced
- [ ] Dynamic content changes announced

#### Visual

- [ ] Text readable at 200% zoom
- [ ] Content reflows at 320px width
- [ ] Color not sole means of conveying information
- [ ] Focus indicators visible
- [ ] Animations respect prefers-reduced-motion

### Browser Tools

1. **Chrome DevTools**
   - Lighthouse accessibility audit
   - Accessibility tree inspector

2. **Firefox**
   - Accessibility inspector
   - High contrast mode testing

3. **Screen Readers**
   - NVDA (Windows)
   - VoiceOver (macOS/iOS)
   - TalkBack (Android)

## Component-Specific Guidelines

### Forms

```astro
<form>
  <!-- Always associate labels -->
  <label for="email">E-Mail</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-describedby="email-hint email-error"
  />
  <span id="email-hint">Ihre geschäftliche E-Mail-Adresse</span>
  <span id="email-error" role="alert" hidden>
    Bitte geben Sie eine gültige E-Mail ein
  </span>
</form>
```

### Images

```astro
<!-- Informative image -->
<img
  src="/chart.png"
  alt="Sales increased 25% from Q1 to Q2 2025"
/>

<!-- Complex image with long description -->
<figure>
  <img
    src="/infographic.png"
    alt="Company structure overview"
    aria-describedby="infographic-desc"
  />
  <figcaption id="infographic-desc">
    Detailed description of the infographic...
  </figcaption>
</figure>

<!-- Decorative image -->
<img src="/pattern.svg" alt="" role="presentation" />
```

### Videos

```astro
<VideoPlayer
  provider="youtube"
  videoId="abc123"
  title="Product Demo Video"
  requireConsent={true}
>
  <!-- Provide transcript -->
  <details slot="transcript">
    <summary>Video Transcript</summary>
    <p>Full transcript of the video...</p>
  </details>
</VideoPlayer>
```

### Tables

```astro
<table>
  <caption>Product Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Basic</th>
      <th scope="col">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Storage</th>
      <td>10 GB</td>
      <td>100 GB</td>
    </tr>
  </tbody>
</table>
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [BFSG Information (German)](https://www.bmas.de/DE/Soziales/Teilhabe-und-Inklusion/Barrierefreiheit/barrierefreiheit.html)
- [axe-core Rules](https://dequeuniversity.com/rules/axe/4.8)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
