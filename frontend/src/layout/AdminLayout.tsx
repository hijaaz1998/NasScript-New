import { useState } from "react";
import Sidebar from "../components/admin_components/sidebar/Sidebar";
import Navbar from "../components/admin_components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
