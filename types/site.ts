type Socials = "github" | "linkedin" | "x";

type SocialsMetaData = {
  [key in Socials]: {
    url: string;
  };
};

type Experience = {
  position: string;
  company: string;
  link: string;
  time: string;
  address: string;
  work: string[];
};

type Education = {
  type: string;
  time: string;
  place: string;
  info: string[];
};

type Project = {
  type: string;
  title: string;
  summary: string[];
  img: string;
  link: string;
  github?: string;
};

interface UserMetaData extends SocialsMetaData {
  name: string;
  email: string;
  bio: string;
  position: string;
  avatar?: string;
  company?: {
    name: string;
    url: string;
  };
  location?: string;
  resume?: string;
  experience?: Experience[];
  education?: Education[];
  projects?: Project[];
}

interface PortfolioMetaData {
  title: string;
  description: string;
}

export type { UserMetaData, PortfolioMetaData };
