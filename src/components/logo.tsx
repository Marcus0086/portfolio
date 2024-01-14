"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        whileHover={{ scale: 1.1 }}
        href="/"
        className={cn(
          "bg-slate-800 text-white dark:bg-gray-200 dark:text-gray-900",
          "ease transition-colors duration-300",
          "w-16 h-16 rounded-full text-2xl font-bold flex items-center justify-center"
        )}
      >
        RG
      </MotionLink>
    </div>
  );
};

export default Logo;
