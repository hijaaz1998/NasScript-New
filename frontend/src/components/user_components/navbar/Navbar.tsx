import { Link } from "react-router-dom";
import SocialMedia from "../common/SocialMedia";

const Navbar = () => {
  return (
    <div className="z-50 bg-white sticky top-0 left-0 right-0 shadow-md">
      <header className="flex cursor-pointer  text-black items-center mx-auto max-w-screen-xl container justify-between h-[5rem]">
        <div className="w-[56px] h-[63px]">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=112,fit=crop,q=95/m7V8PnDoX2ur9GvK/whatsapp-image-2023-10-15-at-22.21.49_prev_ui-dOqlV8w8rnUPzopk.png"
            alt=""
          />
        </div>

        <ul className="md:flex gap-7 hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <SocialMedia className="hidden md:flex" />
      </header>
    </div>
  );
};
export default Navbar;
