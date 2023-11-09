'use client'
import { deleteSnippetById } from '@/app/lib/actions';

const CodePage = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => deleteSnippetById('6549abbc887574e53ad89016')}
      >
        test delete
      </button>
    </div>
  );
};

export default CodePage;
