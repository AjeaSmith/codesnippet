'use client';
import { Folder } from '@/app/_types/Folder';
import { deleteFolder } from '@/utils/folders/actions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Folder = ({ folder }: { folder: Folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultFolders] = useState([
    'All Snippets',
    'Favorites',
    'Recommended',
  ]);

  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname).replace(/%20/g, ' ');

  const removeFolder = async (folderId: string) => {
    await deleteFolder(folderId);
  };
  return (
    <li className="flex justify-between relative">
      <Link className="w-full" href={`/folder/${folder.name}`}>
        <div
          className={`flex items-center px-[2rem] py-[1rem] hover:cursor-pointer hover:bg-[#131415] ${
            decodedPathname == `/folder/${folder.name}` ? `bg-[#fe6c0b]` : ''
          }`}
        >
          {folder.name === 'Favorites' ? (
            <svg
              className="mr-[8px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9843 10.7231L17.7562 14.4131L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.771C18.8649 21.0474 18.6828 21.2874 18.4443 21.4608C18.2058 21.6343 17.9215 21.7336 17.6268 21.7464C17.3322 21.7591 17.0404 21.6847 16.7878 21.5325L11.9962 18.6263L7.21495 21.5325C6.96236 21.6847 6.6705 21.7591 6.37586 21.7464C6.08122 21.7336 5.79688 21.6343 5.55838 21.4608C5.31988 21.2874 5.13781 21.0474 5.03493 20.771C4.93205 20.4947 4.91292 20.1941 4.97995 19.9069L6.24464 14.4188L2.01557 10.7231C1.79189 10.5302 1.63015 10.2756 1.55063 9.99108C1.4711 9.70661 1.47733 9.40499 1.56855 9.12404C1.65976 8.8431 1.83189 8.59534 2.06335 8.41183C2.29481 8.22832 2.57529 8.11724 2.86964 8.0925L8.44401 7.60969L10.6199 2.41969C10.7336 2.14736 10.9252 1.91474 11.1708 1.75112C11.4164 1.5875 11.7049 1.50019 11.9999 1.50019C12.295 1.50019 12.5835 1.5875 12.8291 1.75112C13.0747 1.91474 13.2663 2.14736 13.3799 2.41969L15.5624 7.60969L21.1349 8.0925C21.4293 8.11724 21.7098 8.22832 21.9412 8.41183C22.1727 8.59534 22.3448 8.8431 22.436 9.12404C22.5272 9.40499 22.5335 9.70661 22.454 9.99108C22.3744 10.2756 22.2127 10.5302 21.989 10.7231H21.9843Z"
                fill="#FCCA46"
              />
            </svg>
          ) : (
            <svg
              className="mr-[8px]"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4231 6.75001H12.4156L9.83339 4.18969C9.69342 4.0498 9.5268 3.93889 9.34322 3.86341C9.15964 3.78792 8.96275 3.74938 8.76401 3.75001H3.78211C3.38088 3.75001 2.99609 3.90804 2.71238 4.18935C2.42867 4.47065 2.26929 4.85218 2.26929 5.25001V18.8081C2.26979 19.1904 2.42316 19.5568 2.69576 19.8271C2.96837 20.0974 3.33796 20.2495 3.72349 20.25H20.5073C20.886 20.2495 21.2491 20.1001 21.517 19.8346C21.7848 19.569 21.9355 19.209 21.936 18.8334V8.25001C21.936 7.85218 21.7766 7.47065 21.4929 7.18935C21.2092 6.90804 20.8244 6.75001 20.4231 6.75001ZM3.78211 5.25001H8.76401L10.2768 6.75001H3.78211V5.25001ZM20.4231 18.75H3.78211V8.25001H20.4231V18.75Z"
                fill={
                  decodedPathname == `/folder/${folder.name}`
                    ? '#F4FAFF'
                    : '#FE6C0B'
                }
              />
            </svg>
          )}
          <span className="w-full flex justify-between items-center">
            <p>{folder.name}</p>
          </span>
        </div>
      </Link>
      {!defaultFolders.includes(folder.name) && (
        <div className="flex absolute right-[20px] top-[20px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#b91c1c"
                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <h3
                            className="text-base font-semibold leading-6 text-gray-900"
                            id="modal-title"
                          >
                            Delete {folder.name}
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this folder? This
                              action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        onClick={() => removeFolder(folder.id)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default Folder;
