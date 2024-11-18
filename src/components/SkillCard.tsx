import { Skill } from "../types/types";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <article className="flex max-w-fit select-none items-center gap-2 rounded bg-gray-300 bg-opacity-30 p-2 text-white opacity-85 hover:opacity-100 lg:p-3 xl:px-4">
      <img
        className="w-5 lg:w-7"
        src={`./img/${skill.svgURL}.svg`}
        alt={skill.name}
      />
      <span className="font-semibold lg:text-lg">{skill.name}</span>
    </article>
  );
};
export default SkillCard;
