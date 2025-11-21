/**
 * DashboardLayout Component
 * Base layout template for dashboards
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { Navigation, type NavigationItem } from '../../organisms/Navigation';

export interface DashboardLayoutProps {
  /**
   * Sidebar navigation items
   */
  sidebarItems?: NavigationItem[];
  /**
   * Top navigation items
   */
  topNavItems?: NavigationItem[];
  /**
   * Main content area
   */
  children: React.ReactNode;
  /**
   * Sidebar content (alternative to sidebarItems)
   */
  sidebar?: React.ReactNode;
  /**
   * Header content
   */
  header?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Whether sidebar is collapsed
   */
  sidebarCollapsed?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebarItems,
  topNavItems,
  children,
  sidebar,
  header,
  footer,
  sidebarCollapsed = false,
  className = '',
  ...props
}) => {
  const sidebarContent = sidebar || (sidebarItems && (
    <Navigation items={sidebarItems} orientation="vertical" />
  ));

  return (
    <div
      className={classNames(
        'min-h-screen bg-background-secondary flex flex-col',
        className
      )}
      {...props}
    >
      {/* Top Navigation */}
      {topNavItems && (
        <header className="bg-white border-b border-gray-200 px-page-responsive py-base">
          <Navigation items={topNavItems} orientation="horizontal" />
        </header>
      )}

      {/* Custom Header */}
      {header && !topNavItems && (
        <header className="bg-white border-b border-gray-200">
          {header}
        </header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarContent && (
          <aside
            className={classNames(
              'bg-white border-r border-gray-200 transition-all duration-200',
              sidebarCollapsed ? 'w-16' : 'w-64',
              'overflow-y-auto'
            )}
          >
            <div className="p-card-responsive">{sidebarContent}</div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-page-responsive">{children}</div>
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="bg-white border-t border-gray-200 px-page-responsive py-base">
          {footer}
        </footer>
      )}
    </div>
  );
};

