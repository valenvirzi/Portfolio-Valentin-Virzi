import { Skill } from "../types/types";
import SkillCard from "./SkillCard";

const SkillsContainer: React.FC = () => {
  const skillsList: Skill[] = [
    {
      id: "skill0",
      name: "JavaScript",
      svgURL: "javascript",
    },
    {
      id: "skill1",
      name: "TypeScript",
      svgURL: "typescript",
    },
    {
      id: "skill2",
      name: "React JS",
      svgURL: "react",
    },
    {
      id: "skill3",
      name: "Node JS",
      svgURL: "nodeJs",
    },
    {
      id: "skill4",
      name: "HTML",
      svgURL: "html",
    },
    {
      id: "skill5",
      name: "CSS",
      svgURL: "css",
    },
    {
      id: "skill6",
      name: "Tailwind CSS",
      svgURL: "tailwind",
    },
    {
      id: "skill7",
      name: "Java",
      svgURL: "java",
    },
    {
      id: "skill8",
      name: "Git",
      svgURL: "git",
    },
    {
      id: "skill9",
      name: "Zustand",
      svgURL: "zustand",
    },
    {
      id: "skill10",
      name: "Bootstrap",
      svgURL: "bootstrap",
    },
    {
      id: "skill11",
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
