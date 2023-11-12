import { CodeSnippet } from '../definitions';

export const filterSnippetsByQuery = (data: CodeSnippet[], query: string) => {
  return data.filter((snippet) => {
    return (
      snippet.title.includes(query) ||
      snippet.code.includes(query) ||
      snippet.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
};
