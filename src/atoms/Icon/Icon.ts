/**
 * Icon Component
 * Wrapper for SVG icons from Flaticon uicons
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  /**
   * SVG content or path
   */
  children?: React.ReactNode;
  /**
   * Icon size
   */
  size?: IconSize;
  /**
   * Icon color (CSS color value or Tailwind class)
   */
  color?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * SVG viewBox (default: "0 0 24 24")
   */
  viewBox?: string;
  /**
   * Whether icon should fill container
   */
  fill?: 'currentColor' | 'none';
  /**
   * Stroke width for outline icons
   */
  strokeWidth?: number;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

const sizeClasses: Record<IconSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  color = 'currentColor',
  className = '',
  viewBox = '0 0 24 24',
  fill = 'currentColor',
  strokeWidth = 2,
  ...props
}) => {
  const classes = classNames(
    'inline-flex items-center justify-center flex-shrink-0',
    sizeClasses[size],
    className
  );

  const style: React.CSSProperties = {
    color: color.startsWith('#') || color.startsWith('rgb') ? color : undefined,
  };

  return (
    <svg
      className={classes}
      viewBox={viewBox}
      fill={fill === 'currentColor' ? 'currentColor' : 'none'}
      stroke={fill === 'none' ? 'currentColor' : undefined}
      strokeWidth={fill === 'none' ? strokeWidth : undefined}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

