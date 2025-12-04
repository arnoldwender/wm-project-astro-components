/**
 * Testing Helpers - WenderMedia Astro Components
 *
 * Utilities for testing Astro components
 */

/**
 * Create a test element with HTML content
 */
export function createTestElement(html: string): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
  return container;
}

/**
 * Render component HTML string to DOM
 */
export function renderComponent(html: string): {
  container: HTMLElement;
  getByText: (text: string) => Element | null;
  getByRole: (role: string, options?: { name?: string }) => Element | null;
  getByTestId: (testId: string) => Element | null;
  getAllByRole: (role: string) => Element[];
  queryByAttribute: (attr: string, value: string) => Element | null;
} {
  const container = createTestElement(html);

  return {
    container,
    getByText: (text: string) => {
      const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        null
      );
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node.textContent?.includes(text)) {
          return node.parentElement;
        }
      }
      return null;
    },
    getByRole: (role: string, options?: { name?: string }) => {
      const elements = container.querySelectorAll(`[role="${role}"]`);
      if (options?.name) {
        return Array.from(elements).find(
          (el) =>
            el.getAttribute('aria-label') === options.name ||
            el.textContent?.includes(options.name)
        ) || null;
      }
      return elements[0] || null;
    },
    getByTestId: (testId: string) => {
      return container.querySelector(`[data-testid="${testId}"]`);
    },
    getAllByRole: (role: string) => {
      return Array.from(container.querySelectorAll(`[role="${role}"]`));
    },
    queryByAttribute: (attr: string, value: string) => {
      return container.querySelector(`[${attr}="${value}"]`);
    },
  };
}

/**
 * Mock Astro component props for testing
 */
export function mockAstroProps<T extends Record<string, unknown>>(
  defaults: T,
  overrides?: Partial<T>
): T {
  return { ...defaults, ...overrides };
}

/**
 * Simulate user events
 */
export const userEvent = {
  click: (element: Element) => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  },
  type: (element: HTMLInputElement, text: string) => {
    element.value = text;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  },
  focus: (element: HTMLElement) => {
    element.focus();
    element.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
  },
  blur: (element: HTMLElement) => {
    element.blur();
    element.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
  },
  keyDown: (element: Element, key: string, options?: KeyboardEventInit) => {
    element.dispatchEvent(
      new KeyboardEvent('keydown', { key, bubbles: true, ...options })
    );
  },
  keyUp: (element: Element, key: string, options?: KeyboardEventInit) => {
    element.dispatchEvent(
      new KeyboardEvent('keyup', { key, bubbles: true, ...options })
    );
  },
  hover: (element: Element) => {
    element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
  },
  unhover: (element: Element) => {
    element.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
  },
};

/**
 * Wait for element to appear in DOM
 */
export async function waitForElement(
  selector: string,
  container: Element = document.body,
  timeout = 1000
): Promise<Element> {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      const element = container.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}

/**
 * Wait for condition to be true
 */
export async function waitFor(
  condition: () => boolean,
  timeout = 1000
): Promise<void> {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      if (condition()) {
        resolve();
        return;
      }

      if (Date.now() - startTime > timeout) {
        reject(new Error(`Condition not met within ${timeout}ms`));
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}

/**
 * Mock fetch for API testing
 */
export function mockFetch(responses: Record<string, unknown>) {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (input: RequestInfo | URL) => {
    const url = typeof input === 'string' ? input : input.toString();

    for (const [pattern, response] of Object.entries(responses)) {
      if (url.includes(pattern)) {
        return new Response(JSON.stringify(response), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  };

  return () => {
    globalThis.fetch = originalFetch;
  };
}

/**
 * Create mock custom event
 */
export function createCustomEvent<T>(name: string, detail: T): CustomEvent<T> {
  return new CustomEvent(name, { detail, bubbles: true });
}

/**
 * Assert element has specific classes
 */
export function hasClasses(element: Element, ...classes: string[]): boolean {
  return classes.every((cls) => element.classList.contains(cls));
}

/**
 * Assert element has specific styles
 */
export function hasStyles(
  element: HTMLElement,
  styles: Record<string, string>
): boolean {
  const computed = getComputedStyle(element);
  return Object.entries(styles).every(
    ([prop, value]) => computed.getPropertyValue(prop) === value
  );
}
