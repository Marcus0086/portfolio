import Image from "next/image";

import AnimatedText from "@/components/animatedText";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { userMetaData } from "@/components/constants";

import SkyCharacter from "../../../public/sky_engineer.jpg";

const AboutPage = () => {
  return (
    <section className="pt-16 md:pt-0 sm:pt-8">
      <AnimatedText className="mb-16 lg:!text-7xl md:!text-6xl !text-4xl">
        Passion fueled full-stack developer with a knack for building products.
      </AnimatedText>
      <div className="grid grid-cols-8 w-full gap-16">
        <div className="flex flex-col items-start justify-start col-span-3">
          <h2 className="mb-4 uppercase font-bold text-gray-900/75 text-lg dark:text-gray-200/75">
            Biography
          </h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, nisi vitae luctus aliquam, mauris ipsum aliquet dolor,
            eget lacinia nisi sapien eu velit. Duis ac velit at leo sollicitudin
            aliquet. Donec fermentum, nisi eget ultricies vestibulum, elit lorem
            tincidunt nisl, vel aliquam lectus massa
          </p>
          <p className="my-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, nisi vitae luctus aliquam, mauris ipsum aliquet dolor,
            eget lacinia nisi sapien eu velit. Duis ac velit at leo sollicitudin
            aliquet. Donec fermentum, nisi eget ultricies vestibulum, elit lorem
            tincidunt nisl, vel aliquam lectus massa
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, nisi vitae luctus aliquam, mauris ipsum aliquet dolor,
            eget lacinia nisi sapien eu velit. Duis ac velit at leo sollicitudin
            aliquet. Donec fermentum, nisi eget ultricies vestibulum, elit lorem
            tincidunt nisl, vel aliquam lectus massa
          </p>
        </div>
        <div
          className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-slate-900
            dark:border-gray-200 p-8 bg-white dark:bg-gray-900"
        >
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-slate-900 dark:bg-gray-200" />
          <Image
            unoptimized
            priority
            loading="eager"
            src={SkyCharacter}
            alt={userMetaData.name}
            className="rounded-2xl object-cover w-full h-auto 2xl:max-h-[500px]"
          />
        </div>
        <ul className="col-span-2 flex flex-col items-end justify-between w-full">
          {[
            {
              title: "Professionalism",
              value: "9999",
            },
            { title: "Years of Experience", value: "2+" },
            { title: "Value Provided", value: "10x" },
          ].map(({ value, title }, index) => (
            <li className="flex flex-col items-end justify-center" key={index}>
              <span className="inline-block text-7xl font-bold">{value}</span>
              <h3 className="text-xl font-medium capitalize text-gray-900/75 dark:text-gray-200/75">
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
