# Premium Accessibility Components

WCAG 2.2 compliant accessibility components for inclusive web experiences.

## Components Overview

| Component | Description | WCAG Criteria |
|-----------|-------------|---------------|
| **AccessibilityToolbar** | Full widget with all a11y features | Multiple |
| **SkipLinks** | Skip navigation for keyboard users | 2.4.1 |
| **FocusTrap** | Trap focus in modals/dialogs | 2.4.3 |
| **LanguageSwitcher** | i18n language selector | 3.1.2 |
| **TextToSpeech** | Web Speech API TTS controls | 1.1.1, 1.2 |
| **ScreenReaderOnly** | Visually hidden content | 1.3.1 |
| **LiveRegion** | ARIA live announcements | 4.1.3 |
| **ReducedMotion** | Motion preference controls | 2.3.3 |

## AccessibilityToolbar

Comprehensive accessibility widget with all features in one panel.

```astro
---
import { AccessibilityToolbar } from '@wendermedia/astro-components/accessibility';
---

<AccessibilityToolbar
  position="right"
  features={{
    fontSize: true,
    contrast: true,
    dyslexiaFont: true,
    letterSpacing: true,
    lineHeight: true,
    readingGuide: true,
    highlightLinks: true,
    highlightHeadings: true,
    bigCursor: true,
    pauseAnimations: true,
    textToSpeech: true,
    focusHighlight: true,
  }}
  labels={{
    title: 'Accessibility Settings',
    reset: 'Reset All',
    fontSize: 'Font Size',
    // ... customize labels for i18n
  }}
/>
```

**Features:**
- Font size: 50%-200%
- Contrast: Normal, High, Dark, Invert
- Dyslexia-friendly font (OpenDyslexic)
- Letter spacing adjustment
- Line height adjustment
- Reading guide (follows cursor)
- Link highlighting
- Heading highlighting
- Big cursor
- Pause animations
- Text-to-speech on selection
- Enhanced focus indicator

**Keyboard Shortcut:** `Alt + A` to toggle panel

## SkipLinks

WCAG 2.4.1 compliant skip navigation.

```astro
---
import { SkipLinks } from '@wendermedia/astro-components/accessibility';
---

<SkipLinks
  links={[
    { href: '#main-content', label: 'Skip to main content' },
    { href: '#navigation', label: 'Skip to navigation' },
    { href: '#search', label: 'Skip to search' },
    { href: '#footer', label: 'Skip to footer' },
  ]}
/>

<!-- Or use convenience props -->
<SkipLinks
  mainContentId="main"
  navigationId="nav"
  searchId="search"
  footerId="footer"
/>
```

**Note:** Skip links are invisible until focused (Tab key).

## FocusTrap

Traps keyboard focus within containers (modals, dialogs).

```astro
---
import { FocusTrap } from '@wendermedia/astro-components/accessibility';
---

<FocusTrap active={isModalOpen} returnFocusOnDeactivate={true}>
  <div class="modal">
    <h2>Modal Title</h2>
    <p>Modal content...</p>
    <button>Close</button>
  </div>
</FocusTrap>
```

**JavaScript API:**
```javascript
// Activate
element.dispatchEvent(new CustomEvent('focustrap:activate'));

// Deactivate
element.dispatchEvent(new CustomEvent('focustrap:deactivate'));

// Listen for escape
element.addEventListener('focustrap:escape', () => {
  // Handle escape key
});
```

## LanguageSwitcher

Accessible i18n language selector with multiple display modes.

```astro
---
import { LanguageSwitcher } from '@wendermedia/astro-components/accessibility';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', url: '/en' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', url: '/de' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', url: '/es' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', url: '/ja', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', url: '/ar', dir: 'rtl' },
];
---

<!-- Dropdown (default) -->
<LanguageSwitcher
  languages={languages}
  currentLanguage="en"
  mode="dropdown"
  showFlag={true}
  showNativeName={true}
/>

<!-- Inline -->
<LanguageSwitcher
  languages={languages}
  currentLanguage="en"
  mode="inline"
/>

<!-- Flags only -->
<LanguageSwitcher
  languages={languages}
  currentLanguage="en"
  mode="flags"
/>

<!-- Native select -->
<LanguageSwitcher
  languages={languages}
  currentLanguage="en"
  mode="select"
/>
```

**Best Practices:**
- Languages shown in their native names
- `lang` and `hreflang` attributes on links
- RTL support with `dir` attribute
- No auto-redirect based on IP

## TextToSpeech

Web Speech API powered text-to-speech controls.

