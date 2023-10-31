import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div></div>
      {children}
    </>
  );
}

// create types for props when passed down
export default AppLayout;
