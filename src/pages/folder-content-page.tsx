import { useState } from 'react';
import { Route } from 'react-router-dom';

import './folder-content-page.scss';
import { Button } from 'src/ui/atoms/button/button';
import { ModalNewFolder } from 'src/ui/compound/modal-new-folder/modal-new-folder';
import { FolderNavigation } from 'src/ui/compound/folder-navigation/folder-navigation';
import { FolderContentList } from 'src/ui/compound/folder-content-list/folder-content-list';

export function FolderContentPage(): JSX.Element {
  const [isOpenCreateNewFolder, setIsOpenCreateNewFolder] = useState<boolean>(false);

  return (
    <div className="folder-page-wrapper">
      <FolderNavigation root/>
      <div className="folder-content">
        <div className="folder-content__header">
          <h2>Folder Content</h2>
          
          <div className="folder-content__header-controls">
            <Button>
              <i className="ph ph-file-plus"></i>
              New File
            </Button>
            
            <Button
              onClick={() => setIsOpenCreateNewFolder(true)}>
              <i className="ph ph-folder-plus"></i>
              New Folder
            </Button>
            
            <Button
              colorSchema="danger">
              <i className="ph ph-folder-minus"></i>
              Remove Folder
            </Button>
          </div>
        </div>
        
        <Route path={`/folders/:folderId`}>
          <FolderContentList />
        </Route>

        { isOpenCreateNewFolder &&
          <ModalNewFolder
            onClose={() => setIsOpenCreateNewFolder(false)}>
          </ModalNewFolder>
        }
      </div>
    </div>
  );
}