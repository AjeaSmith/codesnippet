'use client';
import { createSnippet } from '@/app/lib/actions';
import { CodeSnippet, Folder } from '@/app/lib/definitions';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SyntaxHighlighter from 'react-syntax-highlighter';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import CodeView from './CodeView';

const Form = ({ folders }: { folders: Folder[] }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CodeSnippet>();

  const codeLanguages = SyntaxHighlighter.supportedLanguages;

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('javascript');

  const [codeText, setcodeText] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const onSubmit: SubmitHandler<CodeSnippet> = async (data) => {
    await createSnippet(data).then(() => {
      toast.success(`Code Snippet created successfully!`, {
        duration: 4000,
      });
      router.push('/dashboard/folder/AllSnippets');
    });
  };

  const renderTag = (props: any) => {
    const { tag, key, disabled, onRemove, getTagDisplayValue } = props;

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
    <div className="w-full px-4 md:w-4/6 md:px-0 md:max-w-xl mx-auto">
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
                    {...register('title', { required: true })}
                    placeholder="e.g. React login form"
                    autoComplete="title"
                    className="block w-full text-slate-900 px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.title && (
                  <div className="mt-2 text-sm text-red-500">
                    <span>This field is required</span>
                  </div>
                )}
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
                      {...register('language', { required: true })}
                      className="block mr-4 text-slate-900 rounded-md border border-gray-200 py-2 px-2 text-sm outline-2 placeholder:text-gray-900"
                      value={selectedLanguage}
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
                      Preview {isPreview ? 'on' : 'off'}
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  {!isPreview ? (
                    <textarea
                      {...register('code', { required: true })}
                      rows={3}
                      value={codeText}
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
                {errors.code && (
                  <div className="mt-2 text-sm text-red-500">
                    <span>This field is required</span>
                  </div>
                )}
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
                      {...register('folderId', { required: true })}
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
                  {errors.folderId && (
                    <div className="mt-2 text-sm text-red-500">
                      <span>This field is required</span>
                    </div>
                  )}
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
                    defaultValue={[]} // Set the default value as an empty array
                    render={({ field }) => (
                      <TagsInput
                        renderTag={renderTag}
                        value={field.value}
                        {...register('tags', { required: true })}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                {errors.tags && (
                  <div className="mt-2 text-sm text-red-500">
                    <span>This field is required</span>
                  </div>
                )}
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
