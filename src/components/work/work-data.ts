import DjangoImage from "../../assets/backend/django.webp";
import GolangImage from "../../assets/backend/golang.webp";
import ReactQuiz from "../../assets/clone/react-quiz.webp";
import UICloneBootstrapPage from "../../assets/clone/ui-clone-bootstrap-page.webp";
import UICloneGithubDesktopPage from "../../assets/clone/ui-clone-github-desktop-page.webp";
import UICloneLoginPage from "../../assets/clone/ui-clone-login-page.webp";
import UICloneNpmPage from "../../assets/clone/ui-clone-npm-page.webp";
import UICloneSassPage from "../../assets/clone/ui-clone-sass-page.webp";

import UICloneVSCode from "../../assets/clone/ui-clone-vscode.webp";

export interface Projects {
  id: number;
  image: string;
  title: string;
  category: string;
  hrefProject: string;
  description?: string;
}

interface ProjectTabs {
  id: number;
  name: string;
}

export const projectsData: Projects[] = [
  {
    id: 1,
    image: ReactQuiz,
    title: "React Quiz",
    category: "frontend",
    hrefProject: "https://github.com/fandredev/react-quiz",
  },
  {
    id: 2,
    image: UICloneVSCode,
    title: "UI Clone VSCode page",
    category: "frontend",
    hrefProject: "https://ui-clone-vscode.vercel.app/",
  },
  {
    id: 3,
    image: UICloneLoginPage,
    title: "Basic UI login page",
    category: "frontend",
    hrefProject: "https://login-react-redux-bp.vercel.app/",
  },
  {
    id: 4,
    image: UICloneGithubDesktopPage,
    title: "UI Clone Github Desktop",
    category: "frontend",
    hrefProject: "https://githubdesktop.vercel.app/",
  },
  {
    id: 5,
    image: UICloneBootstrapPage,
    title: "UI Clone Bootstrap page",
    category: "frontend",
    hrefProject: "https://ui-clone-bootstrap.vercel.app/",
  },
  {
    id: 6,
    image: UICloneNpmPage,
    title: "UI Clone npm page",
    category: "frontend",
    hrefProject: "https://ui-clone-npm.vercel.app/",
  },
  {
    id: 7,
    image: UICloneSassPage,
    title: "UI Clone sass page",
    category: "frontend",
    hrefProject: "https://ui-clone-sass.vercel.app/",
  },
  {
    id: 8,
    image: DjangoImage,
    title: "Django API Recipes",
    category: "backend",
    hrefProject: "https://github.com/fandredev/django-recipes",
  },

  {
    id: 9,
    image: DjangoImage,
    title: "Django API Students",
    category: "backend",
    hrefProject: "https://github.com/fandredev/django-api-rest",
  },
  {
    id: 10,
    image: GolangImage,
    title: "Go API AMA",
    category: "backend",
    hrefProject: "https://github.com/fandredev/go-react-server",
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
