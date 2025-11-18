/**
 * SearchInput Component
 * Input field with search icon
 */

import * as React from 'react';
import { Input, type InputProps } from '../../atoms/Input';
import { Icon } from '../../atoms/Icon';
import { classNames } from '../../utils/classNames';

export interface SearchInputProps extends Omit<InputProps, 'type'> {
  /**
   * Position of search icon
   */
  iconPosition?: 'left' | 'right';
  /**
   * Custom search icon
   */
  icon?: React.ReactNode;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  iconPosition = 'left',
  icon,
  className = '',
  ...inputProps
}) => {
  const searchIcon = icon || (
    <Icon size="md" className="text-gray-400">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </Icon>
  );

  const containerClasses = classNames(
    'relative inline-flex items-center w-full',
    className
  );

  const iconClasses = classNames(
    'absolute pointer-events-none',
    iconPosition === 'left' ? 'left-3' : 'right-3'
  );

  const inputClasses = classNames(
    iconPosition === 'left' ? 'pl-10' : 'pr-10'
  );

  return (
    <div className={containerClasses}>
      {iconPosition === 'left' && (
        <span className={iconClasses}>{searchIcon}</span>
      )}
      <Input
        type="text"
        className={inputClasses}
        {...inputProps}
      />
      {iconPosition === 'right' && (
        <span className={iconClasses}>{searchIcon}</span>
      )}
    </div>
  );
};

