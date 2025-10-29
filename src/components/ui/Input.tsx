import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Base styles
          'w-full px-4 py-3',
          'border-2 rounded-lg',
          'text-base text-neutral-900',
          'placeholder:text-neutral-400',
          'transition-all duration-200',
          'focus:outline-none focus:ring-4',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // State-based styles
          {
            'border-neutral-200 focus:border-primary-500 focus:ring-primary-100':
              !error && !success,
            'border-error focus:border-error focus:ring-red-100': error,
            'border-success focus:border-success focus:ring-green-100': success,
          },

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
