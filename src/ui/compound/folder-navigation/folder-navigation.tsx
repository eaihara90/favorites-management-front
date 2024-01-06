import './folder-navigation.scss';
import { Folder } from 'src/ui/atoms/folder/folder';
import { FolderModel } from 'src/models/folder.model';

interface FolderNavigationProps {
  folders?: FolderModel[];
  root?: boolean;
}

export function FolderNavigation({ folders, root = false }: FolderNavigationProps): JSX.Element {
  return (
    <ul className={`folder-navigation ${root ? 'root' : ''}`}>
      {folders?.map((x, index) => (
        <Folder key={index} folder={x}/>
      ))}
    </ul>
  );
}