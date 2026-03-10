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

export type ProjectCategory = "Software" | "Embedded" | "Full Stack Web Application";

/** Optional image with subtitle for project modal gallery */
export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  category: ProjectCategory;
  architecture: string[];
  highlights: string[];
  /** Optional gallery images with captions for the project modal */
  images?: ProjectImage[];
  demoUrl?: string;
  githubUrl?: string;
};
