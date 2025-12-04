/**
 * Testing Utilities Index - WenderMedia Astro Components
 *
 * Exports for unit testing and accessibility testing
 */

// Accessibility testing utilities
export {
  runA11yAudit,
  formatViolations,
  expectNoA11yViolations,
  getViolationsByImpact,
  isFocusable,
  getFocusableElements,
  testKeyboardOrder,
  getContrastRatio,
  meetsContrastAA,
  meetsContrastAAA,
} from './a11y-setup';

// Component testing helpers
export { renderComponent, mockAstroProps, createTestElement } from './helpers';

// Test matchers
export { a11yMatchers } from './matchers';
