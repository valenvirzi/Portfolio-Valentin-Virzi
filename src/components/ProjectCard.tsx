import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col gap-3 overflow-hidden rounded bg-[#003049] pb-4 text-[#FDF0D5] shadow-[0px_3px_6px_0_rgba(0,0,0,0.35)] md:max-w-sm lg:max-w-xs">
      <img
        src="https://i.pinimg.com/736x/01/c3/3b/01c33b9fa7c038b0710530ee2019d5ee.jpg"
        alt=""
      />
      <div className="flex h-full flex-col justify-between gap-3">
        <div className="flex flex-col gap-4 px-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="flex items-center justify-between gap-2 px-4 text-sm 2xl:text-base">
          <a
            className="rounded bg-[#C1121F] px-4 py-2 text-[#FDF0D5] hover:bg-[#780000]"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Code
          </a>
          <a
            className="rounded bg-[#780000] px-4 py-2 text-[#FDF0D5] hover:bg-[#C1121F]"
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
