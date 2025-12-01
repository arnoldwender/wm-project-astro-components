/**
 * Theme Configuration System
 *
 * Type-safe theme configuration for customizing design tokens
 * Supports deep merging with defaults
 */

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface ThemeColors {
  gray?: Partial<ColorScale>;
  blue?: Partial<ColorScale>;
  green?: Partial<ColorScale>;
  amber?: Partial<ColorScale>;
  red?: Partial<ColorScale>;
  purple?: Partial<ColorScale>;
  teal?: Partial<ColorScale>;
  orange?: Partial<ColorScale>;
  pink?: Partial<ColorScale>;
  // Semantic colors
  primary?: Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    subtle: string;
    muted: string;
    text: string;
  }>;
  secondary?: Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    subtle: string;
    muted: string;
    text: string;
  }>;
  success?: Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    subtle: string;
    muted: string;
    text: string;
  }>;
  warning?: Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    subtle: string;
    muted: string;
    text: string;
  }>;
  error?: Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    subtle: string;
    muted: string;
    text: string;
  }>;
}

export interface ThemeTypography {
  fontFamily?: {
    sans?: string;
    serif?: string;
    mono?: string;
    heading?: string;
    body?: string;
    code?: string;
  };
  fontSize?: {
    xs?: string;
    sm?: string;
    base?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    '4xl'?: string;
    '5xl'?: string;
    '6xl'?: string;
    '7xl'?: string;
  };
  fontWeight?: {
    thin?: number;
    extralight?: number;
    light?: number;
    normal?: number;
    medium?: number;
    semibold?: number;
    bold?: number;
    extrabold?: number;
    black?: number;
  };
  lineHeight?: {
    none?: number;
    tight?: number;
    snug?: number;
    normal?: number;
    relaxed?: number;
    loose?: number;
  };
  letterSpacing?: {
    tighter?: string;
    tight?: string;
    normal?: string;
    wide?: string;
    wider?: string;
    widest?: string;
  };
}

export interface ThemeSpacing {
  0?: string;
  px?: string;
  0.5?: string;
  1?: string;
  1.5?: string;
  2?: string;
  2.5?: string;
  3?: string;
  3.5?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
  11?: string;
  12?: string;
  14?: string;
  16?: string;
  20?: string;
  24?: string;
  28?: string;
  32?: string;
  36?: string;
  40?: string;
  44?: string;
  48?: string;
  52?: string;
  56?: string;
  60?: string;
  64?: string;
  72?: string;
  80?: string;
  96?: string;
}

export interface ThemeBorderRadius {
  none?: string;
  sm?: string;
  base?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  full?: string;
}

export interface ThemeShadow {
  xs?: string;
  sm?: string;
  base?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  inner?: string;
  none?: string;
}

export interface ThemeAnimation {
  duration?: {
    0?: string;
    75?: string;
    100?: string;
    150?: string;
    200?: string;
    300?: string;
    500?: string;
    700?: string;
    1000?: string;
  };
  easing?: {
    linear?: string;
    in?: string;
    out?: string;
    inOut?: string;
    bounce?: string;
    elastic?: string;
  };
}

export interface ThemeBreakpoints {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}

export interface ThemeContainer {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  '4xl'?: string;
  '5xl'?: string;
  '6xl'?: string;
  '7xl'?: string;
  full?: string;
  prose?: string;
}

export interface ThemeConfig {
  name?: string;
  colors?: ThemeColors;
  typography?: ThemeTypography;
  spacing?: ThemeSpacing;
  borderRadius?: ThemeBorderRadius;
  shadow?: ThemeShadow;
  animation?: ThemeAnimation;
  breakpoints?: ThemeBreakpoints;
  container?: ThemeContainer;
}

/**
 * Default theme configuration
 * These values match the CSS custom properties in primitives.css
 */
export const defaultTheme: Required<ThemeConfig> = {
  name: 'default',
  colors: {
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
  },
  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    '2xl': '0 35px 60px -15px rgb(0 0 0 / 0.3)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },
  animation: {
    duration: {
      0: '0ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  container: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    full: '100%',
    prose: '65ch',
  },
};

/**
 * Deep merge utility for theme configuration
 */
function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const output = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        sourceValue !== null &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue !== null &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        (output as Record<string, unknown>)[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        );
      } else if (sourceValue !== undefined) {
        (output as Record<string, unknown>)[key] = sourceValue;
      }
    }
  }

  return output;
}

/**
 * Create a custom theme by merging with defaults
 */
export function createTheme(config: ThemeConfig): Required<ThemeConfig> {
  return deepMerge(defaultTheme, config);
}

/**
 * Generate CSS custom properties from theme config
 */
