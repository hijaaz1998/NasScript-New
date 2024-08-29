import { FaHome, FaChartBar, FaCog, FaArrowLeft } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-900 text-white w-64 h-screen p-4 fixed md:relative transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <FaArrowLeft onClick={toggleSidebar} className="block md:hidden" size={20} color="#fff" />
      </div>
      <nav>
        <ul>
          <li className="flex items-center py-2 hover:bg-gray-800 rounded-md">
            <FaHome className="mr-3" />
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-800 rounded-md">
            <FaChartBar className="mr-3" />
            <a href="#" className="text-gray-300 hover:text-white">
              Analytics
            </a>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-800 rounded-md">
            <FaCog className="mr-3" />
            <a href="#" className="text-gray-300 hover:text-white">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
