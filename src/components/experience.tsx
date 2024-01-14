"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import { userMetaData } from "@/components/constants";
import { LiIcon } from "./icons";

const Details = ({
  position,
  company,
  link,
  time,
  address,
  work,
}: {
  position: string;
  company: string;
  link: string;
  time: string;
  address: string;
  work: string[];
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={link}
            className="text-destructive capitalize"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-900/75 dark:text-gray-200/75">
          {time} | {address}
        </span>
        <ul className="list-disc flex flex-col items-center justify-between gap-y-2">
          {work.map((content, index) => (
            <li key={index} className="font-medium">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-slate-900 dark:bg-gray-200 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {userMetaData.experience?.map(
            ({ address, company, link, position, time, work }, index) => (
              <Details
                key={index}
                address={address}
                company={company}
                link={link}
                position={position}
                time={time}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