```astro
---
import { TextToSpeech } from '@wendermedia/astro-components/accessibility';
---

<!-- Full controls -->
<TextToSpeech
  variant="full"
  targetSelector="main"
  autoHighlight={true}
  showVoiceSelect={true}
  showRateControl={true}
/>

<!-- Compact -->
<TextToSpeech variant="compact" />

<!-- Floating button -->
<TextToSpeech variant="floating" position="bottom" />
```

**Keyboard Shortcut:** `Alt + S` to toggle play/pause

**Features:**
- Play/Pause/Stop controls
- Voice selection (grouped by language)
- Speed adjustment (0.5x - 2x)
- Pitch adjustment
- Read selected text or full page
- Auto-detects page language

## ScreenReaderOnly

Visually hide content while keeping it accessible.

```astro
---
import { ScreenReaderOnly } from '@wendermedia/astro-components/accessibility';
---

<!-- Icon button with label -->
<button>
  <svg>...</svg>
  <ScreenReaderOnly>Close menu</ScreenReaderOnly>
</button>

<!-- Heading for screen readers -->
<ScreenReaderOnly as="h2">
  Search Results
</ScreenReaderOnly>

<!-- Focusable (becomes visible on focus) -->
<ScreenReaderOnly as="a" focusable href="#main">
  Skip to main content
</ScreenReaderOnly>
```

## LiveRegion

Announce dynamic content changes to screen readers.

```astro
---
import { LiveRegion } from '@wendermedia/astro-components/accessibility';
---

<!-- Status updates (polite) -->
<LiveRegion mode="polite">
  <slot />
</LiveRegion>

<!-- Alerts (assertive) -->
<LiveRegion mode="assertive" role="alert">
  Error: Please check your input
</LiveRegion>

<!-- Auto-clear after delay -->
<LiveRegion clearDelay={5000}>
  Saved successfully!
</LiveRegion>
```

**JavaScript API:**
```javascript
// Announce to screen readers
window.announceToScreenReader('Item added to cart', { priority: 'polite' });
window.announceToScreenReader('Error: Invalid email', { priority: 'assertive' });
```

## ReducedMotion

Respect and control motion preferences.

```astro
---
import { ReducedMotion } from '@wendermedia/astro-components/accessibility';
---

<!-- Just inject styles (no toggle) -->
<ReducedMotion injectStyles={true} />

<!-- With user toggle -->
<ReducedMotion
  showToggle={true}
  labels={{
    enable: 'Enable animations',
    disable: 'Disable animations',
  }}
/>
```

**CSS Custom Properties:**
```css
.my-animation {
  /* Will be 0.01ms when reduced motion */
  transition: transform var(--motion-duration, 0.3s);
}

/* Conditional styles */
.my-element {
  /* --motion-ok is 0 (reduced) or 1 (normal) */
  opacity: calc(0.5 + (0.5 * var(--motion-ok)));
}
```

**JavaScript API:**
```javascript
// Check preference
if (window.motionPreference.isReduced()) {
  // Use simpler animations
}

// Toggle
window.motionPreference.toggle();

// Set explicitly
window.motionPreference.setReduced(true);

// Reset to system default
window.motionPreference.reset();

// Listen for changes
document.addEventListener('motionpreference:change', (e) => {
  console.log('Motion preference:', e.detail.reduced);
});
```

## WCAG 2.2 Compliance

These components help meet:

| Criteria | Level | Description |
|----------|-------|-------------|
| 1.1.1 | A | Non-text Content |
| 1.3.1 | A | Info and Relationships |
| 1.4.3 | AA | Contrast (Minimum) |
| 1.4.4 | AA | Resize text |
| 1.4.10 | AA | Reflow |
| 1.4.12 | AA | Text Spacing |
| 2.1.1 | A | Keyboard |
| 2.4.1 | A | Bypass Blocks |
| 2.4.3 | A | Focus Order |
| 2.4.7 | AA | Focus Visible |
| 2.4.11 | AA | Focus Appearance (2.2) |
| 2.5.5 | AAA | Target Size |
| 2.5.7 | AA | Dragging Movements (2.2) |
| 3.1.2 | AA | Language of Parts |
| 3.2.1 | A | On Focus |
| 4.1.3 | AA | Status Messages |

## Testing Tools

Validate your accessibility with:
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [VoiceOver (macOS)](https://www.apple.com/accessibility/vision/)

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [A11y Project](https://www.a11yproject.com/)
- [Accessible Language Pickers](https://terrillthompson.com/759)
- [Web Accessibility Best Practices 2025](https://www.broworks.net/blog/web-accessibility-best-practices-2025-guide)

## Important Note

These components are **tools to enhance accessibility**, not replacements for building accessibility into your underlying HTML, navigation, and design. Genuine compliance requires accessibility to be considered from the start of development.
