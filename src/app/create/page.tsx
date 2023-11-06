import { getFolders } from '../lib/actions';
import Form from '../ui/snippets/Form';

const CreateSnippetPage = async () => {
  const folders = await getFolders();
  return <Form folders={folders} />;
};

export default CreateSnippetPage;
