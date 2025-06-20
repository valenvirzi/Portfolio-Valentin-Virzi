import { Project } from "../types/types";
import SkillCard from "./SkillCard";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col gap-3 overflow-hidden rounded bg-[#003049] pb-4 text-[#FDF0D5] shadow-[0px_3px_6px_0_rgba(0,0,0,0.35)] md:max-w-sm lg:max-w-xs">
      <div className="bg-black p-4">
        <img className="rounded" src={project.imgURL} alt="" />
      </div>
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex flex-wrap justify-center gap-2 px-4 *:lg:p-2 *:lg:text-base *:xl:px-2">
          {project.techStack.map((tech) => {
            return <SkillCard skill={tech} key={tech.name} />;
          })}
        </div>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-center gap-2">
            <img className="w-8" src={project.icon} alt="app icon" />
            <h3 className="text-xl font-semibold xl:text-xl">
              {project.title}
            </h3>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="flex items-center justify-between gap-2 px-4 text-sm 2xl:text-base">
          <a
            className="rounded bg-[#C1121F] px-3 py-2 text-[#FDF0D5] hover:bg-[#780000] md:px-4"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Code
          </a>
          <a
            className="rounded bg-[#780000] px-3 py-2 text-[#FDF0D5] hover:bg-[#C1121F] md:px-4"
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Deploy
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
