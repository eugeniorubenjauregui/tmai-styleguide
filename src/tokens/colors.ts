/**
 * Color Tokens for AI Lytics Design System
 * Based on WCAG accessibility standards
 */

export interface ColorTokens {
  primitives: {
    teal: {
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
    };
    blue: {
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
    };
    green: {
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
    };
    gray: {
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
    };
    red: {
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
    };
  };
  semantic: {
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
    border: {
      default: string;
      focus: string;
      error: string;
      success: string;
    };
    feedback: {
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    brand: {
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      accent: string;
    };
  };
  gradients: {
    decorative: string;
    hero: string;
    subtle: string;
  };
}

export const colors: ColorTokens = {
  primitives: {
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6', // Teal Principal
      600: '#0d9488', // Teal Hover
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1e40af', // Azul Profundo
      800: '#1e3a8a', // Azul Hover
      900: '#1e3a8a',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#10b981', // Verde TITA
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0', // Gris Claro
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // Gris Medio
      600: '#475569',
      700: '#334155', // Gris Oscuro
      800: '#1e293b',
      900: '#0f172a', // Negro Principal
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
    },
  },
  semantic: {
    text: {
      primary: '#0f172a', // Negro Principal
      secondary: '#64748b', // Gris Medio
      disabled: '#cbd5e1',
      inverse: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#e2e8f0',
      inverse: '#0f172a',
    },
    border: {
      default: '#e2e8f0', // Gris Claro
      focus: '#14b8a6', // Teal Principal
      error: '#dc2626',
      success: '#10b981', // Verde TITA
    },
    feedback: {
      error: '#dc2626',
      success: '#10b981',
      warning: '#f59e0b',
      info: '#1e40af', // Azul Profundo
    },
    brand: {
      primary: '#14b8a6', // Teal Principal
      primaryHover: '#0d9488', // Teal Hover
      secondary: '#1e40af', // Azul Profundo
      secondaryHover: '#1e3a8a', // Azul Hover
      accent: '#10b981', // Verde TITA
    },
  },
  gradients: {
    decorative: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
    hero: 'linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)',
    subtle: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)',
  },
};

