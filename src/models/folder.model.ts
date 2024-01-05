import { FileModel } from "./file.model";

export class FolderModel {
  files?: FileModel[];
  folders?: FolderModel[];
  folderId!: string;
  name!: string;
  path!: string;
}