
export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  client?: string;
  role: string;
  date: string;
  environment: string[];
  aboutClient: string;
  responsibilities: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: string;
}
