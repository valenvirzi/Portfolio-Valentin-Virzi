import { Skill } from "../types/types";
import SkillCard from "./SkillCard";

const SkillsContainer: React.FC = () => {
  const skillsList: Skill[] = [
    {
      id: "3",
      name: "JavaScript",
      svgURL: "javascript",
    },
    {
      id: "4",
      name: "TypeScript",
      svgURL: "typescript",
    },
    {
      id: "5",
      name: "ReactJs",
      svgURL: "react",
    },
    {
      id: "1",
      name: "HTML",
      svgURL: "html",
    },
    {
      id: "2",
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
      name: "Bootstrap",
      svgURL: "bootstrap",
    },
    {
      id: "9",
      name: "SASS",
      svgURL: "sass",
    },
  ];

  //TODO Make the icons be colored on hover
  return (
    <div className="flex flex-wrap justify-center gap-2 py-2 md:px-2 lg:gap-3">
      {skillsList.map((skill, index) => {
        return <SkillCard key={index} skill={skill} />;
      })}
    </div>
  );
};
export default SkillsContainer;
