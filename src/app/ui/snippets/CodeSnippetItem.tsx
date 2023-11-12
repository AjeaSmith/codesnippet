import { CodeSnippet } from '@/app/lib/definitions';
import Link from 'next/link';

const CodeSnippetItem = ({ data }: { data: CodeSnippet[] }) => {
  return (
    <div className="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {data.map((snippet: CodeSnippet) => {
        return (
          <Link
            href={`/dashboard/code/${snippet.id}`}
            key={snippet.id}
            className="p-5 border-2 border-[#F4FAFF] border-opacity-40 bg-[#1e1f21] bg-opacity-50 shadow-md rounded-md hover:cursor-pointer hover:border-[#FE6C0B] hover:border-2"
          >
            <h2 className="font-semibold">{snippet.title}</h2>
            <p className="text-[#F4FAFF] opacity-60 my-5">
              {snippet.code.substring(0, 50)}...
            </p>
            <div className="flex flex-wrap">
              {snippet.tags.map((tag, index) => (
                <div
                  key={index}
                  className="border mr-[17px] hover:bg-[#FE6C0B] hover:text-[#FAFAFA] cursor-pointer mb-2 border-black bg-[#131415] bg-opacity-90 shadow-sm rounded-md px-4 py-2 text-[#FE6C0B] font-bold"
                >
                  {tag}
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CodeSnippetItem;
