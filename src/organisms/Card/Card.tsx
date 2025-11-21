/**
 * Card Component
 * Composable card with Header, Body, Footer, Actions, and Image
 */

import * as React from 'react';
import { classNames } from '../../utils/classNames';
import { CardHeader } from '../../molecules/Card/CardHeader';
import { CardBody } from '../../molecules/Card/CardBody';
import { CardFooter } from '../../molecules/Card/CardFooter';

export type CardVariant = 'default' | 'highlighted';

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card variant
   */
  variant?: CardVariant;
  /**
   * Whether card has shadow
   */
  shadow?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * HTML attributes
   */
  [key: string]: any;
}

export interface CardActionsProps {
  /**
   * Action buttons/content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardImageProps {
  /**
   * Image source
   */
  src: string;
  /**
   * Image alt text
   */
  alt?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const CardComponent: React.FC<CardProps> = ({
  children,
  variant = 'default',
  shadow = true,
  className = '',
  onClick,
  ...props
}) => {
  const classes = classNames(
    'bg-white rounded-xl border border-gray-200 overflow-hidden',
    variant === 'highlighted' && 'bg-gradient-hero text-white border-0',
    shadow && 'shadow-md',
    onClick && 'cursor-pointer transition-shadow hover:shadow-lg',
    className
  );

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

const CardActions: React.FC<CardActionsProps> = ({
  children,
  className = '',
}) => {
  const classes = classNames(
    'px-card-responsive py-base flex items-center justify-end gap-element-responsive',
    className
  );

  return <div className={classes}>{children}</div>;
};

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt = '',
  className = '',
}) => {
  const classes = classNames('w-full h-auto object-cover', className);

  return <img src={src} alt={alt} className={classes} />;
};

// Compose Card with sub-components
export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Actions: CardActions,
  Image: CardImage,
});

