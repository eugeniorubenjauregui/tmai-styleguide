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
        ...tokens.spacing.scale,
        'page-mobile': tokens.spacing.responsive.pagePadding.mobile,
        'page-tablet': tokens.spacing.responsive.pagePadding.tablet,
        'page-desktop': tokens.spacing.responsive.pagePadding.desktop,
        'card-mobile': tokens.spacing.responsive.cardPadding.mobile,
        'card-tablet': tokens.spacing.responsive.cardPadding.tablet,
        'card-desktop': tokens.spacing.responsive.cardPadding.desktop,
        'section-mobile': tokens.spacing.responsive.sectionGap.mobile,
        'section-tablet': tokens.spacing.responsive.sectionGap.tablet,
        'section-desktop': tokens.spacing.responsive.sectionGap.desktop,
        'element-mobile': tokens.spacing.responsive.elementGap.mobile,
        'element-tablet': tokens.spacing.responsive.elementGap.tablet,
        'element-desktop': tokens.spacing.responsive.elementGap.desktop,
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
  plugins: [
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.p-page-responsive': {
          padding: theme('spacing.page-mobile'),
          '@media (min-width: 768px)': {
            padding: theme('spacing.page-tablet'),
          },
          '@media (min-width: 1024px)': {
            padding: theme('spacing.page-desktop'),
          },
        },
        '.px-page-responsive': {
          paddingLeft: theme('spacing.page-mobile'),
          paddingRight: theme('spacing.page-mobile'),
          '@media (min-width: 768px)': {
            paddingLeft: theme('spacing.page-tablet'),
            paddingRight: theme('spacing.page-tablet'),
          },
          '@media (min-width: 1024px)': {
            paddingLeft: theme('spacing.page-desktop'),
            paddingRight: theme('spacing.page-desktop'),
          },
        },
        '.py-page-responsive': {
          paddingTop: theme('spacing.page-mobile'),
          paddingBottom: theme('spacing.page-mobile'),
          '@media (min-width: 768px)': {
            paddingTop: theme('spacing.page-tablet'),
            paddingBottom: theme('spacing.page-tablet'),
          },
          '@media (min-width: 1024px)': {
            paddingTop: theme('spacing.page-desktop'),
            paddingBottom: theme('spacing.page-desktop'),
          },
        },
        '.p-card-responsive': {
          padding: theme('spacing.card-mobile'),
          '@media (min-width: 768px)': {
            padding: theme('spacing.card-tablet'),
          },
          '@media (min-width: 1024px)': {
            padding: theme('spacing.card-desktop'),
          },
        },
        '.px-card-responsive': {
          paddingLeft: theme('spacing.card-mobile'),
          paddingRight: theme('spacing.card-mobile'),
          '@media (min-width: 768px)': {
            paddingLeft: theme('spacing.card-tablet'),
            paddingRight: theme('spacing.card-tablet'),
          },
          '@media (min-width: 1024px)': {
            paddingLeft: theme('spacing.card-desktop'),
            paddingRight: theme('spacing.card-desktop'),
          },
        },
        '.py-card-responsive': {
          paddingTop: theme('spacing.card-mobile'),
          paddingBottom: theme('spacing.card-mobile'),
          '@media (min-width: 768px)': {
            paddingTop: theme('spacing.card-tablet'),
            paddingBottom: theme('spacing.card-tablet'),
          },
          '@media (min-width: 1024px)': {
            paddingTop: theme('spacing.card-desktop'),
            paddingBottom: theme('spacing.card-desktop'),
          },
        },
        '.gap-element-responsive': {
          gap: theme('spacing.element-mobile'),
          '@media (min-width: 768px)': {
            gap: theme('spacing.element-tablet'),
          },
          '@media (min-width: 1024px)': {
            gap: theme('spacing.element-desktop'),
          },
        },
        '.mb-section-responsive': {
          marginBottom: theme('spacing.section-mobile'),
          '@media (min-width: 768px)': {
            marginBottom: theme('spacing.section-tablet'),
          },
          '@media (min-width: 1024px)': {
            marginBottom: theme('spacing.section-desktop'),
          },
        },
        '.mt-section-responsive': {
          marginTop: theme('spacing.section-mobile'),
          '@media (min-width: 768px)': {
            marginTop: theme('spacing.section-tablet'),
          },
          '@media (min-width: 1024px)': {
            marginTop: theme('spacing.section-desktop'),
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;

