import { useParams } from 'react-router-dom';
import './folder-content-page.scss';
import { useEffect, useState } from 'react';
import { FileModel } from 'src/models/file.model';
import { FileCard } from 'src/ui/compound/file-card/file-card';

export function FolderContentPage(): JSX.Element {
  const { folderId } = useParams<{ folderId: string }>();
  const [files, setFiles] = useState<FileModel[]>([]);
  
  useEffect(() => {
    loadFolderContent();
  }, [folderId]);

  const loadFolderContent = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3000/folders/${folderId}`);
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="folder-content">
      <h2>Folder Content {folderId}</h2>
      <ul className="files-list">
        { files?.map((x, index) => (
          <FileCard key={index}file={x} />
        ))}
      </ul>
    </div>
  );
}