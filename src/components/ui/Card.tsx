import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'feature' | 'testimonial' | 'glass';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'feature', hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl',

          {
            'p-8 bg-white border border-neutral-100 shadow-card':
              variant === 'feature',

            'p-6 bg-neutral-50/80 border border-neutral-100 rounded-2xl':
              variant === 'testimonial',

            'p-8 glass shadow-glass':
              variant === 'glass',
          },

          {
            'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1':
              hover && variant === 'feature',
            'transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5':
              hover && variant === 'testimonial',
            'transition-all duration-300 hover:shadow-soft-lg':
              hover && variant === 'glass',
          },

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
