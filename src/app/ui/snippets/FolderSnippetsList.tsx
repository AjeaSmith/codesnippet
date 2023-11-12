import { CodeSnippet } from '@/app/lib/definitions';
import { filterSnippetsByQuery } from '@/app/lib/utils/filterSnippets';
import CodeSnippetView from './CodeSnippetItem';

const FolderSnippetsList = ({
  data,
  query,
}: {
  data: CodeSnippet[];
  query: string;
}) => {
  const filteredSnippets = filterSnippetsByQuery(data, query);
  return <CodeSnippetView data={filteredSnippets} />;
};

export default FolderSnippetsList;
