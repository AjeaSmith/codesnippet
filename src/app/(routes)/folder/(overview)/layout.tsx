import Sidebar from '@/app/ui/dashboard/Sidebar';
import React, { ReactNode } from 'react'

const LayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div >
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutPage
