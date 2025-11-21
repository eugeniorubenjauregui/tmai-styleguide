/**
 * CardHeader Component
 * Header section of a card
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export interface CardHeaderProps {
  /**
   * Header content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  ...props
}) => {
  const classes = classNames(
    'px-card-responsive py-base border-b border-gray-200',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

