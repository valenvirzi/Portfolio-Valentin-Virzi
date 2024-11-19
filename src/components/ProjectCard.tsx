import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col gap-3 overflow-hidden rounded bg-white pb-4 shadow-[0px_3px_6px_0_rgba(0,0,0,0.24)] md:max-w-sm lg:max-w-xs">
      <img
        src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex h-full flex-col justify-between gap-3">
        <div className="flex flex-col gap-4 px-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="flex items-center justify-between gap-2 px-4 text-sm 2xl:text-base">
          <a
            className="rounded bg-[#fb8500] px-4 py-2 text-black"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Code
          </a>
          <a
            className="rounded border bg-white px-4 py-2 text-black"
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
