import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './folder-content-list.scss';
import { FileCard } from '../file-card/file-card';
import { FileModel } from 'src/models/file.model';

export function FolderContentList(): JSX.Element {
  const {folderId} = useParams<{ folderId: string }>();
  const [files, setFiles] = useState<FileModel[]>([]);
  
  console.log(folderId);
  useEffect(() => {
    if (!folderId) {
      return;
    }

    loadFolderContent();
  }, [folderId]);

  const loadFolderContent = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3005/api/files/folder/${folderId}`);
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <ul className="folder-content-list">
      { files?.map((x, index) => (
        <FileCard key={index}file={x} />
      ))}
    </ul>
  );
}