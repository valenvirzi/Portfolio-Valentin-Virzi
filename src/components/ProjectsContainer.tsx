import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/types";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsContainer: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number>(3);

  const handleViewMore = () => {
    if (visibleProjects < 6) {
      setVisibleProjects(6);
    }
  };

  const projectList: Project[] = [
    {
      id: "1",
      title: "Weather App",
      description:
        "A web app that displays real-time weather information using OpenWeather API.",
      imgURL: "https://example.com/weather-app-image.jpg",
      githubLink: "https://github.com/username/weather-app",
      deployLink: "https://weather-app.example.com",
    },
    {
      id: "2",
      title: "Task Manager",
      description:
        "A task management application with drag-and-drop functionality and a beautiful UI.",
      imgURL: "https://example.com/task-manager-image.jpg",
      githubLink: "https://github.com/username/task-manager",
      deployLink: "https://task-manager.example.com",
    },
    {
      id: "3",
      title: "Recipe Finder",
      description:
        "An app that lets users search for recipes and save their favorites for easy access.",
      imgURL: "https://example.com/recipe-finder-image.jpg",
      githubLink: "https://github.com/username/recipe-finder",
      deployLink: "https://recipe-finder.example.com",
    },
    {
      id: "4",
      title: "Crypto Tracker",
      description:
        "A sleek web application that provides real-time cryptocurrency prices, market trends, and a personalized watchlist.",
      imgURL: "https://example.com/crypto-tracker-image.jpg",
      githubLink: "https://github.com/username/crypto-tracker",
      deployLink: "https://crypto-tracker.example.com",
    },
    {
      id: "5",
      title: "E-Commerce Store",
      description:
        "A fully functional e-commerce platform with product filtering, a shopping cart, and secure checkout integration.",
      imgURL: "https://example.com/e-commerce-store-image.jpg",
      githubLink: "https://github.com/username/e-commerce-store",
      deployLink: "https://ecommerce-store.example.com",
    },
  ];
  {
    /* TODO: Make the container fetch the project list from a database and then render each project. */
  }
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
      <div className="flex items-center justify-center">
        {visibleProjects <= 3 ? (
          <button
            onPointerDown={handleViewMore}
            className="rounded bg-[#fb8500] px-6 py-3 text-center text-black max-md:w-full lg:px-8"
            type="button"
          >
            See more
          </button>
        ) : (
          <Link
            className="rounded bg-[#fb8500] px-6 py-3 text-center text-black max-md:w-full lg:px-8"
            to="/projects"
          >
            See all
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;
