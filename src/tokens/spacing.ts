/**
 * Spacing Tokens for AI Lytics Design System
 * Based on 4px scale system
 */

export interface SpacingTokens {
  scale: {
    xs: string;
    sm: string;
    md: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  grid: {
    columns: number;
    gap: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  container: {
    mobile: {
      maxWidth: string;
      padding: string;
    };
    tablet: {
      maxWidth: string;
      padding: string;
    };
    desktop: {
      maxWidth: string;
      padding: string;
    };
  };
  responsive: {
    pagePadding: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    sectionGap: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    cardPadding: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    elementGap: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

export const spacing: SpacingTokens = {
  scale: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    base: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
  },
  grid: {
    columns: 12,
    gap: '1.5rem', // 24px
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
  },
  container: {
    mobile: {
      maxWidth: '375px',
      padding: '1rem', // 16px
    },
    tablet: {
      maxWidth: '768px',
      padding: '2rem', // 32px
    },
    desktop: {
      maxWidth: '1280px',
      padding: '4rem', // 64px
    },
  },
  responsive: {
    pagePadding: {
      mobile: '1rem', // 16px
      tablet: '2rem', // 32px
      desktop: '4rem', // 64px
    },
    sectionGap: {
      mobile: '3rem', // 48px
      tablet: '4rem', // 64px
      desktop: '6rem', // 96px
    },
    cardPadding: {
      mobile: '1rem', // 16px
      tablet: '1.5rem', // 24px
      desktop: '2rem', // 32px
    },
    elementGap: {
      mobile: '0.75rem', // 12px
      tablet: '1rem', // 16px
      desktop: '1.5rem', // 24px
    },
  },
};

