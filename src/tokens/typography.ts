/**
 * Typography Tokens for AI Lytics Design System
 * Based on Inter font family
 */

export interface TypographyTokens {
  fontFamily: {
    primary: string;
    fallback: string[];
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '6xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
  letterSpacing: {
    tight: string;
    normal: string;
  };
  scale: {
    display: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    h1: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    h2: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    h3: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    h4: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    body: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    small: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
    caption: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    };
  };
}

export const typography: TypographyTokens = {
  fontFamily: {
    primary: 'Inter',
    fallback: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ],
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '6xl': '3.75rem', // 60px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.7',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
  },
  scale: {
    display: {
      fontSize: '3.75rem', // text-6xl
      fontWeight: 700,
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h1: {
      fontSize: '2.25rem', // text-4xl
      fontWeight: 700,
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.875rem', // text-3xl
      fontWeight: 600,
      lineHeight: '1.3',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.5rem', // text-2xl
      fontWeight: 600,
      lineHeight: '1.3',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.25rem', // text-xl
      fontWeight: 500,
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    body: {
      fontSize: '1rem', // text-base
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0',
    },
    small: {
      fontSize: '0.875rem', // text-sm
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0',
    },
    caption: {
      fontSize: '0.75rem', // text-xs
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0',
    },
  },
};

