"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { LiIcon } from "@/components/icons";
import { userMetaData } from "@/components/constants";

const Details = ({
  info,
  place,
  time,
  type,
}: {
  info: string[];
  place: string;
  time: string;
  type: string;
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start text-start justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-gray-900/75 dark:text-gray-200/75">
          {time} | {place}
        </span>
        <ul className="list-disc flex flex-col items-start justify-between gap-y-2">
          {info.map((content, index) => (
            <li key={index} className="font-medium">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-slate-900 dark:bg-gray-200 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
