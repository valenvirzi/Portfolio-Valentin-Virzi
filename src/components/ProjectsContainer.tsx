import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/types";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectsContainerProps {
  renderAll?: boolean;
}
const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  renderAll = false,
}) => {
  const [visibleProjects, setVisibleProjects] = useState<number>(
    renderAll ? 100 : 3,
  );

  const handleViewMore = () => {
    if (visibleProjects < 6) {
      setVisibleProjects(6);
    }
  };

  const projectList: Project[] = [
    {
      id: "1",
      title: "Climatic - Weather App",
      description:
        "A web app that has nothing to envy from real weather apps. I use it myself to get the latest forecast info.",
      techStack: [
        {
          name: "TypeScript",
          svgURL: "typescript",
        },
        {
          name: "ReactJs",
          svgURL: "react",
        },
        {
          name: "Tailwind CSS",
          svgURL: "tailwind",
        },
      ],
      imgURL: "https://i.postimg.cc/7ZSbF1mc/image-2025-02-27-101934619.png",
      githubLink: "https://github.com/valenvirzi/weather-app",
      deployLink: "https://weather-app-valentin-virzi.vercel.app",
    },
  ];

  return (
    <div className="flex flex-col gap-4 xl:w-full xl:gap-6">
      <div className="grid gap-4 lg:flex lg:flex-wrap lg:justify-center xl:gap-6">
        {projectList.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex"
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      {projectList.length < 4 ? (
        <></>
      ) : renderAll ? (
        <></>
      ) : (
        <div className="flex items-center justify-center">
          {visibleProjects <= 3 ? (
            <button
              onPointerDown={handleViewMore}
              className="rounded bg-[#C1121F] px-6 py-3 text-center text-[#FDF0D5] hover:bg-[#780000] max-md:w-full lg:px-8"
              type="button"
            >
              See more
            </button>
          ) : (
            <Link
              className="rounded bg-[#C1121F] px-6 py-3 text-center text-[#FDF0D5] hover:bg-[#780000] max-md:w-full lg:px-8"
              to="/projects"
            >
              See all
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsContainer;
