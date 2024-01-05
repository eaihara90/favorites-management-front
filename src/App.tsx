import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { FolderNavigation } from 'src/ui/compound/folder-navigation/folder-navigation';
import { FolderModel } from './models/folder.model';
import { MainRoutes } from './MainRoutes';

const folders: FolderModel[] = [
  { folderId: '1', name: '1 folder', path: '',},
  { folderId: '2', name: '2 folder', path: '', folders: [
    { folderId: '3', name: 'sub-folder 1 folder', path: ''},
    { folderId: '4', name: 'sub-folder 2 folder', path: '', folders: [
      { folderId: '5', name: 'sub-folder 1 folder sub-folder 1 folder', path: ''},
      { folderId: '6', name: 'sub-folder 2 folder', path: ''},
    ]},
  ]},
  { name: '3 folder', path: '', folderId: '7'},
];

function App() {

  return (
    <BrowserRouter>
      <h1>Favorites Management Front</h1>
      
      <div className="main-wrapper">
        <FolderNavigation root folders={folders}/>
        
        <main className="main-content">
          <MainRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
