# Testing Guide

Complete guide to testing components with Vitest and accessibility testing with axe-core.

## Setup

Testing tools are pre-configured in the package:

```bash
# Run all tests
npm run test

# Run with UI
npm run test:ui

# Run with coverage
npm run test:coverage

# Run accessibility tests only
npm run test:a11y
```

## Configuration

### Vitest Config

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: ['./testing/setup.ts'],
  },
});
```

### Accessibility Config

```ts
// vitest.a11y.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.a11y.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    setupFiles: ['./testing/setup.ts', './testing/a11y-setup.ts'],
  },
});
```

## Writing Tests

### Basic Component Test

```ts
import { describe, it, expect, beforeEach } from 'vitest';
import { createTestElement, userEvent } from '@wendermedia/astro-components/testing';

describe('Button Component', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = createTestElement('button', {
      className: 'btn',
      textContent: 'Click me',
    }) as HTMLButtonElement;
  });

  it('should render with correct text', () => {
    expect(button.textContent).toBe('Click me');
  });

  it('should have correct class', () => {
    expect(button.classList.contains('btn')).toBe(true);
  });

  it('should handle click events', async () => {
    let clicked = false;
    button.addEventListener('click', () => { clicked = true; });

    await userEvent.click(button);

    expect(clicked).toBe(true);
  });
});
```

### Testing E-commerce Functions

```ts
import { describe, it, expect, beforeEach } from 'vitest';
import {
  addToCart,
  getCart,
  getWishlist,
  toggleWishlistItem,
  formatPrice,
} from '@wendermedia/astro-components/ecommerce';

describe('Cart Functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add item to cart', () => {
    const listener = vi.fn();
    window.addEventListener('cart:add', listener);

    addToCart({
      id: 'test-1',
      name: 'Test Product',
      price: 29.99,
      image: '/test.jpg',
    });

    expect(listener).toHaveBeenCalled();
    window.removeEventListener('cart:add', listener);
  });

  it('should return empty cart by default', () => {
    const cart = getCart();
    expect(cart).toEqual({});
  });

  it('should format price correctly', () => {
    expect(formatPrice(29.99, 'EUR', 'de-DE')).toContain('29,99');
    expect(formatPrice(29.99, 'USD', 'en-US')).toContain('29.99');
  });
});

describe('Wishlist Functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should toggle wishlist item', () => {
    const item = { id: 'test-1', name: 'Test', price: 10, image: '' };

    const added = toggleWishlistItem(item);
    expect(added).toBe(true);
    expect(getWishlist()).toHaveLength(1);

    const removed = toggleWishlistItem(item);
    expect(removed).toBe(false);
    expect(getWishlist()).toHaveLength(0);
  });
});
```

### Testing Async Operations

```ts
import { describe, it, expect } from 'vitest';
import { waitFor, mockFetch } from '@wendermedia/astro-components/testing';

describe('API Functions', () => {
  it('should fetch data', async () => {
    const mockData = { id: 1, name: 'Test' };
    const restore = mockFetch(mockData);

    const response = await fetch('/api/test');
    const data = await response.json();

    expect(data).toEqual(mockData);
    restore();
  });

  it('should wait for element', async () => {
    // Element will be added after 100ms
    setTimeout(() => {
      const el = document.createElement('div');
      el.id = 'delayed';
      document.body.appendChild(el);
    }, 100);

    const element = await waitFor(() => document.getElementById('delayed'));
    expect(element).toBeTruthy();
  });
});
```

## Accessibility Testing

### Basic A11y Test

```ts
import { describe, it, expect } from 'vitest';
import {
  runA11yAudit,
  expectNoA11yViolations,
} from '@wendermedia/astro-components/testing';

describe('Component Accessibility', () => {
  it('should have no accessibility violations', async () => {
    document.body.innerHTML = `
      <button type="button">Click me</button>
    `;

    await expectNoA11yViolations(document.body);
  });

  it('should report violations', async () => {
    document.body.innerHTML = `
      <img src="/image.jpg" />
    `; // Missing alt attribute

    const results = await runA11yAudit(document.body);
    expect(results.violations.length).toBeGreaterThan(0);
  });
});
```

### Using Custom Matchers

```ts
import { describe, it, expect } from 'vitest';
import '@wendermedia/astro-components/testing/matchers';

describe('Accessibility Matchers', () => {
  it('should be focusable', () => {
    const button = document.createElement('button');
    expect(button).toBeFocusable();
  });

  it('should have accessible name', () => {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    expect(button).toHaveAccessibleName('Submit');
  });

  it('should have valid ARIA', () => {
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Main navigation');
    expect(nav).toHaveValidAria();
  });

  it('should meet contrast requirements', () => {
    expect(['#1e293b', '#ffffff']).toMeetContrastAA();
  });

  it('should have proper heading structure', () => {
    document.body.innerHTML = `
      <h1>Title</h1>
      <h2>Section</h2>
      <h3>Subsection</h3>
    `;
    expect(document.body).toHaveProperHeadingStructure();
  });

  it('should be keyboard navigable', () => {
    document.body.innerHTML = `
      <button>First</button>
      <a href="#">Second</a>
      <input type="text" />
    `;
    expect(document.body).toBeKeyboardNavigable();
  });
});
```

### Testing Focus Management

```ts
import { describe, it, expect } from 'vitest';
import {
  getFocusableElements,
  testKeyboardOrder,
} from '@wendermedia/astro-components/testing';

