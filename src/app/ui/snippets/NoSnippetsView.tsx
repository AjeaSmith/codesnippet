import Search from '../search/Search';

const NoSnippetsView = () => {
  return (
    <>
      <Search />
      <div className="flex justify-center items-center h-screen">
        <p className="italic text-2xl text-[#FAFAFA] text-opacity-40">
          Click “+” to add a snippet
        </p>
      </div>
    </>
  );
};

export default NoSnippetsView;
