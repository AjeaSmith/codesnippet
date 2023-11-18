import { currentUser } from '@clerk/nextjs';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await currentUser();
  if (user) {
    redirect('/dashboard/folder/AllSnippets');
  }
  return (
    <main className="flex flex-col p-6 items-center h-screen justify-center">
      <>
        <CodeBracketIcon className="w-[100px] h-[100px] text-[#FE6C0B]" />
        <div className="text-center mb-3">
          <h1 className="text-4xl mt-10 mb-2">Welcome to Snippet Keeper</h1>
          <p className="italic font-light mb-8 text-[#F4FAFF] text-[24px] text-opacity-80">
            All your code snippets in one place!
          </p>
        </div>
        <Link
          className="bg-[#FE6C0B] px-5 py-2 rounded-md text-center font-bold mb-5"
          href="/sign-up"
        >
          Sign Up
        </Link>
      </>
    </main>
  );
}
