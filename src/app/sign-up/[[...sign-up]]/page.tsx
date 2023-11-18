import { SignUp } from '@clerk/nextjs';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const page = () => {
  return (
    <div className="flex flex-col mx-auto items-center py-8">
      <CodeBracketIcon className="w-[100px] h-[100px] text-[#FE6C0B]" />
      <div className="text-center mb-3">
        <h1 className="text-4xl mt-10 mb-2">Welcome to Snippet Keeper</h1>
        <p className="italic font-light mb-8 text-[#F4FAFF] text-[24px] text-opacity-80">
          All your code snippets in one place!
        </p>
      </div>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#FE6C0B] text-sm normal-case',
          },
        }}
      />
    </div>
  );
};

export default page;
