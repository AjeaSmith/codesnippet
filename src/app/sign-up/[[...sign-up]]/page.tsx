import { SignUp } from '@clerk/nextjs';

const page = () => {
  return (
    <div className="flex flex-col mx-auto items-center py-20">
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
