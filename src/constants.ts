import data from './data.json';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
  githubLink?: string;
  features?: string[];
  stats?: { label: string; value: string; icon?: any }[];
}

export interface Skill {
  name: string;
  level?: number;
  category?: string;
  icon?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
}

export const PROJECTS: Project[] = data.projects;
export const SKILLS: Skill[] = data.skills;
export const CERTIFICATES: Certificate[] = data.certificates;
export const ARTA_DATA = data.profile;
export const ARTA_CONTEXT = data.profile.description;
