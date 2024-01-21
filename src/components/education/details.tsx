import { useRef } from "react";

import { LiIcon } from "@/components/icons";

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
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-start text-start justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-gray-900/75 dark:text-gray-200/75 text-sm sm:text-base">
          {time} | {place}
        </span>
        <ul className="list-disc flex flex-col items-start justify-between gap-y-2 text-sm sm:text-base">
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

export default Details;
