import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 bg-[#003049] px-6 py-6 text-[#FDF0D5] lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
      {/* TODO: Design this section for bigger screens */}
      <Link
        className="w-fit self-center rounded-sm shadow-[0_0_0_2px_#FDF0D5]"
        to="/"
      >
        <div className="flex items-center justify-between px-4">
          <span className="mb-1 text-center text-5xl font-normal tracking-tight xl:text-6xl">
            V V
          </span>
        </div>
      </Link>
      <p className="self-center text-center">
        Copyright © 2024 | All rights reserved | Valentin Virzi
      </p>
    </footer>
  );
};

export default Footer;
