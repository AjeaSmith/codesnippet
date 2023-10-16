import Layout from '@/app/page';

const FolderPage = ({ params }: { params: { name: string } }) => {
  const decodedParams = decodeURIComponent(params.name).replace(/%20/g, ' ');
  return <Layout>{decodedParams}</Layout>;
};

export default FolderPage;
