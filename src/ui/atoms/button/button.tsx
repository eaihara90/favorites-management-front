import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  colorSchema?: 'primary' | 'danger';
}

export function Button({ colorSchema = 'primary', children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`button button--${colorSchema}`}>
      {children}
    </button>
  );
}