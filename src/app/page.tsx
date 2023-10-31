import React, { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

function AppPage({ children }: PageProps) {
  return <div>{children}</div>;
}

export default AppPage;
