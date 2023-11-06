import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex flex-col mx-auto items-center py-20">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-[#FE6C0B] text-sm normal-case',
          },
        }}
      />
    </div>
  );
}
