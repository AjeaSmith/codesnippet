import Link from 'next/link';
import { currentUser } from '@clerk/nextjs';

export default async function Page() {
  const user = await currentUser();
  return (
    <main className="flex flex-col p-6 items-center">
      {!user ?  <>
      <div className="text-center mb-3">
        <h1 className="text-4xl mt-10 mb-2">Welcome!</h1>
        <p className="text-xl">Sign up in to start saving your snippets</p>
      </div>
      <Link
        className="bg-[#FE6C0B] px-5 py-2 rounded-md text-center font-bold mb-5"
        href="/sign-up"
      >
        Sign Up
      </Link>
      </>:  <>
      <div className="text-center mb-3">
        <h1 className="text-4xl mt-10 mb-10">Hey, welcome back!</h1>
      <Link
        className="bg-[#FE6C0B] px-5 py-2 rounded-md text-center font-bold mb-5"
        href="/dashboard/folder/AllSnippets"
      >
        Go to your dashboard!
      </Link>
      </div>
      </>}
     
    </main>
  );
}
