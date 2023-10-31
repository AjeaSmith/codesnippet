import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}

// create types for props when passed down
