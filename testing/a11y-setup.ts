/**
 * Accessibility Testing Setup - WenderMedia Astro Components
 *
 * axe-core integration for automated a11y testing
 */

import axe, { type AxeResults, type Result } from 'axe-core';

// Configure axe-core with German locale and WCAG 2.1 AA + BFSG rules
axe.configure({
  locale: 'de',
  rules: [
    // WCAG 2.1 AA rules
    { id: 'color-contrast', enabled: true },
    { id: 'valid-lang', enabled: true },
    { id: 'html-has-lang', enabled: true },
    { id: 'document-title', enabled: true },
    { id: 'meta-viewport', enabled: true },
    { id: 'landmark-one-main', enabled: true },
    { id: 'page-has-heading-one', enabled: true },
    { id: 'heading-order', enabled: true },
    { id: 'link-name', enabled: true },
    { id: 'button-name', enabled: true },
    { id: 'image-alt', enabled: true },
    { id: 'label', enabled: true },
    { id: 'aria-roles', enabled: true },
    { id: 'aria-valid-attr', enabled: true },
    { id: 'aria-valid-attr-value', enabled: true },
    { id: 'focus-visible', enabled: true },
    { id: 'keyboard', enabled: true },
    // Additional BFSG-relevant rules
    { id: 'bypass', enabled: true },
    { id: 'skip-link', enabled: true },
    { id: 'tabindex', enabled: true },
  ],
});

/**
 * Run axe-core accessibility audit on an element
 */
export async function runA11yAudit(
  element: Element | Document = document,
  options?: axe.RunOptions
): Promise<AxeResults> {
  return axe.run(element, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
    },
    ...options,
  });
}

/**
 * Format a11y violations for test output
 */
export function formatViolations(violations: Result[]): string {
  if (violations.length === 0) return 'No accessibility violations found';

  return violations
    .map((violation) => {
      const nodes = violation.nodes
        .map((node) => `  - ${node.html}\n    ${node.failureSummary}`)
        .join('\n');

      return `
${violation.impact?.toUpperCase()} - ${violation.id}
${violation.description}
Help: ${violation.helpUrl}
Affected elements:
${nodes}`;
    })
    .join('\n\n');
}

/**
 * Assert no a11y violations
 */
export async function expectNoA11yViolations(
  element: Element | Document = document,
  options?: axe.RunOptions
): Promise<void> {
  const results = await runA11yAudit(element, options);

  if (results.violations.length > 0) {
    throw new Error(
      `Accessibility violations found:\n${formatViolations(results.violations)}`
    );
  }
}

/**
 * Get a11y violation count by impact level
 */
export function getViolationsByImpact(violations: Result[]): Record<string, number> {
  return violations.reduce(
    (acc, v) => {
      const impact = v.impact || 'unknown';
      acc[impact] = (acc[impact] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
}

/**
 * Check if element is focusable
 */
export function isFocusable(element: Element): boolean {
  if (!(element instanceof HTMLElement)) return false;

  const tabIndex = element.tabIndex;
  if (tabIndex < 0) return false;

  const tagName = element.tagName.toLowerCase();
  const focusableTags = ['a', 'button', 'input', 'select', 'textarea'];

  if (focusableTags.includes(tagName)) {
    if (tagName === 'a') {
      return element.hasAttribute('href');
    }
    return !(element as HTMLInputElement).disabled;
  }

  return tabIndex >= 0;
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: Element): HTMLElement[] {
  const selector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector));
}

/**
 * Test keyboard navigation order
 */
export function testKeyboardOrder(container: Element): HTMLElement[] {
  const focusable = getFocusableElements(container);
  return focusable.sort((a, b) => {
    const aIndex = a.tabIndex || 0;
    const bIndex = b.tabIndex || 0;
    if (aIndex !== bIndex) return aIndex - bIndex;
    // DOM order for same tabIndex
    return 0;
  });
}

/**
 * Check color contrast ratio
 */
export function getContrastRatio(foreground: string, background: string): number {
  const getLuminance = (hex: string): number => {
    const rgb = hex
      .replace(/^#/, '')
      .match(/.{2}/g)!
      .map((x) => parseInt(x, 16) / 255);

    const [r, g, b] = rgb.map((c) =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
 */
export function meetsContrastAA(
  foreground: string,
  background: string,
  isLargeText = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= (isLargeText ? 3 : 4.5);
}

/**
 * Check if contrast meets WCAG AAA (7:1 for normal text, 4.5:1 for large text)
 */
export function meetsContrastAAA(
  foreground: string,
  background: string,
  isLargeText = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= (isLargeText ? 4.5 : 7);
}
