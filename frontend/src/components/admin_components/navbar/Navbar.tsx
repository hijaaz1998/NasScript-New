import { FaBars } from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white p-4 shadow-md flex items-center justify-between">
      <FaBars className="text-xl cursor-pointer md:hidden" onClick={toggleSidebar} />
      <h1 className="text-2xl font-semibold">Dashboard Header</h1>
    </div>
  );
};

export default Navbar;
