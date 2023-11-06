import styles from '@/app/page.module.css';
import { currentUser } from '@clerk/nextjs';
import { ReactNode } from 'react';

const UserProfile = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();

  return (
    <section
      className={`${styles.user} flex flex-col justify-center items-center p-4 border-b-2 border-[#1b1b1b] mb-4`}
    >
      {children}
      <h3 className="mt-3">{user?.firstName}</h3>
    </section>
  );
};

export default UserProfile;