describe('Focus Management', () => {
  it('should have correct focus order', () => {
    document.body.innerHTML = `
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    `;

    const focusable = getFocusableElements(document.body);
    expect(focusable).toHaveLength(3);

    const orderCorrect = testKeyboardOrder(document.body);
    expect(orderCorrect).toBe(true);
  });

  it('should trap focus in modal', () => {
    document.body.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="close">Close</button>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    `;

    const modal = document.querySelector('.modal')!;
    const focusable = getFocusableElements(modal);

    expect(focusable).toHaveLength(3);
    expect(focusable[0].classList.contains('close')).toBe(true);
  });
});
```

### Testing Color Contrast

```ts
import { describe, it, expect } from 'vitest';
import {
  getContrastRatio,
  meetsContrastAA,
  meetsContrastAAA,
} from '@wendermedia/astro-components/testing';

describe('Color Contrast', () => {
  it('should calculate contrast ratio', () => {
    const ratio = getContrastRatio('#000000', '#ffffff');
    expect(ratio).toBe(21); // Maximum contrast
  });

  it('should validate AA compliance', () => {
    // Text color on white background
    expect(meetsContrastAA('#1e293b', '#ffffff')).toBe(true);  // Passes
    expect(meetsContrastAA('#94a3b8', '#ffffff')).toBe(false); // Fails
  });

  it('should validate AAA compliance', () => {
    expect(meetsContrastAAA('#000000', '#ffffff')).toBe(true);
    expect(meetsContrastAAA('#475569', '#ffffff')).toBe(false);
  });
});
```

## Test Utilities

### Creating Test Elements

```ts
import { createTestElement, renderComponent } from '@wendermedia/astro-components/testing';

// Create single element
const button = createTestElement('button', {
  className: 'btn btn-primary',
  textContent: 'Click',
  'data-action': 'submit',
});

// Render HTML string
const { container, getByText, getByRole } = renderComponent(`
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
    <button>Action</button>
  </div>
`);

const title = getByText('Title');
const button = getByRole('button');
```

### Simulating User Events

```ts
import { userEvent } from '@wendermedia/astro-components/testing';

// Click
await userEvent.click(button);

// Type text
await userEvent.type(input, 'Hello World');

// Focus/blur
await userEvent.focus(input);
await userEvent.blur(input);

// Keyboard events
await userEvent.keyDown(element, { key: 'Enter' });
await userEvent.keyUp(element, { key: 'Enter' });

// Hover
await userEvent.hover(element);
```

### Mocking APIs

```ts
import { mockFetch } from '@wendermedia/astro-components/testing';

// Mock successful response
const restore = mockFetch({ success: true });
// ... make fetch calls
restore();

// Mock with custom status
const restore = mockFetch({ error: 'Not found' }, { status: 404 });

// Mock with multiple responses
let callCount = 0;
global.fetch = vi.fn(() => {
  callCount++;
  if (callCount === 1) {
    return Promise.resolve({ ok: true, json: () => ({ page: 1 }) });
  }
  return Promise.resolve({ ok: true, json: () => ({ page: 2 }) });
});
```

## Coverage Reports

Generate coverage reports:

```bash
npm run test:coverage
```

View HTML report:

```bash
open coverage/index.html
```

### Coverage Thresholds

Configure in `vitest.config.ts`:

```ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run test:coverage

      - uses: codecov/codecov-action@v4
        with:
          files: ./coverage/coverage-final.json
```

### Pre-commit Hook

```json
// package.json
{
  "scripts": {
    "test:pre-commit": "vitest run --changed"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["vitest related --run"]
  }
}
```

## Best Practices

### 1. Test User Behavior

```ts
// Good: Test what users see and do
it('should show error message when form is invalid', async () => {
  await userEvent.click(submitButton);
  expect(getByText('Email is required')).toBeInTheDocument();
});

// Avoid: Testing implementation details
it('should set isValid to false', () => {
  expect(component.isValid).toBe(false);
});
```

### 2. Use Descriptive Names

```ts
// Good
describe('ProductCard', () => {
  it('should add product to cart when Add to Cart button is clicked', () => {});
  it('should toggle wishlist status when heart icon is clicked', () => {});
});

// Avoid
describe('ProductCard', () => {
  it('should work', () => {});
  it('test 1', () => {});
});
```

### 3. Isolate Tests

```ts
// Good: Each test is independent
beforeEach(() => {
  localStorage.clear();
  document.body.innerHTML = '';
});

// Avoid: Tests depending on each other
it('should add item', () => { /* adds item */ });
it('should have item', () => { /* expects item from previous test */ });
```

### 4. Test Accessibility First

```ts
describe('Form', () => {
  it('should have no accessibility violations', async () => {
    await expectNoA11yViolations(form);
  });

  it('should be keyboard navigable', () => {
    expect(form).toBeKeyboardNavigable();
  });

  // Then test functionality
  it('should submit on Enter key', async () => {});
});
```
