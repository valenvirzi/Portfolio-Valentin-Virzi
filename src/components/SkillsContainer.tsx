import { Skill } from "../types/types";
import SkillCard from "./SkillCard";

const SkillsContainer: React.FC = () => {
  const skillsList: Skill[] = [
    {
      id: "0",
      name: "JavaScript",
      svgURL: "javascript",
    },
    {
      id: "1",
      name: "TypeScript",
      svgURL: "typescript",
    },
    {
      id: "2",
      name: "React JS",
      svgURL: "react",
    },
    {
      id: "3",
      name: "Node JS",
      svgURL: "nodeJs",
    },
    {
      id: "4",
      name: "HTML",
      svgURL: "html",
    },
    {
      id: "5",
      name: "CSS",
      svgURL: "css",
    },
    {
      id: "6",
      name: "Tailwind CSS",
      svgURL: "tailwind",
    },
    {
      id: "7",
      name: "Git",
      svgURL: "git",
    },
    {
      id: "8",
      name: "Zustand",
      svgURL: "zustand",
    },
    {
      id: "9",
      name: "Bootstrap",
      svgURL: "bootstrap",
    },
    {
      id: "10",
      name: "SASS",
      svgURL: "sass",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 py-2 md:px-2 lg:gap-3">
      {skillsList.map((skill, index) => {
        return <SkillCard key={index} skill={skill} />;
      })}
    </div>
  );
};
export default SkillsContainer;
