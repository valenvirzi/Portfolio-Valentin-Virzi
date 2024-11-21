import { NavLink } from "react-router-dom";

interface SidebarProps {
  isMenuOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 transform xl:hidden ${
        isMenuOpen
          ? "translate-x-0 shadow-[-4px_0_6px_0_rgba(0,0,0,0.3)]"
          : "translate-x-full"
      } z-20 w-64 bg-[#003049] text-[#FDF0D5] transition-transform duration-300 ease-in-out`}
    >
      <nav className="mt-20">
        <ul className="flex flex-col gap-1">
          <li className="flex">
            <NavLink className="w-full p-4 pl-10" to={`/`}>
              Home
            </NavLink>
          </li>
          <hr className="ml-10 h-px w-1/12 bg-[#FDF0D5]" />
          <li className="flex">
            <NavLink className="w-full p-4 pl-10" to={`/projects`}>
              Projects
            </NavLink>
          </li>
          <hr className="ml-10 h-px w-1/12 bg-[#FDF0D5]" />
          <li className="flex">
            <a
              className="w-full p-4 pl-10"
              href="https://drive.google.com/file/d/1Iiors2L5HU9xHhLC5d0DhUeQzdpsFS0K/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <hr className="ml-10 h-px w-1/12 bg-[#FDF0D5]" />
          <li className="flex">
            <a className="w-full p-4 pl-10" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
