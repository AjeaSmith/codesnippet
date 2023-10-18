const FolderPage = ({ params }: { params: { name: string } }) => {
  const decodedParams = decodeURIComponent(params.name).replace(/%20/g, ' ');
  return (
    <div>
      <p>hello</p>
      <h1>{decodedParams}</h1>
    </div>
  );
};

export default FolderPage;
