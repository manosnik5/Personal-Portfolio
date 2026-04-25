import {united_kingdom_logo, france_logo, unipi_logo, github_logo, linkedin_logo} from './assets/index.ts'

export interface Experience {
    title: string,
    description: string,
    icon: string,
    date: string
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Master in English",
    description: "C2 (ECPE)-University of Michigan",
    icon: united_kingdom_logo,
    date: "2013-2019",
  },
  {
    title: "Master in Frace",
    description: "B2 (DELF)-Ministere de l'Education Nationale",
    icon: france_logo,
    date: "2015-2019",
  },
  {
    title: "Computer Science",
    description: "Pireus - University",
    icon: unipi_logo,
    date: "2021-2025",
    
  },
];

export const SOCIAL_LINKS = [
  {
    title: "gitHub",
    icon: github_logo,
    link: "https://github.com/manos500",
  },
  {
    title: "linkedin",
    icon: linkedin_logo,
    link: "https://github.com/manos500",
  },
];

export const CV_LINK = {
  label: "Download CV",
  href: "/cv/manos-nikitakis-cv.pdf",
}