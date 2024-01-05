import { useParams } from 'react-router-dom';
import './folder-content-page.scss';

export function FolderContentPage(): JSX.Element {
  const { folderId } = useParams<{ folderId: string }>();
  

  return (
    <div className="folder-content">
      <h2>Folder Content {folderId}</h2>
    </div>
  );
}