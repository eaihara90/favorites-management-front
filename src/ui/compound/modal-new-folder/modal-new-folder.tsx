import { Modal } from "src/ui/atoms/modal/modal";

interface ModalNewFolderProps {
  onClose: () => void;
}

export function ModalNewFolder({ onClose }: ModalNewFolderProps): JSX.Element {
  return (
    <Modal onClose={onClose}>
      a
    </Modal>
  );
}