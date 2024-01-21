/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { GithubIcon } from "@/components/icons";

import { cn } from "@/lib/utils";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  loading = "lazy",
  fetchPriority = "high",
  decoding = "async",
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
        orierntation === "landscape" ? "flex-col lg:flex-row" : "flex-col",
        "relative w-full h-full flex items-center justify-between",
        "rounded-2xl sm:rounded-3xl border bg-white dark:bg-gray-900 border-gray-900 dark:border-gray-200 shadow-2xl",
        "p-4 sm:p-8 lg:p-12",
        orierntation === "landscape" ? "" : ""
      )}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-3xl bg-slate-900 dark:bg-gray-200" />
      <Link
        href={link}
        target="_blank"
        className={cn(
          orierntation === "landscape" ? "lg:w-1/2 w-full" : "w-full",
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
          orierntation === "landscape"
            ? "w-full mt-4 lg:mt-0 lg:w-1/2"
            : "w-full mt-4",
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

export default FeaturedProject;
