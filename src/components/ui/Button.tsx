import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
}

interface LinkButtonProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as: 'a';
}

type ButtonComponentProps = ButtonProps | LinkButtonProps;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonComponentProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (props.as === 'a') {
    const { as, ...anchorProps } = props as LinkButtonProps;
    return (
      <a
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  
  const { as, ...buttonProps } = props as ButtonProps;
  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

