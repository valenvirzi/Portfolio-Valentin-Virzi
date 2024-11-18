export interface Project {
  id: string;
  title: string;
  description: string;
  imgURL: string;
  githubLink: string;
  deployLink: string | undefined;
}

export interface Skill {
  id: string;
  name: string;
  svgURL: string;
}
