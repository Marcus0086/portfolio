"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { userMetaData } from "@/components/constants";
import Details from "@/components/education/details";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-32 lg:mt-64">
      <h2 className="font-bold mb-16 w-full text-center text-5xl md:text-8xl md:mb-32">
        Education
      </h2>
      <div className="w-[90%] md:w-full lg:w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-5 sm:left-[30px] md:left-9 top-0 w-[2px] md:w-1 h-full bg-slate-900 dark:bg-gray-200 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
          {userMetaData.education?.map(({ info, place, time, type }, index) => (
            <Details
              key={index}
              info={info}
              place={place}
              time={time}
              type={type}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
