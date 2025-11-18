/**
 * Navigation Component
 * Main navigation with states
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../atoms/Icon';

export interface NavigationItem {
  /**
   * Item label
   */
  label: string;
  /**
   * Item href or path
   */
  href?: string;
  /**
   * Item icon
   */
  icon?: React.ReactNode;
  /**
   * Whether item is active
   */
  active?: boolean;
  /**
   * Whether item is disabled
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: (item: NavigationItem) => void;
  /**
   * Child items (for nested navigation)
   */
  children?: NavigationItem[];
}

export interface NavigationProps {
  /**
   * Navigation items
   */
  items: NavigationItem[];
  /**
   * Navigation orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const containerClasses = classNames(
    'flex',
    orientation === 'horizontal' ? 'flex-row gap-1' : 'flex-col gap-1',
    className
  );

  const itemClasses = (item: NavigationItem) =>
    classNames(
      'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200',
      orientation === 'horizontal' ? 'text-sm' : 'text-base',
      item.active
        ? 'bg-brand-primary text-white'
        : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary',
      item.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
    );

  const handleClick = (item: NavigationItem, e: React.MouseEvent) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }

    if (item.onClick) {
      e.preventDefault();
      item.onClick(item);
    }
  };

  return (
    <nav className={containerClasses} role="navigation" {...props}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || '#'}
          className={itemClasses(item)}
          onClick={(e) => handleClick(item, e)}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

