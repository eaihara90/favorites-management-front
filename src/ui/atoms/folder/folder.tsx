import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './folder.scss';
import { FolderNavigation } from 'src/ui/compound/folder-navigation/folder-navigation';
import { FolderModel } from 'src/models/folder.model';

interface FolderProps {
  folder: FolderModel;
}

export function Folder({ folder }: FolderProps): JSX.Element {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOnFolder = (): void => {
    if (folder?.folders?.length) {
      setIsOpen(_prev => !_prev);
    }
    history.push(`/folder/${folder._id}`);
  }

  return (
    <>
      <li className={`folder ${isOpen ? 'open': ''}`} onClick={handleClickOnFolder}>
        { (folder?.folders?.length > 0) && <i className={`ph ph-caret-right`}></i>}
        <i className="ph ph-folder-simple"></i>
        <span className="folder__title">{folder?.title}</span>
      </li>
      { (isOpen && folder?.folders?.length) &&
        <div className="inner-folder">
          <FolderNavigation folders={folder.folders}/>
        </div>
      }
    </>
  );
}