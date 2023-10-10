import Layout from '@/app/page';

const Folder = ({ params }: { params: { id: number } }) => {
  return <Layout>hello {params.id}</Layout>;
};

export default Folder;
