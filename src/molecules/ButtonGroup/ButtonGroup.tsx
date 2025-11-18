/**
 * ButtonGroup Component
 * Groups buttons together
 */

import * as React from 'react';
import { Button, type ButtonProps } from '../../atoms/Button';
import { classNames } from '../../utils/classNames';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ButtonGroupProps {
  /**
   * Buttons to group
   */
  buttons: ButtonProps[];
  /**
   * Group orientation
   */
  orientation?: ButtonGroupOrientation;
  /**
   * Whether buttons are attached (no gap)
   */
  attached?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  orientation = 'horizontal',
  attached = false,
  className = '',
}) => {
  const containerClasses = classNames(
    'inline-flex',
    orientation === 'horizontal' ? 'flex-row' : 'flex-col',
    !attached && (orientation === 'horizontal' ? 'gap-2' : 'gap-2'),
    attached && orientation === 'horizontal' && '[&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button:not(:last-child)]:border-r-0',
    attached && orientation === 'vertical' && '[&>button:not(:first-child)]:rounded-t-none [&>button:not(:last-child)]:rounded-b-none [&>button:not(:last-child)]:border-b-0',
    className
  );

  return (
    <div className={containerClasses} role="group">
      {buttons.map((buttonProps, index) => (
        <Button key={index} {...buttonProps} />
      ))}
    </div>
  );
};

