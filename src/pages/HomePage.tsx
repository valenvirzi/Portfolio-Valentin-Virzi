import { Link } from "react-router-dom";
import ProjectsContainer from "../components/ProjectsContainer";
import SkillsContainer from "../components/SkillsContainer";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="relative bg-black bg-[url('https://i.postimg.cc/hjybdkkw/code.avif')] bg-cover bg-no-repeat px-6 py-6 text-[#FDF0D5] md:bg-contain md:bg-right-top lg:px-8 lg:py-10 xl:px-12 2xl:px-14 2xl:py-10">
        <div className="absolute inset-0 bg-[#003049] opacity-75"></div>
        <div className="relative z-10 flex flex-col gap-4 lg:gap-6 2xl:gap-10">
          <h1 className="text-3xl font-semibold lg:text-5xl 2xl:text-7xl">
            VALENTIN VIRZI
          </h1>
          <p className="text-base md:w-4/5 lg:w-2/3 lg:text-lg xl:w-2/5 2xl:text-xl">
            Frontend Developer proficient in ReactJS, TypeScript and tools such
            as Tailwind, Git{" "}
            <a className="underline underline-offset-4" href="#skills">
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
              className="rounded bg-[#C1121F] px-6 py-3 text-center text-[#FDF0D5] hover:bg-[#780000] max-md:w-full lg:px-8"
              to={"/projects"}
            >
              Projects
            </Link>
            <a
              className="rounded bg-[#780000] px-6 py-3 text-center text-[#FDF0D5] hover:bg-[#C1121F] max-md:w-full lg:px-8"
              href="https://drive.google.com/file/d/1qr30gxkmzNNj03SeGhQWIzWkxsejyweY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 bg-[#669BBC] px-4 py-6 lg:gap-8 lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        <h2 className="text-2xl font-bold text-[#FDF0D5] md:text-3xl">
          Some of my Projects
        </h2>
        <ProjectsContainer />
      </section>
      <div id="skills" className="relative bottom-20"></div>
      <section className="flex flex-col gap-6 bg-[#003049] px-6 py-6 text-[#FDF0D5] lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        <div className="flex flex-col gap-4">
          <h3 className="self-center text-2xl font-semibold md:text-3xl">
            My Skills
          </h3>
          <SkillsContainer />
        </div>
      </section>
      <section className="flex flex-col gap-6 bg-[#669BBC] px-6 py-6 text-[#FDF0D5] lg:px-8 lg:py-10 xl:px-12 2xl:px-14">
        <h2 className="self-center text-2xl font-bold md:text-3xl">About Me</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 text-pretty xl:w-2/5">
            <h4 className="text-xl lg:text-2xl">Hey, I'm Valentin!</h4>
            <p className="lg:text-lg">
              Since I was a child, I've been passionate about solving logical
              challenges. I still remember when my aunt introduced me to Sudoku
              at age 8, it sparked a love for problem-solving that's stuck with
              me ever since. By 15, I was competing in school math contests and
              even reached the state level.
            </p>
            <p className="lg:text-lg">
              In addition to academics, I earned my{" "}
              <a
                className="underline underline-offset-4 hover:text-[#C1121F]"
                href="https://drive.google.com/file/d/1FjKJgEM2m_mlG9ZJx5mduKFYpt4N1Q6E/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                First Certificate in English
              </a>
              , which helped me broaden my communication skills and opened new
              opportunities for growth and learning.
            </p>
            <p className="lg:text-lg">
              After high school, I pursued a certification as a Personal Trainer
              and enjoyed helping others improve themselves. But eventually, I
              felt like I had hit a ceiling, I craved a new challenge. That's
              when a teacher introduced me to programming, and I was instantly
              hooked.
            </p>
            <p className="lg:text-lg">
              While working my day job delivering fish, I began teaching myself
              to code. In 2024, I decided to fully commit to this new path. I
              enrolled in the Web Development program at the University of La
              Matanza, and I'm now focused on building a career in software
              development.
            </p>
            <p className="lg:text-lg">
              I'm excited to keep learning, growing, and solving new problems,
              this time with code.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
