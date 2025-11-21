/**
 * CardFooter Component
 * Footer section of a card
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export interface CardFooterProps {
  /**
   * Footer content
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

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  ...props
}) => {
  const classes = classNames(
    'px-card-responsive py-base border-t border-gray-200',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

