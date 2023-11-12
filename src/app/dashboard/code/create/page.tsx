import { fetchFolders } from '../../../lib/actions';
import Form from '../../../ui/snippets/Form';

const CreateSnippetPage = async () => {
  const folders = await fetchFolders();

  return <Form folders={folders} />;
};

export default CreateSnippetPage;
