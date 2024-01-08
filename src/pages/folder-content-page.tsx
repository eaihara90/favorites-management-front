import { useParams } from 'react-router-dom';
import './folder-content-page.scss';
import { useEffect, useState } from 'react';
import { FileModel } from 'src/models/file.model';
import { FileCard } from 'src/ui/compound/file-card/file-card';
import { Button } from 'src/ui/atoms/button/button';
import { ModalNewFolder } from 'src/ui/compound/modal-new-folder/modal-new-folder';

export function FolderContentPage(): JSX.Element {
  const [isOpenCreateNewFolder, setIsOpenCreateNewFolder] = useState<boolean>(false);
  const {folderId} = useParams<{ folderId: string }>();
  const [files, setFiles] = useState<FileModel[]>([]);
  
  useEffect(() => {
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
    <div className="folder-content">
      <div className="folder-content__header">
        <h2>Folder Content {folderId}</h2>
        
        <div className="folder-content__header-controls">
          <Button><i className="ph ph-file-plus"></i>New File</Button>
          <Button onClick={() => setIsOpenCreateNewFolder(true)}><i className="ph ph-folder-plus"></i>New Folder</Button>
          <Button colorSchema="danger"><i className="ph ph-folder-minus"></i>Remove Folder</Button>
        </div>
      </div>
      
      <ul className="folder-content__files">
        { files?.map((x, index) => (
          <FileCard key={index}file={x} />
        ))}
      </ul>

      { isOpenCreateNewFolder &&
        <ModalNewFolder
          onClose={() => setIsOpenCreateNewFolder(false)}>
        </ModalNewFolder>
      }
    </div>
  );
}