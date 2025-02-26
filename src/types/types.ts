export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: Skill[];
  imgURL: string;
  githubLink: string;
  deployLink: string | undefined;
}

export interface Skill {
  id?: string;
  name: string;
  svgURL: string;
}
