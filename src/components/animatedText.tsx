"use client";

import { motion, AnimatePresence } from "framer-motion";

import clsx from "@/lib/clsx";
import { cn } from "@/lib/utils";

const sentence = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({
  className,
  children,
}: {
  className?: string;
  children: string | string[];
}) => {
  const words = Array.isArray(children) ? children : children.split(" ");
  return (
    <div
      className={clsx(
        "w-full mx-auto py-0 sm:py-2 flex items-center justify-center text-center overflow-hidden"
      )}
    >
      <noscript>
        <h1
          className={cn(
            "inline-block w-full text-gray-900 font-bold text-8xl",
            className
          )}
        >
          {children}
        </h1>
      </noscript>
      <AnimatePresence>
        <motion.h1
          className={cn(
            "inline-block w-full text-gray-900 dark:text-gray-200 font-bold text-8xl",
            className
          )}
          initial="initial"
          animate="animate"
          variants={sentence}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
export default AnimatedText;
