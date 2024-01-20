/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import AnimatedText from "@/components/animatedText";
import { GithubIcon } from "@/components/icons";
import { userMetaData } from "@/components/constants";
import { cn } from "@/lib/utils";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  loading,
  fetchPriority,
  decoding,
  orierntation = "landscape",
}: {
  type: string;
  title: string;
  summary: string[];
  img: string;
  link: string;
  github?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  orierntation?: "landscape" | "portrait";
}) => {
  return (
    <article
      className={cn(
        orierntation === "landscape" ? "flex-row" : "flex-col",
        "relative w-full h-full flex items-center justify-between rounded-3xl border bg-white dark:bg-gray-900 border-gray-900 dark:border-gray-200 shadow-2xl p-12"
      )}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-3xl bg-slate-900 dark:bg-gray-200" />
      <Link
        href={link}
        target="_blank"
        className={cn(
          orierntation === "landscape" ? "w-1/2" : "w-full",
          "cursor-pointer overflow-hidden rounded-lg"
        )}
      >
        <img
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </Link>

      <div
        className={cn(
          orierntation === "landscape" ? "w-1/2" : "w-full mt-4",
          "flex flex-col items-start justify-between pl-6"
        )}
      >
        <span className="text-destructive dark:text-primary font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-4xl font-bold">{title}</h2>
        </Link>
        <ul className="my-2 font-medium text-gray-900 dark:text-gray-200 list-disc">
          {summary.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
        <div className="mt-2 flex items-center gap-2">
          {github && (
            <Link href={github} target="_blank">
              <GithubIcon className="!w-8 !h-8" />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className={cn(
              "flex items-center px-6 py-2.5 rounded-lg text-lg font-semibold",
              "border-2 border-border",
              "bg-slate-800 text-white hover:bg-white hover:text-gray-900",
              "ease transition-colors duration-300",
              "dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-200 "
            )}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="pt-16 md:pt-0 sm:pt-8">
      <AnimatedText className="mb-8 sm:mb-16 lg:!text-7xl md:!text-6xl !text-4xl">
        Necessity is the mother of invention
      </AnimatedText>
      <div className="grid grid-cols-12 gap-24 gap-y-32">
        <div className="col-span-12">
          <FeaturedProject
            title={userMetaData?.projects?.[0].title || ""}
            type={userMetaData?.projects?.[0].type || ""}
            summary={userMetaData?.projects?.[0].summary || [""]}
            img={userMetaData?.projects?.[0].img || ""}
            link={userMetaData?.projects?.[0].link || ""}
            github={userMetaData?.projects?.[0].github}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[1].title || ""}
            type={userMetaData?.projects?.[1].type || ""}
            summary={userMetaData?.projects?.[1].summary || [""]}
            img={userMetaData?.projects?.[1].img || ""}
            link={userMetaData?.projects?.[1].link || ""}
            github={userMetaData?.projects?.[1].github}
            loading="lazy"
            decoding="async"
            orierntation="portrait"
          />
        </div>
        <div className="col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[2].title || ""}
            type={userMetaData?.projects?.[2].type || ""}
            summary={userMetaData?.projects?.[2].summary || [""]}
            img={userMetaData?.projects?.[2].img || ""}
            link={userMetaData?.projects?.[2].link || ""}
            github={userMetaData?.projects?.[2].github}
            loading="lazy"
            decoding="async"
            orierntation="portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
