import FavoriteSnippetsList from '@/app/ui/FavoriteSnippetsList';
import Search from '@/app/ui/search/Search';
import { SnippetListSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

const FavoritesPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  return (
    <>
      <Search />
      <Suspense fallback={<SnippetListSkeleton />}>
        <FavoriteSnippetsList query={query} />
      </Suspense>
    </>
  );
};

export default FavoritesPage;
