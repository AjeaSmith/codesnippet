'use client';
import { CodeSnippet, Folder } from '@/app/lib/definitions';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import CodeView from './Code';
import { updateSnippetById } from '@/app/lib/actions';

const EditForm = ({
  codeSnippet,
  folders,
}: {
  codeSnippet: CodeSnippet | null;
  folders: Folder[];
}) => {
  const { register, handleSubmit, control } = useForm<CodeSnippet>();

  const codeLanguages = SyntaxHighlighter.supportedLanguages;
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    codeSnippet!.language
  );
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [codeText, setcodeText] = useState<string>(codeSnippet!.code);

  const onSubmit: SubmitHandler<CodeSnippet> = (data) => {
    updateSnippetById(codeSnippet!.id, data);
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

  return (
    <div className="w-full px-4 md:w-4/6 md:px-0 mx-auto">
      <div className="py-10">
        <Link href="/dashboard/folder/AllSnippets" className="underline">
          <span className="flex">
            <ArrowLeftIcon className="w-6 mr-2" />
            Back to Dashboard
          </span>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7">
              Edit Code Snippet
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
                    {...register('title')}
                    defaultValue={codeSnippet?.title}
                    placeholder="e.g. React login form"
                    autoComplete="title"
                    className="block w-full text-slate-900 px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium leading-6 w-2/4"
                  >
                    Code
                  </label>
                  <div className="flex items-center w-2/4 justify-end">
                    <select
                      {...register('language')}
                      className="block mr-4 text-slate-900 rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-900"
                      defaultValue={codeSnippet?.language}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                      <option value="" disabled>
                        Select language
                      </option>
                      {codeLanguages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => setIsPreview(!isPreview)}
                    >
                      Preview {isPreview ? 'off' : 'on'}
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  {!isPreview ? (
                    <textarea
                      {...register('code')}
                      rows={3}
                      defaultValue={codeText}
                      onChange={(e) => setcodeText(e.target.value)}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  ) : (
                    <CodeView
                      codeString={codeText}
                      language={selectedLanguage}
                    />
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
                      {...register('folderId')}
                      className="block w-full text-slate-900 rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-900"
                      aria-describedby="folder-error"
                    >
                      <option value="" disabled>
                        Select a folder
                      </option>
                      {folders.map((folder) => (
                        <option key={folder.id} value={folder.id}>
                          {folder.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <div className="col-span-full">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium leading-6"
                >
                  Add Tags
                </label>
                <div className="mt-2">
                  <Controller
                    name="tags"
                    control={control}
                    defaultValue={codeSnippet?.tags}
                    render={({ field }) => (
                      <TagsInput
                        renderTag={renderTag}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
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

export default EditForm;
