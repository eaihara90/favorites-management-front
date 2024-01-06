import { ReactNode } from 'react';

import './icon-button.scss';

interface IconButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
}

export function IconButton({ children, onClick }: IconButtonProps): JSX.Element {
  return (
    <button
      className="icon-button"
      onClick={onClick}>
      {children}
    </button>
  );
}