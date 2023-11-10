'use client';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function SnippetListSkeleton() {
  return (
    <div className="p-8">
      <div className="p-5 bg-[#1e1f21] shadow-md opacity-70 w-[363px] h-[215px] rounded-md">
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
    </div>
  );
}
