import { Button } from 'src/ui/atoms/button/button';
import './modal-new-folder.scss';
import { Modal } from "src/ui/atoms/modal/modal";

interface ModalNewFolderProps {
  onClose: () => void;
}

export function ModalNewFolder({ onClose }: ModalNewFolderProps): JSX.Element {
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
  }

  return (
    <Modal onClose={onClose}>
      <div className="new-folder-wrapper">
        <form
          className="form"
          onSubmit={handleSubmit}>
          <div className="form-controls">

          </div>
          
          <div className="form-btns">
            <Button
              colorSchema="danger"
              onClick={onClose}
              type="button">
              Cancel
            </Button>

            <Button type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}