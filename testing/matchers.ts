/**
 * Custom Test Matchers - WenderMedia Astro Components
 *
 * Vitest matchers for accessibility and component testing
 */

import { expect } from 'vitest';
import {
  runA11yAudit,
  isFocusable,
  meetsContrastAA,
  meetsContrastAAA,
  getFocusableElements,
} from './a11y-setup';

/**
 * Custom accessibility matchers for Vitest
 */
export const a11yMatchers = {
  /**
   * Check if element has no accessibility violations
   */
  toHaveNoA11yViolations: async (element: Element | Document) => {
    const results = await runA11yAudit(element);
    const pass = results.violations.length === 0;

    return {
      pass,
      message: () =>
        pass
          ? 'Expected element to have accessibility violations'
          : `Found ${results.violations.length} accessibility violation(s):\n${results.violations.map((v) => `- ${v.id}: ${v.description}`).join('\n')}`,
    };
  },

  /**
   * Check if element is focusable
   */
  toBeFocusable: (element: Element) => {
    const pass = isFocusable(element);

    return {
      pass,
      message: () =>
        pass
          ? 'Expected element not to be focusable'
          : 'Expected element to be focusable',
    };
  },

  /**
   * Check if element has valid aria attributes
   */
  toHaveValidAria: (element: Element) => {
    const ariaAttrs = Array.from(element.attributes).filter((attr) =>
      attr.name.startsWith('aria-')
    );

    const validAriaAttributes = [
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'aria-hidden',
      'aria-expanded',
      'aria-pressed',
      'aria-selected',
      'aria-disabled',
      'aria-checked',
      'aria-current',
      'aria-haspopup',
      'aria-controls',
      'aria-owns',
      'aria-live',
      'aria-atomic',
      'aria-busy',
      'aria-relevant',
      'aria-valuenow',
      'aria-valuemin',
      'aria-valuemax',
      'aria-valuetext',
      'aria-modal',
      'aria-required',
      'aria-invalid',
      'aria-errormessage',
      'aria-autocomplete',
      'aria-multiselectable',
      'aria-readonly',
      'aria-sort',
      'aria-colcount',
      'aria-colindex',
      'aria-colspan',
      'aria-rowcount',
      'aria-rowindex',
      'aria-rowspan',
      'aria-setsize',
      'aria-posinset',
      'aria-level',
      'aria-orientation',
      'aria-activedescendant',
      'aria-details',
      'aria-keyshortcuts',
      'aria-roledescription',
    ];

    const invalidAttrs = ariaAttrs.filter(
      (attr) => !validAriaAttributes.includes(attr.name)
    );

    const pass = invalidAttrs.length === 0;

    return {
      pass,
      message: () =>
        pass
          ? 'Expected element to have invalid ARIA attributes'
          : `Found invalid ARIA attribute(s): ${invalidAttrs.map((a) => a.name).join(', ')}`,
    };
  },

  /**
   * Check if element has accessible name
   */
  toHaveAccessibleName: (element: Element, expectedName?: string) => {
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledby = element.getAttribute('aria-labelledby');
    const title = element.getAttribute('title');
    const textContent = element.textContent?.trim();

    let accessibleName = '';

    if (ariaLabelledby) {
      const labelElement = document.getElementById(ariaLabelledby);
      accessibleName = labelElement?.textContent?.trim() || '';
    } else if (ariaLabel) {
      accessibleName = ariaLabel;
    } else if (element.tagName === 'IMG') {
      accessibleName = element.getAttribute('alt') || '';
    } else if (element.tagName === 'INPUT') {
      const id = element.getAttribute('id');
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        accessibleName = label?.textContent?.trim() || '';
      }
    } else {
      accessibleName = textContent || title || '';
    }

    const hasName = accessibleName.length > 0;
    const matchesExpected = expectedName
      ? accessibleName === expectedName
      : true;

    const pass = hasName && matchesExpected;

    return {
      pass,
      message: () => {
        if (!hasName) {
          return 'Expected element to have an accessible name';
        }
        if (!matchesExpected) {
          return `Expected accessible name "${expectedName}", got "${accessibleName}"`;
        }
        return `Expected element not to have accessible name "${accessibleName}"`;
      },
    };
  },

  /**
   * Check if colors meet contrast requirements
   */
  toMeetContrastAA: (
    colors: { foreground: string; background: string },
    isLargeText = false
  ) => {
    const pass = meetsContrastAA(
      colors.foreground,
      colors.background,
      isLargeText
    );

    return {
      pass,
      message: () =>
        pass
          ? `Expected colors not to meet WCAG AA contrast ratio`
          : `Expected colors to meet WCAG AA contrast ratio (${isLargeText ? '3:1' : '4.5:1'} minimum)`,
    };
  },

  /**
   * Check if colors meet AAA contrast requirements
   */
  toMeetContrastAAA: (
    colors: { foreground: string; background: string },
    isLargeText = false
  ) => {
    const pass = meetsContrastAAA(
      colors.foreground,
      colors.background,
      isLargeText
    );

    return {
      pass,
      message: () =>
        pass
          ? `Expected colors not to meet WCAG AAA contrast ratio`
          : `Expected colors to meet WCAG AAA contrast ratio (${isLargeText ? '4.5:1' : '7:1'} minimum)`,
    };
  },

  /**
   * Check if element has proper keyboard navigation
   */
  toBeKeyboardNavigable: (container: Element) => {
    const focusableElements = getFocusableElements(container);
    const pass = focusableElements.length > 0;

    return {
      pass,
      message: () =>
        pass
          ? `Expected element not to have keyboard-navigable children`
          : `Expected element to have keyboard-navigable children`,
    };
  },

  /**
   * Check if element has proper heading structure
   */
  toHaveProperHeadingStructure: (container: Element) => {
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const levels = Array.from(headings).map((h) =>
      parseInt(h.tagName.charAt(1), 10)
    );

    let isValid = true;
    let errorMessage = '';

    for (let i = 1; i < levels.length; i++) {
      const current = levels[i];
      const previous = levels[i - 1];

      // Heading level should not skip more than one level
      if (current > previous + 1) {
        isValid = false;
        errorMessage = `Heading structure skips from h${previous} to h${current}`;
        break;
      }
    }

    return {
      pass: isValid,
      message: () =>
        isValid
          ? 'Expected heading structure to be invalid'
          : errorMessage || 'Expected proper heading structure',
    };
  },
};

// Extend Vitest expect with custom matchers
expect.extend(a11yMatchers);

// TypeScript declarations for custom matchers
declare module 'vitest' {
  interface Assertion<T> {
    toHaveNoA11yViolations(): Promise<T>;
    toBeFocusable(): T;
    toHaveValidAria(): T;
    toHaveAccessibleName(expectedName?: string): T;
    toMeetContrastAA(isLargeText?: boolean): T;
    toMeetContrastAAA(isLargeText?: boolean): T;
    toBeKeyboardNavigable(): T;
    toHaveProperHeadingStructure(): T;
  }
}
