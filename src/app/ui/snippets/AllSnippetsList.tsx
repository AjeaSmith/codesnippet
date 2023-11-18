import { fetchSnippets } from '@/app/lib/actions';
import { filterSnippetsByQuery } from '@/app/lib/utils/filterSnippets';
import { notFound } from 'next/navigation';
import CodeSnippetItem from './CodeSnippetItem';
import NoSnippetsView from './NoSnippetsView';

const AllSnippetsList = async ({ query }: { query: string }) => {
  const codeSnippets = await fetchSnippets();
  // Filter snippets that match the search term
  const filteredSnippets = filterSnippetsByQuery(codeSnippets, query);

  if (!codeSnippets) {
    notFound();
  }

  if (codeSnippets.length === 0) {
    return <NoSnippetsView />;
  }

  return <CodeSnippetItem data={filteredSnippets} />;
};

export default AllSnippetsList;
