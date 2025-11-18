/**
 * Form Component
 * Complete form with validation states
 */

import * as React from 'react';
import { FormField, type FormFieldProps } from '../../molecules/FormField';
import { Button, type ButtonProps } from '../../atoms/Button';
import { classNames } from '../../utils/classNames';

export interface FormFieldConfig extends Omit<FormFieldProps, 'id'> {
  id: string;
  name: string;
}

export interface FormProps {
  /**
   * Form fields configuration
   */
  fields: FormFieldConfig[];
  /**
   * Submit button configuration
   */
  submitButton?: ButtonProps;
  /**
   * Cancel button configuration
   */
  cancelButton?: ButtonProps;
  /**
   * Form submission handler
   */
  onSubmit?: (data: Record<string, string>) => void;
  /**
   * Form reset handler
   */
  onReset?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML form attributes
   */
  [key: string]: any;
}

export const Form: React.FC<FormProps> = ({
  fields,
  submitButton,
  cancelButton,
  onSubmit,
  onReset,
  className = '',
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    
    fields.forEach((field) => {
      const value = formData.get(field.name);
      if (value) {
        data[field.name] = value.toString();
      }
    });

    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  const classes = classNames('space-y-6', className);

  return (
    <form className={classes} onSubmit={handleSubmit} onReset={handleReset} {...props}>
      {fields.map((field) => (
        <FormField key={field.id} {...field} />
      ))}
      {(submitButton || cancelButton) && (
        <div className="flex items-center justify-end gap-3 pt-4">
          {cancelButton && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
              {...cancelButton}
            >
              {cancelButton.children || 'Cancel'}
            </Button>
          )}
          {submitButton && (
            <Button type="submit" {...submitButton}>
              {submitButton.children || 'Submit'}
            </Button>
          )}
        </div>
      )}
    </form>
  );
};