export function generateCSSVariables(theme: ThemeConfig): string {
  const lines: string[] = [':root {'];

  // Colors
  if (theme.colors) {
    for (const [colorName, scale] of Object.entries(theme.colors)) {
      if (scale && typeof scale === 'object') {
        for (const [shade, value] of Object.entries(scale)) {
          if (shade === 'DEFAULT') {
            lines.push(`  --color-${colorName}: ${value};`);
          } else {
            lines.push(`  --color-${colorName}-${shade}: ${value};`);
          }
        }
      }
    }
  }

  // Typography
  if (theme.typography) {
    const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } = theme.typography;

    if (fontFamily) {
      for (const [name, value] of Object.entries(fontFamily)) {
        lines.push(`  --font-family-${name}: ${value};`);
      }
    }

    if (fontSize) {
      for (const [name, value] of Object.entries(fontSize)) {
        lines.push(`  --font-size-${name}: ${value};`);
      }
    }

    if (fontWeight) {
      for (const [name, value] of Object.entries(fontWeight)) {
        lines.push(`  --font-weight-${name}: ${value};`);
      }
    }

    if (lineHeight) {
      for (const [name, value] of Object.entries(lineHeight)) {
        lines.push(`  --line-height-${name}: ${value};`);
      }
    }

    if (letterSpacing) {
      for (const [name, value] of Object.entries(letterSpacing)) {
        lines.push(`  --letter-spacing-${name}: ${value};`);
      }
    }
  }

  // Spacing
  if (theme.spacing) {
    for (const [name, value] of Object.entries(theme.spacing)) {
      const safeName = name.replace('.', '-');
      lines.push(`  --spacing-${safeName}: ${value};`);
    }
  }

  // Border Radius
  if (theme.borderRadius) {
    for (const [name, value] of Object.entries(theme.borderRadius)) {
      lines.push(`  --radius-${name}: ${value};`);
    }
  }

  // Shadows
  if (theme.shadow) {
    for (const [name, value] of Object.entries(theme.shadow)) {
      lines.push(`  --shadow-${name}: ${value};`);
    }
  }

  // Animation
  if (theme.animation) {
    if (theme.animation.duration) {
      for (const [name, value] of Object.entries(theme.animation.duration)) {
        lines.push(`  --duration-${name}: ${value};`);
      }
    }
    if (theme.animation.easing) {
      for (const [name, value] of Object.entries(theme.animation.easing)) {
        lines.push(`  --ease-${name}: ${value};`);
      }
    }
  }

  // Breakpoints
  if (theme.breakpoints) {
    for (const [name, value] of Object.entries(theme.breakpoints)) {
      lines.push(`  --breakpoint-${name}: ${value};`);
    }
  }

  // Container
  if (theme.container) {
    for (const [name, value] of Object.entries(theme.container)) {
      lines.push(`  --container-${name}: ${value};`);
    }
  }

  lines.push('}');

  return lines.join('\n');
}

/**
 * Pre-built theme presets
 */
export const themePresets = {
  // Minimal clean design
  minimal: createTheme({
    name: 'minimal',
    borderRadius: {
      none: '0',
      sm: '0',
      base: '0',
      md: '2px',
      lg: '4px',
      xl: '6px',
      '2xl': '8px',
      '3xl': '12px',
      full: '9999px',
    },
    shadow: {
      xs: 'none',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
      base: '0 2px 4px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 8px 0 rgb(0 0 0 / 0.05)',
      lg: '0 8px 16px 0 rgb(0 0 0 / 0.05)',
      xl: '0 12px 24px 0 rgb(0 0 0 / 0.1)',
      '2xl': '0 20px 40px 0 rgb(0 0 0 / 0.1)',
      inner: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.03)',
      none: 'none',
    },
  }),

  // Soft rounded design
  rounded: createTheme({
    name: 'rounded',
    borderRadius: {
      none: '0',
      sm: '0.375rem',
      base: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      full: '9999px',
    },
  }),

  // Corporate professional
  corporate: createTheme({
    name: 'corporate',
    colors: {
      blue: {
        50: '#f0f5ff',
        100: '#e0ebff',
        200: '#c7d7fe',
        300: '#a4bcfc',
        400: '#7e98f8',
        500: '#5c75f2',
        600: '#4055e5',
        700: '#3344cc',
        800: '#2c3aa6',
        900: '#293583',
        950: '#1a2050',
      },
    },
    typography: {
      fontFamily: {
        sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
        heading: '"Inter", ui-sans-serif, system-ui, sans-serif',
      },
    },
  }),

  // Playful vibrant
  playful: createTheme({
    name: 'playful',
    colors: {
      primary: {
        DEFAULT: '#8b5cf6',
        hover: '#7c3aed',
        active: '#6d28d9',
        subtle: '#f5f3ff',
        muted: '#ede9fe',
        text: '#ffffff',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.5rem',
      base: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      full: '9999px',
    },
  }),
};

export type ThemePreset = keyof typeof themePresets;
