/**
 * Tailwind CSS Configuration
 * Extends default theme with AI Lytics design tokens
 */

import type { Config } from 'tailwindcss';
import { getCurrentTokens } from './versions';

const tokens = getCurrentTokens();

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './examples/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primitives
        teal: tokens.colors.primitives.teal,
        blue: tokens.colors.primitives.blue,
        green: tokens.colors.primitives.green,
        gray: tokens.colors.primitives.gray,
        red: tokens.colors.primitives.red,
        // Semantic colors
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
        sans: [
          tokens.typography.fontFamily.primary,
          ...tokens.typography.fontFamily.fallback,
        ],
      },
      fontSize: {
        xs: [
          tokens.typography.fontSize.xs,
          {
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.normal,
          },
        ],
        sm: [
          tokens.typography.fontSize.sm,
          {
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.normal,
          },
        ],
        base: [
          tokens.typography.fontSize.base,
          {
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.normal,
          },
        ],
        lg: [
          tokens.typography.fontSize.lg,
          {
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.normal,
          },
        ],
        xl: [
          tokens.typography.fontSize.xl,
          {
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.normal,
          },
        ],
        '2xl': [
          tokens.typography.fontSize['2xl'],
          {
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
          },
        ],
        '3xl': [
          tokens.typography.fontSize['3xl'],
          {
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
          },
        ],
        '4xl': [
          tokens.typography.fontSize['4xl'],
          {
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
          },
        ],
        '6xl': [
          tokens.typography.fontSize['6xl'],
          {
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
          },
        ],
      },
      fontWeight: {
        normal: String(tokens.typography.fontWeight.normal),
        medium: String(tokens.typography.fontWeight.medium),
        semibold: String(tokens.typography.fontWeight.semibold),
        bold: String(tokens.typography.fontWeight.bold),
        extrabold: String(tokens.typography.fontWeight.extrabold),
      },
      spacing: {
        xs: tokens.spacing.scale.xs,
        sm: tokens.spacing.scale.sm,
        md: tokens.spacing.scale.md,
        base: tokens.spacing.scale.base,
        lg: tokens.spacing.scale.lg,
        xl: tokens.spacing.scale.xl,
        '2xl': tokens.spacing.scale['2xl'],
        '3xl': tokens.spacing.scale['3xl'],
        '4xl': tokens.spacing.scale['4xl'],
      },
      borderRadius: {
        xs: '0.125rem', // 2px
        sm: '0.25rem', // 4px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
        full: '9999px',
      },
      boxShadow: {
        sm: tokens.shadows.sm,
        md: tokens.shadows.md,
        lg: tokens.shadows.lg,
        xl: tokens.shadows.xl,
      },
      backgroundImage: {
        'gradient-decorative': tokens.colors.gradients.decorative,
        'gradient-hero': tokens.colors.gradients.hero,
        'gradient-subtle': tokens.colors.gradients.subtle,
      },
      screens: {
        mobile: tokens.spacing.breakpoints.mobile,
        tablet: tokens.spacing.breakpoints.tablet,
        desktop: tokens.spacing.breakpoints.desktop,
      },
    },
  },
  plugins: [],
};

export default config;

