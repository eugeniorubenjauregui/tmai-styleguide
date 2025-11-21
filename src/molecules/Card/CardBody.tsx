/**
 * CardBody Component
 * Main content section of a card
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export interface CardBodyProps {
  /**
   * Body content
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

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  ...props
}) => {
  const classes = classNames('px-card-responsive py-base', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

