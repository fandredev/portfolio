import { backendProjects } from "./data/back-end-projects";
import { frontendProjects } from "./data/front-end-projects";

export interface Projects {
  id: number;
  image: string;
  title: string;
  category: string;
  hrefProject?: string;
  hrefGithub: string;
  techs: string[];
  hasDeployed: boolean;
}

interface ProjectTabs {
  id: number;
  name: string;
}

export const projectsData: Projects[] = [
  ...frontendProjects,
  ...backendProjects,
].map((project, index) => ({ ...project, id: index + 1 }));

export const projectsTabs: ProjectTabs[] = [
  {
    name: "All",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
].map((tab, index) => ({ ...tab, id: index + 1 }));
