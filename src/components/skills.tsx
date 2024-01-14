"use client";

import { motion } from "framer-motion";

import { skills } from "@/components/constants";

const Skill = ({
  children,
  x,
  y,
}: {
  children: string;
  x: string;
  y: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      animate={{ x, y }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="absolute flex items-center justify-center rounded-full font-semibold bg-slate-900 text-gray-200 dark:bg-gray-200 dark:text-slate-900 py-3 px-6"
    >
      {children}
    </motion.button>
  );
};

const Skills = () => {
  const skillsWithPositions = skills();
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularPath dark:bg-circularPathInverted">
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
