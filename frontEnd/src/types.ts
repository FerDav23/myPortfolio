export type SkillCategory = {
  title: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  certificate?: string;
  graduation: string;
  coursework: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  achievements: string[];
};

export type ProjectCategory = "Software" | "Embedded" | "Full Stack Web Application" | "Mobile App";

/** Optional image with subtitle for project modal gallery */
export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Optional short title to display with the image */
  title?: string;
  /** Optional longer description to display with the image */
  description?: string;
  /** When true, render in a phone-style frame (narrower, simulates device) */
  phoneFrame?: boolean;
};

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  /** One or more categories this project belongs to */
  categories: ProjectCategory[];
  architecture: string[];
  highlights: string[];
  /** Optional gallery images with captions for the project modal */
  images?: ProjectImage[];
  /** Optional title for the images/gallery section in the project modal */
  imagesSectionTitle?: string;
  /** Optional description shown under the images section title */
  imagesSectionDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
  /** Optional YouTube URL for an embedded demo in the project modal */
  youtubeUrl?: string;
  /** Optional title to show above the embedded YouTube video */
  youtubeTitle?: string;
};
