import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

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
      className={cn(
        "absolute flex items-center justify-center",
        "rounded-full font-semibold",
        "bg-slate-900 text-gray-200 dark:bg-gray-200 dark:text-slate-900",
        "py-2 px-4 lg:py-3 lg:px-6 md:py-1.5 md:px-3 text-sm md:text-base"
      )}
    >
      {children}
    </motion.button>
  );
};

export default Skill;
