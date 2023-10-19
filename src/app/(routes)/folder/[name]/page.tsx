import AppLayout from '@/app/page';

const FolderPage = ({ params }: { params: { name: string } }) => {
  const decodedParams = decodeURIComponent(params.name).replace(/%20/g, ' ');
  return (
    <AppLayout>
      <p>hello</p>
      <h1>{decodedParams}</h1>
    </AppLayout>
  );
};

export default FolderPage;
