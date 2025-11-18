/**
 * Typography Components
 * Text components following the typography scale
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'small'
  | 'caption';

export interface TypographyProps {
  /**
   * Typography variant
   */
  variant?: TypographyVariant;
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML tag to render (defaults based on variant)
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

const variantClasses: Record<TypographyVariant, string> = {
  display: 'text-6xl font-bold leading-tight tracking-tight',
  h1: 'text-4xl font-bold leading-tight tracking-tight',
  h2: 'text-3xl font-semibold leading-snug tracking-tight',
  h3: 'text-2xl font-semibold leading-snug tracking-tight',
  h4: 'text-xl font-medium leading-normal',
  body: 'text-base font-normal leading-normal',
  small: 'text-sm font-normal leading-normal',
  caption: 'text-xs font-normal leading-normal',
};

const defaultTags: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'span',
  caption: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
  as,
  ...props
}) => {
  const Tag = (as || defaultTags[variant]) as any;
  const classes = classNames(variantClasses[variant], className);

  return <Tag className={classes} {...props}>{children}</Tag>;
};

// Convenience components for each variant
export const Display: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display" {...props}>{props.children}</Typography>
);

export const H1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props}>{props.children}</Typography>
);

export const H2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props}>{props.children}</Typography>
);

export const H3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props}>{props.children}</Typography>
);

export const H4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props}>{props.children}</Typography>
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body" {...props}>{props.children}</Typography>
);

export const Small: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="small" {...props}>{props.children}</Typography>
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props}>{props.children}</Typography>
);

