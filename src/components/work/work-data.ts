import DjangoImage from "../../assets/backend/django.webp";
import GolangImage from "../../assets/backend/golang.webp";
import ReactQuiz from "../../assets/clone/react-quiz.webp";
import UICloneBootstrapPage from "../../assets/clone/ui-clone-bootstrap-page.webp";
import UICloneGithubDesktopPage from "../../assets/clone/ui-clone-github-desktop-page.webp";
import UICloneLoginPage from "../../assets/clone/ui-clone-login-page.webp";
import UICloneNpmPage from "../../assets/clone/ui-clone-npm-page.webp";
import UICloneSassPage from "../../assets/clone/ui-clone-sass-page.webp";

import UICloneVSCode from "../../assets/clone/ui-clone-vscode.webp";
import WorldWise from "../../assets/clone/world-wise.webp";

export interface Projects {
  id: number;
  image: string;
  title: string;
  category: string;
  hrefProject: string;
  techs: string[];
  hasDeployed?: boolean;
}

interface ProjectTabs {
  id: number;
  name: string;
}

export const projectsData: Projects[] = [
  {
    id: 1,
    image: WorldWise,
    title: "World Wise",
    category: "frontend",
    hrefProject: "https://github.com/fandredev/world-wise",
    techs: ["react", "typescript", "vite"],
    hasDeployed: false,
  },
  {
    id: 2,
    image: ReactQuiz,
    title: "React Quiz",
    category: "frontend",
    hrefProject: "https://github.com/fandredev/react-quiz",
    techs: ["react", "typescript", "vite"],
    hasDeployed: false,
  },
  {
    id: 3,
    image: UICloneVSCode,
    title: "UI Clone VSCode page",
    category: "frontend",
    hrefProject: "https://ui-clone-vscode.vercel.app/",
    techs: ["react", "typescript", "vite pwa"],
    hasDeployed: true,
  },
  {
    id: 4,
    image: UICloneLoginPage,
    title: "Basic UI login page",
    category: "frontend",
    hrefProject: "https://login-react-redux-bp.vercel.app/",
    techs: ["react", "typescript", "redux"],
    hasDeployed: true,
  },
  {
    id: 5,
    image: UICloneGithubDesktopPage,
    title: "UI Clone Github Desktop",
    category: "frontend",
    hrefProject: "https://githubdesktop.vercel.app/",
    techs: ["react", "typescript", "sass"],
    hasDeployed: true,
  },
  {
    id: 6,
    image: UICloneBootstrapPage,
    title: "UI Clone Bootstrap page",
    category: "frontend",
    hrefProject: "https://ui-clone-bootstrap.vercel.app/",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 7,
    image: UICloneNpmPage,
    title: "UI Clone npm page",
    category: "frontend",
    hrefProject: "https://ui-clone-npm.vercel.app/",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 8,
    image: UICloneSassPage,
    title: "UI Clone sass page",
    category: "frontend",
    hrefProject: "https://ui-clone-sass.vercel.app/",
    techs: ["react", "styled-components"],
    hasDeployed: true,
  },
  {
    id: 9,
    image: DjangoImage,
    title: "Django API Recipes",
    category: "backend",
    hrefProject: "https://github.com/fandredev/django-recipes",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },

  {
    id: 10,
    image: DjangoImage,
    title: "Django API Students",
    category: "backend",
    hrefProject: "https://github.com/fandredev/django-api-rest",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },
  {
    id: 11,
    image: GolangImage,
    title: "Go API AMA",
    category: "backend",
    hrefProject: "https://github.com/fandredev/go-react-server",
    techs: ["go", "docker", "postgresql"],
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
