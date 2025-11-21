/**
 * Button Component
 * Atomic component with multiple variants, sizes, and states
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  /**
   * Button variant style
   */
  variant?: ButtonVariant;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Icon element (optional)
   */
  icon?: React.ReactNode;
  /**
   * Icon position
   */
  iconPosition?: 'left' | 'right';
  /**
   * HTML button attributes
   */
  [key: string]: any;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-teal-700 focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
  secondary:
    'bg-brand-secondary text-white hover:bg-brand-secondary-hover active:bg-blue-800 focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2',
  outline:
    'border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white active:bg-brand-primary-hover focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
  ghost:
    'text-brand-primary bg-transparent hover:bg-teal-50 active:bg-teal-100 focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-base py-sm text-sm',      // 16px horizontal, 8px vertical
  md: 'px-lg py-2.5 text-base',     // 24px horizontal, 10px vertical (2.5 = 0.625rem)
  lg: 'px-xl py-md text-lg',        // 32px horizontal, 12px vertical
};

const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && disabledClasses,
    className
  );

  const iconElement = icon && (
    <span
      className={classNames(
        'inline-flex items-center',
        iconPosition === 'left' ? 'mr-2' : 'ml-2',
        loading && 'opacity-0'
      )}
    >
      {icon}
    </span>
  );

  const loadingSpinner = loading && (
    <svg
      className={classNames(
        'animate-spin h-4 w-4',
        iconPosition === 'left' ? 'mr-2' : 'ml-2'
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {iconPosition === 'left' && (loadingSpinner || iconElement)}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {iconPosition === 'right' && (loadingSpinner || iconElement)}
    </button>
  );
};

