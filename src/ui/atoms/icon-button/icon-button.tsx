import { ButtonHTMLAttributes, ReactNode } from 'react';

import './icon-button.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
}

export function IconButton({ children, onClick, ...props }: IconButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className="icon-button"
      onClick={onClick}>
      {children}
    </button>
  );
}