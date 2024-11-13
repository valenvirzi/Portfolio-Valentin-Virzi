import { Link } from "react-router-dom";

export default function HomePage() {
  //TODO
  return (
    <main className="flex flex-col">
      <section className="relative bg-black bg-[url('./code.avif')] bg-cover bg-right-top bg-no-repeat px-4 py-6 text-white md:bg-contain lg:px-6 lg:py-8 xl:px-10 2xl:px-14 2xl:py-10">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col gap-4 lg:gap-6 2xl:gap-10">
          <h1 className="text-3xl font-bold lg:text-5xl">VALENTIN VIRZI</h1>
          <p className="text-base lg:text-lg">
            Frontend Developer proficient in HTML, CSS, and JavaScript, along
            with React JS. With a keen eye for design, I can deliver responsive,
            user-friendly interfaces and engaging digital experiences.
          </p>
          <p className="text-base lg:text-lg">
            Let's bring new solutions to life.
          </p>
          <div className="mt-2 flex items-center gap-4 lg:gap-6 lg:text-lg">
            <Link
              className="rounded bg-[#FCA311] px-6 py-3 text-black lg:px-8"
              to={"/projects"}
            >
              Projects
            </Link>
            <a
              className="rounded bg-white px-6 py-3 text-black lg:px-8"
              href="https://drive.google.com/file/d/1Iiors2L5HU9xHhLC5d0DhUeQzdpsFS0K/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-4 py-6 lg:px-6 xl:px-10">
        <h2 className="text-2xl font-bold">Some of my Projects</h2>
      </section>
    </main>
  );
}
