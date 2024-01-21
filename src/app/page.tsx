import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LinkArrow } from "@/components/icons";
import AnimatedText from "@/components/animatedText";
import { userMetaData } from "@/components/constants";

import { cn } from "@/lib/utils";

import CharacterFace from "../../public/character.jpg";

export default function Home() {
  return (
    <section className="flex flex-col 2xl:flex-row items-center justify-between w-full gap-y-4 2xl:gap-0 pt-16 md:pt-0 sm:pt-0">
      <Image
        priority
        loading="eager"
        alt={userMetaData.name}
        src={CharacterFace}
        className="rounded-xl object-cover w-full max-w-[400px] 2xl:max-w-[600px] max-h-[400px] 2xl:max-h-[650px]"
      />
      <div className="w-full 2xl:w-1/2 flex flex-col text-center 2xl:text-start items-center justify-center">
        <AnimatedText className="!text-3xl xl:!text-5xl lg:!text-6xl text-center md:!text-5xl sm:!text-5xl 2xl:text-left ">
          Hi, I am {userMetaData.name} Turning ideas into reality 🚀
        </AnimatedText>
        <p className="my-4 font-medium text-base">
          A skilled full-stack developer with a passion for building products.
          Currently working at{" "}
          <a href={userMetaData.company?.url}>
            <span className="text-blue-600 hover:underline">
              {userMetaData.company?.name}
            </span>
          </a>{" "}
          in {userMetaData.location}
        </p>
        <div className="flex items-center self-center 2xl:self-start mt-4 gap-x-2">
          <Link
            href={userMetaData.resume || "/resume.pdf"}
            target={"_blank"}
            className={cn(
              "flex items-center px-6 py-2.5 rounded-lg text-lg font-semibold",
              "border-2 border-border",
              "bg-slate-800 text-white hover:bg-white hover:text-gray-900",
              "ease transition-colors duration-300",
              "dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-200 "
            )}
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
