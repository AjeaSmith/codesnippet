import Sidebar from "../../ui/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
