/**
 * Design Tokens Entry Point - WenderMedia Astro Components
 *
 * Import tokens in different formats:
 * - CSS: import '@wendermedia/astro-components/tokens/dist/tokens.css'
 * - SCSS: @use '@wendermedia/astro-components/tokens/dist/tokens'
 * - JS: import { tokens } from '@wendermedia/astro-components/tokens'
 */

// Re-export JavaScript tokens
export { default as tokens } from './dist/tokens.js';

// Type definitions
export interface ColorToken {
  value: string;
}

export interface SpacingToken {
  value: string;
}

export interface FontToken {
  value: string;
}

export interface DesignTokens {
  color: Record<string, Record<string, ColorToken>>;
  spacing: Record<string, SpacingToken>;
  font: Record<string, Record<string, FontToken>>;
  borderRadius: Record<string, { value: string }>;
  shadow: Record<string, { value: string }>;
  opacity: Record<string, { value: string }>;
  transition: Record<string, Record<string, { value: string }>>;
  zIndex: Record<string, { value: string }>;
}

// CSS custom property helpers
export function getCSSVar(token: string): string {
  return `var(--${token.replace(/\./g, '-')})`;
}

export function getTokenValue(path: string, tokens: Record<string, unknown>): string | undefined {
  const parts = path.split('.');
  let current: unknown = tokens;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  if (current && typeof current === 'object' && 'value' in current) {
    return (current as { value: string }).value;
  }

  return undefined;
}
