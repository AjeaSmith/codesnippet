import { fetchSnippetById } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import CodeDetailActions from './CodeDetailActions';
import CodeView from './CodeView';

const CodeDetailItem = async ({ id }: { id: string }) => {
  const snippet = await fetchSnippetById(id);

  if (!snippet) {
    notFound();
  }

  return (
    <section className="px-8 grid auto-rows-max gap-4">
      <div className="flex justify-between">
        <CodeDetailActions snippet={snippet} />
      </div>
      <CodeView language={snippet?.language} codeString={snippet?.code} />
    </section>
  );
};

export default CodeDetailItem;
