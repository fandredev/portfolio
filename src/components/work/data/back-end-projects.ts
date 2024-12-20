import DjangoImage from "assets/backend/django.webp";
import GolangImage from "assets/backend/golang.webp";
import NestJSImage from "assets/backend/nestjs.webp";
import NodeJSImage from "assets/backend/nodejs.webp";

export const backendProjects = [
  {
    image: NestJSImage,
    title: "OpenWeather API",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/weather-nestjs-api",
    techs: ["nestjs", "nodejs", "jest"],
    hasDeployed: false,
  },
  {
    image: NestJSImage,
    title: "NestJS Youtube Videos",
    category: "backend",
    hrefGithub:
      "https://github.com/fandredev/boiterplate-nestjs-youtube-videos",
    techs: ["nestjs", "sqlite", "jest"],
    hasDeployed: false,
  },
  {
    image: NestJSImage,
    title: "NestJS Boiterplate",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/boiterplate-nestjs-prisma",
    techs: ["nestjs", "prisma", "jest"],
    hasDeployed: false,
  },
  {
    image: DjangoImage,
    title: "Django API Recipes",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/django-recipes",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },

  {
    image: DjangoImage,
    title: "Django API Students",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/django-api-rest",
    techs: ["django", "python", "pytest"],
    hasDeployed: false,
  },
  {
    image: GolangImage,
    title: "Go API Ask my Anything",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/go-react-server",
    techs: ["go", "docker", "postgresql"],
    hasDeployed: false,
  },
  {
    image: NodeJSImage,
    title: "Express API Pets",
    category: "backend",
    hrefGithub: "https://github.com/fandredev/adopet",
    techs: ["nodejs", "express", "typeorm"],
    hasDeployed: false,
  },
];
