'use client';
import { Folder, Tag } from '@/app/lib/definitions';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Code from './Code';

const Form = ({ folders }: { folders: Folder[] }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [codeText, setcodeText] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleFolderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedFolder(selectedValue);
  };

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setcodeText(event.target.value);
  };

  const addTag = (tags: Tag[]) => {
    setTags(tags);
  };

  const renderTag = (props: any) => {
    const { tag, key, disabled, onRemove, getTagDisplayValue, ...other } =
      props;

    return (
      <span key={key} className="bg-[#FE6C0B] p-1.5 mr-2 rounded-md mt-1.5">
        {getTagDisplayValue(tag)}
        {!disabled && (
          <a className="ml-2" onClick={() => onRemove(key)}>
            X
          </a>
        )}
      </span>
    );
  };

  console.log(isPreview);
  return (
    <div className="w-full px-4 md:w-2/3 md:px-0 mx-auto">
      <div className="py-10">
        <Link href="/dashboard/folder/AllSnippets" className="underline">
          <span className="flex">
            <ArrowLeftIcon className="w-6 mr-2" />
            Back to Dashboard
          </span>
        </Link>
      </div>
      <form className="mb-10">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7">
              Add a Code Snippet
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6"
                >
                  Title of Snippet
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. React login form"
                    autoComplete="title"
                    className="block w-full text-slate-900 px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="flex justify-between">
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium leading-6"
                  >
                    Code
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsPreview(!isPreview)}
                  >
                    Preview {!isPreview ? 'off' : 'on'}
                  </button>
                </div>

                <div className="mt-2">
                  {!isPreview ? (
                    <textarea
                      id="code"
                      name="code"
                      rows={3}
                      value={codeText}
                      onChange={handleCodeChange}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  ) : (
                    <Code codeString={codeText} />
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Paste in your code snippet
                </p>
              </div>
              {folders.length && (
                <div className="sm:col-span-3">
                  <label
                    htmlFor="folder"
                    className="block text-sm font-medium leading-6"
                  >
                    Choose a folder
                  </label>
                  <div className="mt-2">
                    <select
                      id="customer"
                      name="customerId"
                      className="block w-full text-slate-900 rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-900"
                      onChange={handleFolderChange}
                      value={selectedFolder}
                      defaultValue=""
                      aria-describedby="customer-error"
                    >
                      <option value="" disabled>
                        Select a customer
                      </option>
                      {folders.map((folder) => (
                        <option key={folder.id} value={folder.name}>
                          {folder.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6"
                >
                  Add Tags
                </label>
                <div className="mt-2">
                  <TagsInput
                    renderTag={renderTag}
                    value={tags}
                    onChange={addTag}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href={'/dashboard/folder/AllSnippets'}
            className="text-sm font-semibold leading-6 text-gray-400"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-[#FE6C0B] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FE6C0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE6C0B]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
