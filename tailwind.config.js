/** @type {import('tailwindcss').Config} */
const { getCurrentTokens } = require('./dist/config/versions.js');

// Fallback tokens if build hasn't run yet
const fallbackTokens = {
  colors: {
    primitives: {
      teal: {
        50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
        400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
        800: '#115e59', 900: '#134e4a',
      },
      blue: {
        50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
        400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1e40af',
        800: '#1e3a8a', 900: '#1e3a8a',
      },
      green: {
        50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
        400: '#4ade80', 500: '#10b981', 600: '#059669', 700: '#047857',
        800: '#065f46', 900: '#064e3b',
      },
      gray: {
        50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
        400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
        800: '#1e293b', 900: '#0f172a',
      },
      red: {
        50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
        400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
        800: '#991b1b', 900: '#7f1d1d',
      },
    },
    semantic: {
      text: {
        primary: '#0f172a', secondary: '#64748b', disabled: '#cbd5e1', inverse: '#ffffff',
      },
      background: {
        primary: '#ffffff', secondary: '#f8fafc', tertiary: '#e2e8f0', inverse: '#0f172a',
      },
      border: {
        default: '#e2e8f0', focus: '#14b8a6', error: '#dc2626', success: '#10b981',
      },
      feedback: {
        error: '#dc2626', success: '#10b981', warning: '#f59e0b', info: '#1e40af',
      },
      brand: {
        primary: '#14b8a6', primaryHover: '#0d9488', secondary: '#1e40af',
        secondaryHover: '#1e3a8a', accent: '#10b981',
      },
    },
    gradients: {
      decorative: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
      hero: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
      subtle: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)',
    },
  },
  typography: {
    fontFamily: { primary: 'Inter', fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'] },
    fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '6xl': '3.75rem' },
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
    lineHeight: { tight: '1.2', normal: '1.5', relaxed: '1.7' },
    letterSpacing: { tight: '-0.02em', normal: '0' },
  },
  spacing: {
    scale: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem', base: '1rem', lg: '1.5rem', xl: '2rem', '2xl': '3rem', '3xl': '4rem', '4xl': '6rem' },
    breakpoints: { mobile: '375px', tablet: '768px', desktop: '1024px' },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
};

let tokens;
try {
  tokens = getCurrentTokens();
} catch (e) {
  tokens = fallbackTokens;
}

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './examples/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: tokens.colors.primitives.teal,
        blue: tokens.colors.primitives.blue,
        green: tokens.colors.primitives.green,
        gray: tokens.colors.primitives.gray,
        red: tokens.colors.primitives.red,
        text: {
          primary: tokens.colors.semantic.text.primary,
          secondary: tokens.colors.semantic.text.secondary,
          disabled: tokens.colors.semantic.text.disabled,
          inverse: tokens.colors.semantic.text.inverse,
        },
        background: {
          primary: tokens.colors.semantic.background.primary,
          secondary: tokens.colors.semantic.background.secondary,
          tertiary: tokens.colors.semantic.background.tertiary,
          inverse: tokens.colors.semantic.background.inverse,
        },
        border: {
          default: tokens.colors.semantic.border.default,
          focus: tokens.colors.semantic.border.focus,
          error: tokens.colors.semantic.border.error,
          success: tokens.colors.semantic.border.success,
        },
        feedback: {
          error: tokens.colors.semantic.feedback.error,
          success: tokens.colors.semantic.feedback.success,
          warning: tokens.colors.semantic.feedback.warning,
          info: tokens.colors.semantic.feedback.info,
        },
        brand: {
          primary: tokens.colors.semantic.brand.primary,
          'primary-hover': tokens.colors.semantic.brand.primaryHover,
          secondary: tokens.colors.semantic.brand.secondary,
          'secondary-hover': tokens.colors.semantic.brand.secondaryHover,
          accent: tokens.colors.semantic.brand.accent,
        },
      },
      fontFamily: {
        sans: [tokens.typography.fontFamily.primary, ...tokens.typography.fontFamily.fallback],
      },
      fontSize: {
        xs: [tokens.typography.fontSize.xs, { lineHeight: tokens.typography.lineHeight.normal, letterSpacing: tokens.typography.letterSpacing.normal }],
        sm: [tokens.typography.fontSize.sm, { lineHeight: tokens.typography.lineHeight.normal, letterSpacing: tokens.typography.letterSpacing.normal }],
        base: [tokens.typography.fontSize.base, { lineHeight: tokens.typography.lineHeight.normal, letterSpacing: tokens.typography.letterSpacing.normal }],
        lg: [tokens.typography.fontSize.lg, { lineHeight: tokens.typography.lineHeight.normal, letterSpacing: tokens.typography.letterSpacing.normal }],
        xl: [tokens.typography.fontSize.xl, { lineHeight: tokens.typography.lineHeight.normal, letterSpacing: tokens.typography.letterSpacing.normal }],
        '2xl': [tokens.typography.fontSize['2xl'], { lineHeight: tokens.typography.lineHeight.tight, letterSpacing: tokens.typography.letterSpacing.tight }],
        '3xl': [tokens.typography.fontSize['3xl'], { lineHeight: tokens.typography.lineHeight.tight, letterSpacing: tokens.typography.letterSpacing.tight }],
        '4xl': [tokens.typography.fontSize['4xl'], { lineHeight: tokens.typography.lineHeight.tight, letterSpacing: tokens.typography.letterSpacing.tight }],
        '6xl': [tokens.typography.fontSize['6xl'], { lineHeight: tokens.typography.lineHeight.tight, letterSpacing: tokens.typography.letterSpacing.tight }],
      },
      fontWeight: tokens.typography.fontWeight,
      spacing: tokens.spacing.scale,
      borderRadius: {
        xs: '0.125rem', sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px',
      },
      boxShadow: tokens.shadows,
      backgroundImage: {
        'gradient-decorative': tokens.colors.gradients.decorative,
        'gradient-hero': tokens.colors.gradients.hero,
        'gradient-subtle': tokens.colors.gradients.subtle,
      },
      screens: tokens.spacing.breakpoints,
      container: {
        center: true,
        padding: {
          DEFAULT: tokens.spacing.container.mobile.padding,
          tablet: tokens.spacing.container.tablet.padding,
          desktop: tokens.spacing.container.desktop.padding,
        },
        screens: {
          mobile: tokens.spacing.container.mobile.maxWidth,
          tablet: tokens.spacing.container.tablet.maxWidth,
          desktop: tokens.spacing.container.desktop.maxWidth,
        },
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        ...tokens.spacing.scale,
        grid: tokens.spacing.grid.gap,
      },
    },
  },
  plugins: [],
};
