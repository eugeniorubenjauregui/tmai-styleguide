/**
 * FormField Component
 * Input with label and error message
 */

import * as React from 'react';
import { Input, type InputProps, type InputState } from '../../atoms/Input';
import { Typography } from '../../atoms/Typography';
import { classNames } from '../../utils/classNames';

export interface FormFieldProps extends InputProps {
  /**
   * Label text
   */
  label?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Help text
   */
  helpText?: string;
  /**
   * Whether field is required
   */
  required?: boolean;
  /**
   * Label HTML attributes
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helpText,
  required = false,
  id,
  name,
  state,
  labelProps,
  className = '',
  ...inputProps
}) => {
  const fieldId = id || name || `field-${Math.random().toString(36).substr(2, 9)}`;
  const inputState: InputState = error ? 'error' : state || 'default';
  const hasError = !!error;

  return (
    <div className={classNames('w-full', className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={classNames(
            'block text-sm font-medium mb-2',
            hasError ? 'text-feedback-error' : 'text-text-primary'
          )}
          {...labelProps}
        >
          {label}
          {required && <span className="text-feedback-error ml-1">*</span>}
        </label>
      )}
      <Input
        id={fieldId}
        name={name}
        state={inputState}
        required={required}
        aria-invalid={hasError}
        aria-describedby={
          error || helpText
            ? `${fieldId}-${error ? 'error' : 'help'}`
            : undefined
        }
        {...inputProps}
      />
      {error && (
        <Typography
          variant="small"
          className="mt-1 text-feedback-error"
          id={`${fieldId}-error`}
          role="alert"
        >
          {error}
        </Typography>
      )}
      {helpText && !error && (
        <Typography
          variant="small"
          className="mt-1 text-text-secondary"
          id={`${fieldId}-help`}
        >
          {helpText}
        </Typography>
      )}
    </div>
  );
};

