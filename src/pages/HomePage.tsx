import { Link } from "react-router-dom";
import ProjectsContainer from "../components/ProjectsContainer";
import SkillsContainer from "../components/SkillsContainer";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="relative bg-black bg-[url('./code.avif')] bg-cover bg-no-repeat px-6 py-6 text-white md:bg-contain md:bg-right-top lg:px-8 lg:py-10 xl:px-12 2xl:px-14 2xl:py-10">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-col gap-4 lg:gap-6 2xl:gap-10">
          <h1 className="text-3xl font-semibold lg:text-5xl 2xl:text-7xl">
            VALENTIN VIRZI
          </h1>
          {/* TODO: Make the "and more" text be a link to the about section where I list my tech stack. */}
          <p className="text-base lg:text-lg 2xl:text-xl">
            Frontend Developer proficient in ReactJS, TypeScript and tools such
            as Tailwind, Git{" "}
            <a
              className="text-[#fb8500] underline underline-offset-4"
              href="#skills"
            >
              and more
            </a>
            . With a keen eye for design, I can deliver responsive,
            user-friendly interfaces and engaging digital experiences.
          </p>
          <p className="text-base lg:text-lg 2xl:text-xl">
            Let's bring new solutions to life.
          </p>
          <div className="mt-2 flex items-center gap-4 max-md:justify-between lg:gap-6 lg:text-lg">
            <Link
              className="rounded bg-[#fb8500] px-6 py-3 text-center text-black max-md:w-full lg:px-8"
              to={"/projects"}
            >
              Projects
            </Link>
            <a
              className="rounded bg-white px-6 py-3 text-center text-black max-md:w-full lg:px-8"
              href="https://drive.google.com/file/d/1Iiors2L5HU9xHhLC5d0DhUeQzdpsFS0K/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 bg-gray-200 px-4 py-6 lg:gap-8 lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        <h2 className="text-2xl font-bold lg:text-3xl">Some of my Projects</h2>
        <ProjectsContainer />
      </section>
      <div id="skills" className="relative bottom-20"></div>
      <section className="flex flex-col gap-6 bg-black px-6 py-6 text-white lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        <div className="flex flex-col gap-4">
          <h3 className="self-center text-2xl font-semibold lg:text-3xl">
            My Skills
          </h3>
          <SkillsContainer />
        </div>
      </section>
      <section className="flex flex-col gap-6 px-6 py-6 lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        {/* TODO: Design this section for bigger screens */}
        <h2 className="self-center text-2xl font-bold lg:text-3xl">About Me</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-pretty">
            <h4 className="text-xl lg:text-2xl">Hey, I'm Valentin!</h4>
            <p className="lg:text-lg">
              I crossed paths with the world of coding thanks to my
              tech-enthusiast friends. Once I started making my own apps, I got
              hooked! The amount of cool stuff one can create with just a bit of
              code completely blew my mind.
            </p>
            <p className="lg:text-lg">
              I have always been all about learning new things. That's why,
              besides being certified in personal training and studying Web
              Development at college, I've been also brushing up on my English
              since I was a little kid. Bagged a Cambridge B2 certificate along
              the way to prove it!
            </p>
            <p className="lg:text-lg">
              Hope I can join you soon and start building great things together!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
