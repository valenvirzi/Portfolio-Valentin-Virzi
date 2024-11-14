import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./SideBar";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex select-none items-center justify-between gap-4 bg-black px-4 py-4 text-white shadow-[0px_5px_6px_0_rgba(0,0,0,0.3)] lg:px-6 xl:px-10 2xl:px-14">
      <Link className="rounded-sm shadow-[0_0_0_2px_rgba(255,255,255)]" to="/">
        <div className="flex items-center justify-between px-4">
          <span className="mb-1 text-center text-5xl font-normal tracking-tight xl:text-6xl">
            V V
          </span>
        </div>
      </Link>
      <button className="z-50 xl:hidden" type="button">
        <Hamburger rounded toggled={isMenuOpen} onToggle={handleToggleMenu} />
      </button>
      <Sidebar isMenuOpen={isMenuOpen} />
      {isMenuOpen && (
        <div
          onPointerDown={handleToggleMenu}
          className="fixed inset-0 z-10 bg-black bg-opacity-35"
        />
      )}
      <ul className="hidden items-center gap-4 xl:flex 2xl:text-lg">
        <li>
          <NavLink className="group relative p-3" to="/">
            Home
            <span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </NavLink>
        </li>
        <hr className="h-4 w-px bg-white" />
        <li>
          <NavLink className="group relative p-3" to="/projects">
            Projects
            <span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </NavLink>
        </li>
        <hr className="h-4 w-px bg-white" />
        <li>
          <a
            className="group relative p-3"
            href="https://drive.google.com/file/d/1Iiors2L5HU9xHhLC5d0DhUeQzdpsFS0K/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </li>
        <hr className="h-4 w-px bg-white" />
        <li>
          {/* TODO: Make contact link work on all subpages. Right now it only works on the Home Page */}
          <a className="group relative p-3" href="#contact">
            Contact
            <span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
