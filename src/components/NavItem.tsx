import { NavLink } from "react-router-dom";

interface NavItemProps {
  title: string;
  url: string | null;
}

const NavItem: React.FC<NavItemProps> = ({ title, url }) => {
  return (
    <NavLink className="group relative p-3" to={`${url}`}>
      {title}
      <span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
    </NavLink>
  );
};

export default NavItem;
