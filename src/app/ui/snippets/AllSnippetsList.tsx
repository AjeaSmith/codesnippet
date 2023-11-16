import { CodeSnippet } from '@/app/lib/definitions';
import { filterSnippetsByQuery } from '@/app/lib/utils/filterSnippets';
import { notFound } from 'next/navigation';
import CodeSnippetItem from './CodeSnippetItem';
import NoSnippetsView from './NoSnippetsView';

const AllSnippetsList = async ({
  query,
  snippets,
}: {
  query: string;
  snippets: CodeSnippet[];
}) => {
  // Filter snippets that match the search term
  const filteredSnippets = filterSnippetsByQuery(snippets, query);

  if (!filteredSnippets) {
    notFound();
  }

  if (filteredSnippets.length === 0) {
    return <NoSnippetsView />;
  }

  return <CodeSnippetItem data={filteredSnippets} />;
};

export default AllSnippetsList;
