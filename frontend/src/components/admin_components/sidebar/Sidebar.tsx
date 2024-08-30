import { FaHome, FaChartBar, FaCog, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/admin')
  };

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
          <li className="flex items-center py-2 hover:bg-gray-800 rounded-md cursor-pointer" onClick={handleLogout}>
            <FaSignOutAlt className="mr-3" />
            <span className="text-gray-300 hover:text-white">Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
