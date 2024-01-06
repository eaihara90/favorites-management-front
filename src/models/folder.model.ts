import { FileModel } from "./file.model";

export class FolderModel {
  files?: FileModel[];
  folders?: FolderModel[];
  folderId!: string;
  title!: string;
  parentId?: string;
  path!: string;
}