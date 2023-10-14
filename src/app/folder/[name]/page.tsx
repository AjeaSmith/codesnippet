import Layout from '@/app/page';

const Folder = ({ params }: { params: { name: string } }) => {
  const decodedParams = decodeURIComponent(params.name).replace(/%20/g, ' ');
  return (
    <div>
      <Layout>{decodedParams}</Layout>
    </div>
  );
};

export default Folder;
