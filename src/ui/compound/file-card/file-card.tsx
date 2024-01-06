import { IconButton } from 'src/ui/atoms/icon-button/icon-button';
import './file-card.scss';
import { FileModel } from 'src/models/file.model';
import { IconLink } from 'src/ui/atoms/icon-link/icon-link';

interface FileCardProps {
  file: FileModel;
}

export function FileCard({ file }: FileCardProps): JSX.Element {
  return (
    <li className="file-card">
      <div className="file-card__info">
        {/* <img src={file?.imgSrc} alt="" className="file-card__info-img" /> */}
        <p className="file-card__info-name">{file.title}</p>
        <p className="file-card__info-description">{file?.description}</p>
      </div>
      
      <div className="file-card__controls">
        <IconButton onClick={() => console.log()}>
          <i className="ph ph-image"></i>
        </IconButton>

        <IconLink link={file.url}>
          <i className="ph ph-arrow-square-out"></i>
        </IconLink>

        <IconButton onClick={() => console.log()}>
          <i className="ph ph-note-pencil"></i>
        </IconButton>
        
        <IconButton onClick={() => console.log()}>
          <i className="ph ph-trash"></i>
        </IconButton>
      </div>
      
    </li>
  );
}