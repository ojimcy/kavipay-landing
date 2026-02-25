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
          'inline-flex items-center justify-center',
          'font-semibold rounded-xl',
          'transition-all duration-300 ease-out',
          'focus-ring',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

          {
            'bg-primary-600 text-white shadow-button hover:shadow-button-hover hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] relative overflow-hidden':
              variant === 'primary',

            'border-2 border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 active:bg-primary-100':
              variant === 'secondary',

            'text-neutral-600 hover:text-primary-600 hover:bg-neutral-100':
              variant === 'ghost',
          },

          {
            'px-5 py-2.5 text-sm min-w-[100px]': size === 'sm',
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
