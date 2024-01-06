import { ReactNode } from 'react';

import './icon-link.scss';

interface IconLinkProps {
  children: ReactNode;
  link: string;
}

export function IconLink({ children, link }: IconLinkProps): JSX.Element {
  return (
    <a
      className="icon-link"
      href={link}
      target="_blank">
      {children}
    </a>
  );
}