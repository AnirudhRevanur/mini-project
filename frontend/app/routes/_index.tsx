import Sidebar from "~/components/Sidebar";
import Workspace from "~/components/Workspace";

export default function Index() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100">
        <Sidebar />
      </div>

      <div className="w-2/3 bg-white">
        <Workspace />
      </div>
    </div>
  );
}
