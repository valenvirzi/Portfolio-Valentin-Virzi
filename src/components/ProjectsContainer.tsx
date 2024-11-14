import ProjectCard from "./ProjectCard";
import { Project } from "../types/types";

const ProjectsContainer: React.FC = () => {
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
  ];
  {
    /*
        TODO: Make the container fetch the project list from a database and then render each project.
        TODO: Put a limit to the number of projects rendered and a button to show more followed by a link to see all projects on a separate page.
    
        */
  }
  return (
    <div className="grid gap-4">
      {projectList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
