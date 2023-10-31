import styles from '@/app/page.module.css';
import Image from 'next/image';

const UserProfile = () => {
  return (
    <section
      className={`${styles.user} flex flex-col justify-center items-center p-4 border-b-2 border-[#1b1b1b] mb-4`}
    >
      <Image
        priority
        src="/user.png"
        width={100}
        height={100}
        alt="Picture of author"
      />
      <h3>John Doe</h3>
    </section>
  );
};

export default UserProfile;
