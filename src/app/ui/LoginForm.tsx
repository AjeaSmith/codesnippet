'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRef } from 'react';
import InputBox from './InputBox';

const LoginPage = () => {
  const userName = useRef('');
  const pass = useRef('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('Credentials', {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.error) {
      //   router.push(props.callbackUrl ?? 'http://localhost:3000');
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <Image src="/code.png" width={100} height={100} alt="code logo" />
        <h1 className="text-3xl mb-2">Welcome to Snippet Keeper</h1>
        <p className="text-lg italic font-light">
          All your code snippets in one place!
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form>
          <InputBox
            name="email"
            id="email"
            type="email"
            required
            labelText="Email Address"
            placeholder='e.g. mail@example.com'
          />
          <InputBox
            name="password"
            id="password"
            type="password"
            required
            labelText="Password"
          />

          <div className="mt-14">
            <button
              type="submit"
              className="flex mb-5 w-full justify-center rounded-md bg-[#FE6C0B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FE6C0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-[#FE6C0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
