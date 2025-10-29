import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'feature' | 'testimonial';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'feature', hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-xl',

          // Variants
          {
            // Feature card
            'p-8 bg-white border border-neutral-200 shadow-md':
              variant === 'feature',

            // Testimonial card
            'p-6 bg-neutral-50 border-l-4 border-primary-500':
              variant === 'testimonial',
          },

          // Hover effects
          {
            'transition-all duration-300 hover:shadow-lg hover:-translate-y-1':
              hover && variant === 'feature',
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
