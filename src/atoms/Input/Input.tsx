/**
 * Input Component
 * Atomic component for text input fields with states
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps {
  /**
   * Input type
   */
  type?: InputType;
  /**
   * Input value
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Input state
   */
  state?: InputState;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Input name attribute
   */
  name?: string;
  /**
   * Input id attribute
   */
  id?: string;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML input attributes
   */
  [key: string]: any;
}

const stateClasses: Record<InputState, string> = {
  default:
    'border-border-default focus:border-brand-primary focus:ring-brand-primary',
  error: 'border-feedback-error focus:border-feedback-error focus:ring-feedback-error',
  success:
    'border-feedback-success focus:border-feedback-success focus:ring-feedback-success',
};

const baseClasses =
  'w-full px-md py-md text-base rounded-lg border transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100';

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  state = 'default',
  disabled = false,
  required = false,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...props
}) => {
  const classes = classNames(
    baseClasses,
    stateClasses[state],
    className
  );

  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={classes}
      {...props}
    />
  );
};

