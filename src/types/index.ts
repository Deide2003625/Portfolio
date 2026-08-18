export interface Experience {
  id: string;
  company: string;
  position: string;
  type: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}
