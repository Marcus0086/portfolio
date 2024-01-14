import { userConfig } from "user.config";

import { PortfolioMetaData } from "@/types";

const metaData: PortfolioMetaData = {
  title: process.env.title || "",
  description: process.env.description || "",
};

const userMetaData = userConfig;

const skillTitles = process.env.skills?.split(",") || [];

const skills = () => {
  const positions = [
    {
      name: "",
      x: "-5vw",
      y: "-20vw",
    },
    {
      name: "",
      x: "-25vw",
      y: "8vw",
    },
    {
      name: "",
      x: "-10vw",
      y: "-10vw",
    },
    {
      name: "",
      x: "-15vw",
      y: "25vw",
    },
    {
      name: "",
      x: "-20vw",
      y: "-2vw",
    },
    {
      name: "",
      x: "-10vw",
      y: "15vw",
    },
    {
      name: "",
      x: "18vw",
      y: "-22vw",
    },
    {
      name: "",
      x: "20vw",
      y: "-10vw",
    },
    {
      name: "",
      x: "10vw",
      y: "13vw",
    },
    {
      name: "",
      x: "23vw",
      y: "0vw",
    },
    {
      name: "",
      x: "15vw",
      y: "22vw",
    },
    {
      name: "",
      x: "28vw",
      y: "13vw",
    },
  ];
  for (const title of skillTitles) {
    const position = positions.pop();
    if (position) {
      position.name = title;
      positions.unshift(position);
    }
  }
  return positions;
};
export { metaData, userMetaData, skills };
