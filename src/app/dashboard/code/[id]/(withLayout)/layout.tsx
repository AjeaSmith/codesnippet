import Sidebar from '@/app/ui/dashboard/Sidebar';

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen md:flex-row md:overflow-hidden">
      <Sidebar />
      <div className="grid grid-rows-[70px_100px] gap-4 w-full">{children}</div>
    </div>
  );
}
