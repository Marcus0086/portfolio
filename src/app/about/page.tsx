import Image from "next/image";

import AnimatedText from "@/components/animatedText";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { userMetaData } from "@/components/constants";

import SkyCharacter from "../../../public/sky_engineer.jpg";

const AboutPage = () => {
  return (
    <section>
      <AnimatedText className="mb-8 sm:mb-16 lg:!text-7xl md:!text-6xl !text-4xl">
        Passion fueled full-stack developer with a knack for building products.
      </AnimatedText>
      <div className="grid grid-cols-8 w-full gap-8 sm:gap-16">
        <div className="flex flex-col items-start justify-start col-span-8 md:col-span-4 xl:col-span-3 order-2 md:order-none">
          <h2 className="mb-4 uppercase font-bold text-gray-900/75 text-lg dark:text-gray-200/75">
            Biography
          </h2>
          <p className="font-medium">{userMetaData.bio}</p>
        </div>
        <div
          className="col-span-8 md:col-span-4 xl:col-span-3 relative h-max rounded-2xl border-2 border-solid border-slate-900
            dark:border-gray-200 p-8 bg-white dark:bg-gray-900 order-1 md:order-none "
        >
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-slate-900 dark:bg-gray-200" />
          <Image
            unoptimized
            priority
            loading="eager"
            src={SkyCharacter}
            alt={userMetaData.name}
            className="rounded-2xl object-cover w-full h-auto max-h-[500px]"
          />
        </div>
        <ul className="col-span-8 xl:col-span-2 flex items-center xl:flex-col xl:items-end justify-between w-full order-3 md:order-none">
          {[
            {
              title: "Professionalism",
              value: "9999",
            },
            { title: "Years of Experience", value: "2+" },
            { title: "Value Provided", value: "10x" },
          ].map(({ value, title }, index) => (
            <li
              className="flex flex-col items-center xl:items-end justify-center text-center"
              key={index}
            >
              <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                {value}
              </span>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-gray-900/75 dark:text-gray-200/75">
                {title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <Skills />
      <Experience />
      <Education />
    </section>
  );
};

export default AboutPage;
