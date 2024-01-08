import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps): JSX.Element {
  return (
    ReactDOM.createPortal(
      <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className="modal">
          {children}
        </div>
      </>,
      document.querySelector('#modal-root')!
    )
  )
}