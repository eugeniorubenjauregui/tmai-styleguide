/**
 * Badge Component
 * Small status indicator or label
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * Badge variant
   */
  variant?: BadgeVariant;
  /**
   * Badge size
   */
  size?: BadgeSize;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-brand-primary text-white',
  success: 'bg-feedback-success text-white',
  warning: 'bg-feedback-warning text-white',
  error: 'bg-feedback-error text-white',
  info: 'bg-feedback-info text-white',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-sm py-0.5 text-xs',      // 8px horizontal, 2px vertical
  md: 'px-2.5 py-xs text-sm',       // 10px horizontal, 4px vertical
};

const baseClasses = 'inline-flex items-center font-medium rounded-full';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

