export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  achievements: string[];
};

export type ProjectCategory = "Software" | "Embedded" | "Full Stack";

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  category: ProjectCategory;
  architecture: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
};
