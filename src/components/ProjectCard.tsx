import { Project } from "../types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // TODO: Design Project Card
  {
    /*
    TODO: Make it take following Props: 
    - Name
    - Description
    - Link to GitHub Repository
    - Link to Deployed Project
    - Preview img

    */
  }
  return (
    <article className="flex flex-col overflow-hidden rounded bg-gray-300">
      <div className="flex flex-col gap-4 p-5 pb-0">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2 p-5 text-sm">
        <a
          className="rounded bg-[#fb8500] px-4 py-2 text-black lg:px-8"
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Code
        </a>
        <a
          className="rounded bg-white px-4 py-2 text-black lg:px-8"
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Deploy
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
