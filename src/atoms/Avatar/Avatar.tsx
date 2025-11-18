/**
 * Avatar Component
 * Supports regular avatars and TITA assistant avatar
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'default' | 'tita';

export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for image
   */
  alt?: string;
  /**
   * Avatar size
   */
  size?: AvatarSize;
  /**
   * Avatar variant (default or TITA)
   */
  variant?: AvatarVariant;
  /**
   * Initials to display when no image
   */
  initials?: string;
  /**
   * TITA expression state (only for variant="tita")
   */
  titaExpression?: 'happy' | 'relaxed' | 'stars' | 'surprised' | 'sad';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-full font-medium flex-shrink-0 overflow-hidden bg-gray-200 text-gray-700';

const titaClasses = 'bg-gradient-to-br from-green-500 to-teal-500';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  variant = 'default',
  initials,
  titaExpression,
  className = '',
  ...props
}) => {
  const classes = classNames(
    baseClasses,
    sizeClasses[size],
    variant === 'tita' && titaClasses,
    className
  );

  if (variant === 'tita') {
    // TITA avatar with expression
    return (
      <div className={classes} {...props}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            TITA
          </div>
        )}
      </div>
    );
  }

  // Default avatar
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
        {...props}
      />
    );
  }

  return (
    <div className={classes} {...props}>
      {initials ? (
        <span>{initials}</span>
      ) : (
        <svg
          className="w-full h-full text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </div>
  );
};

