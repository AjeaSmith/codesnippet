import { fetchCodeSnippetById, fetchFolders } from '@/app/lib/actions';
import EditForm from '@/app/ui/snippets/EditForm';
import { notFound } from 'next/navigation';

const EditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [code, folders] = await Promise.all([
    fetchCodeSnippetById(id),
    fetchFolders(),
  ]);

  if (!code) {
    notFound();
  }

  return <EditForm codeSnippet={code} folders={folders}/>;
};

export default EditPage;
