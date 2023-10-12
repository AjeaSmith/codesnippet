import Layout from '@/app/page';

const Folder = ({ params }: { params: { name: string } }) => {
  return <Layout>hello {params.name}</Layout>;
};

export default Folder;
