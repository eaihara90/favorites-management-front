import { useState } from 'react';
import './folder.scss';
import { FolderNavigation } from 'src/ui/compound/folder-navigation/folder-navigation';
import { FolderModel } from 'src/models/folder.model';
import { useHistory } from 'react-router-dom';

interface FolderProps {
  folders?: FolderModel[];
  folderId: string;
  name: string;
  path?: string;
}

export function Folder({ folders, folderId, name, path = '' }: FolderProps): JSX.Element {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOnFolder = (): void => {
    if (folders?.length) {
      setIsOpen(_prev => !_prev);
    }
    history.push(`/folder/${folderId}`)
  }

  return (
    <>
      <li className={`folder ${isOpen ? 'open': ''}`} onClick={handleClickOnFolder}>
        { folders?.length && <i className={`ph ph-caret-right`}></i>}
        <i className="ph ph-folder-simple"></i>
        <span className="folder__name">{name}</span>
        {path}
      </li>
      { (isOpen && folders?.length) && <div className="folder__inner-folder"><FolderNavigation folders={folders}/></div>}
    </>
  );
}