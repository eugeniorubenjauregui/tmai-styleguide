/**
 * DataTable Component
 * Table component with styled rows and columns
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';

export interface DataTableColumn<T = any> {
  /**
   * Column key
   */
  key: string;
  /**
   * Column header label
   */
  label: string;
  /**
   * Custom render function for cell content
   */
  render?: (value: any, row: T, index: number) => React.ReactNode;
  /**
   * Column alignment
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Column width
   */
  width?: string;
}

export interface DataTableProps<T = any> {
  /**
   * Table columns configuration
   */
  columns: DataTableColumn<T>[];
  /**
   * Table data rows
   */
  data: T[];
  /**
   * Whether table is striped
   */
  striped?: boolean;
  /**
   * Whether table has hover effect
   */
  hover?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void;
  /**
   * HTML table attributes
   */
  [key: string]: any;
}

export const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  striped = true,
  hover = true,
  className = '',
  onRowClick,
  ...props
}: DataTableProps<T>) => {
  const tableClasses = classNames(
    'min-w-full divide-y divide-gray-200',
    className
  );

  const theadClasses = 'bg-gray-50';
  const thClasses = (column: DataTableColumn<T>) =>
    classNames(
      'px-xl py-md text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
      column.align === 'center' && 'text-center',
      column.align === 'right' && 'text-right'
    );

  const tbodyClasses = 'bg-white divide-y divide-gray-200';
  const trClasses = (index: number) =>
    classNames(
      striped && index % 2 === 0 && 'bg-gray-50',
      hover && 'hover:bg-gray-100',
      onRowClick && 'cursor-pointer'
    );

  const tdClasses = (column: DataTableColumn<T>) =>
    classNames(
      'px-xl py-base whitespace-nowrap text-sm text-gray-900',
      column.align === 'center' && 'text-center',
      column.align === 'right' && 'text-right'
    );

  const getCellValue = (column: DataTableColumn<T>, row: T, index: number) => {
    if (column.render) {
      return column.render(row[column.key], row, index);
    }
    return row[column.key] ?? '';
  };

  return (
    <div className="overflow-x-auto">
      <table className={tableClasses} {...props}>
        <thead className={theadClasses}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={thClasses(column)}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyClasses}>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-xl py-base text-center text-sm text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={trClasses(rowIndex)}
                onClick={() => onRowClick?.(row, rowIndex)}
              >
                {columns.map((column) => (
                  <td key={column.key} className={tdClasses(column)}>
                    {getCellValue(column, row, rowIndex)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

