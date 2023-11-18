import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-up');
  } else {
    redirect('/dashboard/folder/AllSnippets');
  }
}
