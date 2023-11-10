import Sidebar from '../ui/dashboard/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className="grid grid-rows-[70px_100px] gap-4 w-full">{children}</div>
    </div>
  );
}
