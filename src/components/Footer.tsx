import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-8 bg-[#003049] px-6 py-6 text-[#FDF0D5] lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="self-center text-2xl font-semibold md:text-3xl">
            Contact Me
          </h3>
        </div>
        <ul
          id="contact"
          className="flex flex-col gap-2 self-center max-xl:items-center lg:gap-3 xl:w-3/4 xl:flex-row xl:justify-evenly 2xl:w-2/3"
        >
          <li className="flex items-center gap-2">
            <img className="w-6" src="./img/email.svg" alt="Email" />
            <span>v.virzi@hotmail.com</span>
          </li>
          <li className="">
            <a
              className="flex items-center gap-2"
              href="https://www.linkedin.com/in/valentin-virzi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6" src="./img/linkedin.svg" alt="LinkedIn" />
              <span>linkedin.com/in/valentin-virzi</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img className="w-6" src="./img/whatsapp.svg" alt="Phone number" />
            <span>+54 9 29 4441 2403</span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-6">
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
          Copyright © 2025 | All rights reserved | Valentin Virzi
        </p>
      </section>
    </footer>
  );
};

export default Footer;
