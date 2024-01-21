"use client";

import { motion } from "framer-motion";

import { skills } from "@/components/constants";
import Skill from "@/components/skill";

const Skills = () => {
  const skillsWithPositions = skills();
  return (
    <>
      <h2 className="font-bold text-5xl mt-32 md:text-8xl md:mt-64 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circularPath dark:bg-circularPathInverted">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative flex items-center justify-center rounded-full font-semibold bg-slate-900 text-gray-200 dark:bg-gray-200 dark:text-slate-900 py-3 px-6"
        >
          Full Stack
        </motion.button>
        {skillsWithPositions.map(({ name, x, y }, index) => (
          <Skill key={index} x={x} y={y}>
            {name}
          </Skill>
        ))}
      </div>
    </>
  );
};

export default Skills;
