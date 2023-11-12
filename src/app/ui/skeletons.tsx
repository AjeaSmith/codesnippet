import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SnippetListSkeleton() {
  const skeletonItems = Array.from({ length: 6 }, (_, index) => {
    return (
      <div
        className="p-5 bg-[#1e1f21] shadow-md opacity-70 w-[363px] h-[215px] rounded-md"
        key={index}
      >
        <Skeleton
          width={150}
          height={20}
          className="mb-4  bg-[#1e1f21] opacity-10"
        />
        <Skeleton height={70} className="mb-6 bg-[#1e1f21] opacity-10" />

        <div className="flex">
          <Skeleton
            width={76}
            height={30}
            className="rounded-md bg-[#1e1f21] opacity-10"
          />
          <Skeleton
            width={76}
            height={30}
            className="mx-[17px] rounded-md bg-[#1e1f21] opacity-10"
          />
          <Skeleton
            width={76}
            height={30}
            className="rounded-md bg-[#1e1f21] opacity-10"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skeletonItems}
    </div>
  );
}
export function FolderListSkeleton() {
  const skeletonItems = Array.from({ length: 3 }, (_, index) => {
    return (
      <div
        className="pl-8 bg-[#1e1f21] shadow-md opacity-70 rounded-md"
        key={index}
      >
        <div className="flex">
          <Skeleton
            width={24}
            height={24}
            className="mr-[12px] bg-[#1e1f21] opacity-10"
          />
          <Skeleton
            width={90}
            height={24}
            className="mb-8 mr-4 bg-[#1e1f21] opacity-10"
          />
          <Skeleton
            width={24}
            height={24}
            className="bg-[#1e1f21] opacity-10"
          />
        </div>
      </div>
    );
  });

  return skeletonItems;
}

export function CodeDetailItemSkeleton() {
  return (
    <div className="mx-8 p-4 bg-[#1e1f21] shadow-md opacity-70 rounded-md h-[600px]">
      <div className="flex justify-between">
        <Skeleton
          width={150}
          height={24}
          className="mr-[12px] bg-[#1e1f21] opacity-10"
        />
        <Skeleton
          width={40}
          height={24}
          className="mb-8 bg-[#1e1f21] opacity-10"
        />
      </div>
      <Skeleton height={500} className="w-full h-96 bg-[#1e1f21] opacity-10" />
    </div>
  );
}
