import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { FolderNavigation } from 'src/ui/compound/folder-navigation/folder-navigation';
import { FolderModel } from 'src/models/folder.model';
import { MainRoutes } from './MainRoutes';
import { useEffect, useState } from 'react';


function App() {
  const [rootFolders, setRootFolders] = useState<FolderModel[]>([]);

  useEffect(() => {
    loadFolders();
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
    <BrowserRouter>
      <h1>Management Front</h1>
      
      <div className="main-wrapper">
        <FolderNavigation root folders={rootFolders}/>
        
        <main className="main-content">
          <MainRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
