import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-semibold rounded-lg',
          'transition-all duration-200',
          'focus-ring',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

          // Variants
          {
            // Primary CTA button with brand gradient (blue to teal)
            'bg-gradient-cta text-white shadow-button hover:shadow-button-hover hover:scale-105 active:scale-95 relative overflow-hidden':
              variant === 'primary',

            // Secondary outline button
            'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100':
              variant === 'secondary',

            // Ghost button
            'text-neutral-700 hover:text-primary-600 hover:bg-primary-50':
              variant === 'ghost',
          },

          // Sizes
          {
            'px-4 py-2 text-sm min-w-[100px]': size === 'sm',
            'px-6 py-3 text-base min-w-[140px]': size === 'md',
            'px-8 py-4 text-lg min-w-[160px]': size === 'lg',
          },

          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 shimmer pointer-events-none" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
