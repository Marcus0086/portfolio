import { useRef } from "react";

import { LiIcon } from "@/components/icons";

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
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
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
        <span className="capitalize font-medium text-gray-900/75 dark:text-gray-200/75 text-sm sm:text-base">
          {time} | {address}
        </span>
        <ul className="list-disc flex flex-col items-center justify-between gap-y-2 text-sm sm:text-base">
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

export default Details;
