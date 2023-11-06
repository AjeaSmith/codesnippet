'use client';
import { FolderIcon, StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Favorites', href: '/dashboard/folder/Favorites', icon: StarIcon },
  {
    name: 'All Snippets',
    href: '/dashboard/folder/AllSnippets',
    icon: FolderIcon,
  },
  {
    name: 'Recommended',
    href: '/dashboard/folder/Recommended',
    icon: FolderIcon,
  },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="mb-5">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] px-[2rem] grow items-center gap-2 text-sm font-medium hover:bg-[#131415] md:flex-none md:justify-start mb-2',
              {
                'bg-[#fe6c0b]': pathname === link.href,
                'hover:bg-[#fe6c0b]': pathname === link.href,
              }
            )}
          >
            {link.name === 'Favorites' ? (
              <LinkIcon className="w-6 text-[#FCCA46]" />
            ) : (
              <LinkIcon
                className={clsx('w-6', {
                  'text-[#F4FAFF]': pathname === link.href,
                  'text-[#FE6C0B]': pathname !== link.href,
                })}
              />
            )}

            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
