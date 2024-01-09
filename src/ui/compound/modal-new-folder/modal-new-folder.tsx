import './modal-new-folder.scss';
import { Button } from 'src/ui/atoms/button/button';
import { Modal } from "src/ui/atoms/modal/modal";
import { Input } from 'src/ui/atoms/input/input';

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
            <label htmlFor="folder-name" className="label">Name</label>
            <Input id="folder-name" type="text"/>
          </div>
          
          <div className="form-controls">
            <label htmlFor="folder-name" className="label">Name</label>
            <Input id="folder-name" type="text"/>
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