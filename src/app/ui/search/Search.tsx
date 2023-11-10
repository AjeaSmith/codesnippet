'use client';
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // set the query params with search term
  const handleSearch = useDebouncedCallback((term) => {
    // console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <header className="w-full border-b-2 border-black px-8 py-4 self-center">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-1">
          <MagnifyingGlassIcon className="w-6 text-[#F4FAFF] opacity-60" />
          <input
            className="w-full px-4 py-2 bg-transparent outline-none text-[#F4FAFF] placeholder:text-[#F4FAFF] placeholder:opacity-40"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Find by title, tag, code..."
          />
        </div>
        <div className="border-[#FE6C0B] bg-[#FE6C0B] p-2 rounded-md">
          <Link href="/code/create">
            <PlusCircleIcon className="w-6 text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Search;
