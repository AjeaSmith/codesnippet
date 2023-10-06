import Image from 'next/image';

export default function SideBarMenu() {
  return (
    <aside>
      {/* USER */}
      <section>
        <Image
          src="/user.png"
          width={100}
          height={100}
          alt="Picture of author"
        />
        <h3>John Doe</h3>
      </section>

      {/* FOLDERS */}
      <section>
        <h5>Folders</h5>
        {/* Data fetching for folders */}
        <ul>
          <div>
            <Image src="/star.png" width={24} height={24} alt="star" />
            <li>Favorites</li>
          </div>
          <div>
            <Image src="/folder.png" width={24} height={24} alt="folder" />
            <li>All Snippets</li>
          </div>
          <div>
            <Image src="/folder.png" width={24} height={24} alt="folder" />
            <li>Recommended</li>
          </div>
        </ul>
      </section>

      {/* CTA New Folder */}
      <section>
        <button>
          <Image src="/plus.png" alt="plus" width={24} height={24} /> New Folder
        </button>
      </section>
    </aside>
  );
}
