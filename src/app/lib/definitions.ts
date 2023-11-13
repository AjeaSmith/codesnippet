export type Folder = {
  id: string;
  name: string;
  icon: string;
};

export type CodeSnippet = {
  id: string;
  title: string;
  code: string;
  isFavorite: boolean;
  language: string;
  tags: string[];
  folderId: string | null;
}