import DjangoImage from "assets/backend/django.webp";
import GolangImage from "assets/backend/golang.webp";
import NodeJSImage from "assets/backend/nodejs.webp";
import FastPizzaPage from "assets/clone/fast-pizza.webp";
import ReactQuiz from "assets/clone/react-quiz.webp";
import UICloneBootstrapPage from "assets/clone/ui-clone-bootstrap-page.webp";
import UICloneGithubDesktopPage from "assets/clone/ui-clone-github-desktop-page.webp";
import UICloneNpmPage from "assets/clone/ui-clone-npm-page.webp";
import UICloneSassPage from "assets/clone/ui-clone-sass-page.webp";
import UICloneVSCode from "assets/clone/ui-clone-vscode.webp";
import WorldWise from "assets/clone/world-wise.webp";

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
  {
    id: 1,
    image: FastPizzaPage,
    title: "Fast Pizza",
    category: "frontend",
    hrefProject: "https://fast-pizza-phi.vercel.app/",
    hrefGithub: "https://github.com/fandredev/fast-pizza",
    techs: ["react", "typescript", "redux"],
    hasDeployed: true,
  },
  {
    id: 2,
    image: WorldWise,
    title: "World Wise",
    category: "frontend",
    hrefGithub: "https://github.com/fandredev/world-wise",
    techs: ["react", "typescript", "vite"],
    hasDeployed: false,
  },
  {
    id: 3,
    image: ReactQuiz,
    title: "React Quiz",
    category: "frontend",
    hrefGithub: "https://github.com/fandredev/react-quiz",
    techs: ["react", "typescript", "vite"],
    hasDeployed: false,
  },
  {
    id: 4,
    image: UICloneVSCode,
    title: "UI Clone VSCode page",
    category: "frontend",
    hrefProject: "https://ui-clone-vscode.vercel.app/",
    hrefGithub: "https://github.com/fandredev/ui-clone-vscode",
    techs: ["react", "typescript", "vite pwa"],
    hasDeployed: true,
  },

  {
    id: 5,
    image: UICloneGithubDesktopPage,
    title: "UI Clone Github Desktop",
    category: "frontend",
    hrefProject: "https://githubdesktop.vercel.app/",
    hrefGithub: "https://github.com/fandredev/ui-clone-githubdesktop",
    techs: ["react", "typescript", "sass"],
    hasDeployed: true,
  },
  {
    id: 6,
    image: UICloneBootstrapPage,
    title: "UI Clone Bootstrap page",
    category: "frontend",
    hrefProject: "https://ui-clone-bootstrap.vercel.app/",
    hrefGithub: "https://github.com/fandredev/ui-clone-bootstrap",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 7,
    image: UICloneNpmPage,
    title: "UI Clone npm page",
    category: "frontend",
    hrefProject: "https://ui-clone-npm.vercel.app/",
    hrefGithub: "https://github.com/fandredev/ui-clone-npm",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 8,
    image: UICloneSassPage,
    title: "UI Clone sass page",
    category: "frontend",
    hrefProject: "https://ui-clone-sass.vercel.app/",
    hrefGithub: "https://github.com/fandredev/ui-clone-sass",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 9,
    image: DjangoImage,
    title: "Django API Recipes",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/django-recipes",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },

  {
    id: 10,
    image: DjangoImage,
    title: "Django API Students",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/django-api-rest",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },
  {
    id: 11,
    image: GolangImage,
    title: "Go API AMA",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/go-react-server",
    techs: ["go", "docker", "postgresql"],
    hasDeployed: false,
  },
  {
    id: 12,
    image: NodeJSImage,
    title: "Express API Pets",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/adopet",
    techs: ["nodejs", "express", "typeorm"],
    hasDeployed: false,
  },
];

export const projectsTabs: ProjectTabs[] = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Frontend",
  },
  {
    id: 3,
    name: "Backend",
  },
];
