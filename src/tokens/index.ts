/**
 * Design Tokens Export
 * Central export for all design tokens
 */

import { colors, type ColorTokens } from './colors';
import { typography, type TypographyTokens } from './typography';
import { spacing, type SpacingTokens } from './spacing';
import { shadows, type ShadowTokens } from './shadows';

export { colors, type ColorTokens } from './colors';
export { typography, type TypographyTokens } from './typography';
export { spacing, type SpacingTokens } from './spacing';
export { shadows, type ShadowTokens } from './shadows';

export interface DesignTokens {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
}

export const tokens: DesignTokens = {
  colors,
  typography,
  spacing,
  shadows,
};

