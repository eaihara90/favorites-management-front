import './folder-navigation.scss';
import { Folder } from 'src/ui/atoms/folder/folder';
import { FolderModel } from 'src/models/folder.model';
import { useEffect, useState } from 'react';

interface FolderNavigationProps {
  folders?: FolderModel[];
  root?: boolean;
}

export function FolderNavigation({ folders, root = false }: FolderNavigationProps): JSX.Element {
  const [rootFolders, setRootFolders] = useState<FolderModel[]>([]);

  useEffect(() => {
    if (root) {
      loadFolders();
    }
  }, []);

  const loadFolders = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3005/api/folders');
      const data = await response.json();
      setRootFolders(data.folders);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <ul className={`folder-navigation ${root ? 'root' : ''}`}>
      { root ? 
        rootFolders?.map((x, index) => (
          <Folder key={index} folder={x}/>
        )) :
        folders?.map((x, index) => (
          <Folder key={index} folder={x}/>
        ))
      }
    </ul>
  );
}