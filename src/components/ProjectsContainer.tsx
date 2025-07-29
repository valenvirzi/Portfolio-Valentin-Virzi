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
      id: "project1",
      title: "LoadUp - Gym App",
      description:
        "A workout companion app that tracks your weightlifting progress over time and displays it graphically.",
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
        {
          name: "Zustand",
          svgURL: "zustand",
        },
        {
          name: "Vite.js",
          svgURL: "vite",
        },
      ],
      imgURL: "https://i.postimg.cc/XNR1XCkK/Load-up-preview.png",
      icon: "https://www.svgrepo.com/show/475554/gym.svg",
      githubLink: "https://github.com/valenvirzi/Load-Up/",
      deployLink: "https://load-up-valentin-virzi.vercel.app/",
    },
    {
      id: "project2",
      title: "Climatic - Weather App",
      description:
        "An intuitive weather app that provides real-time weather updates, a 5-day forecast, and location-based data.",
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
        {
          name: "Vite.js",
          svgURL: "vite",
        },
      ],
      imgURL: "https://i.postimg.cc/cHV9knLf/image-2025-02-28-195106993.png",
      icon: "https://www.svgrepo.com/show/530233/weather.svg",
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
