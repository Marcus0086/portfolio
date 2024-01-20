"use client";

import { useState } from "react";

import Logo from "@/components/logo";
import HoverLink from "@/components/hoverLink";
import ThemeToggle from "@/components/themeToggle";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";
import { userMetaData } from "@/components/constants";

import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };
  return (
    <header className="relative w-full px-8 lg:px-32 py-8 font-medium flex items-center justify-between">
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center"
      >
        <span
          className={cn(
            "bg-slate-900 dark:bg-gray-200 block h-0.5 w-6 rounded-sm -translate-y-0.5",
            isOpened ? "rotate-45 translate-y-1" : "-translate-y-0.5",
            "transition-transform duration-300 ease-out"
          )}
        ></span>
        <span
          className={cn(
            "bg-slate-900 dark:bg-gray-200 block h-0.5 w-6 rounded-sm my-0.5",
            isOpened ? "opacity-0" : "opacity-100",
            "transition-transform duration-300 ease-out"
          )}
        ></span>
        <span
          className={cn(
            "bg-slate-900 dark:bg-gray-200 block h-0.5 w-6 rounded-sm translate-y-0.5",
            isOpened ? "-rotate-45 -translate-y-1" : "translate-y-0.5",
            "transition-transform duration-300 ease-out"
          )}
        ></span>
      </button>
      <div className="w-full hidden lg:flex items-center justify-between">
        <nav className="flex gap-x-10 items-center justify-center">
          <HoverLink href="/">Home</HoverLink>
          <HoverLink href="/about">About</HoverLink>
          <HoverLink href="/projects">Projects</HoverLink>
        </nav>

        <nav className="flex items-center justify-center gap-x-10">
          <HoverLink
            href={userMetaData.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="!w-6 !h-6" />
          </HoverLink>
          <HoverLink
            href={userMetaData.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="!w-6 !h-6" />
          </HoverLink>
          <HoverLink
            href={userMetaData.x.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="!w-6 !h-6" />
          </HoverLink>
          <ThemeToggle />
        </nav>
      </div>
      {isOpened ? (
        <div className="min-w-[70vw] flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-between z-30 bg-[rgba(255_,255_,255_,0.10)] dark:bg-slate-950/75 backdrop-blur-xl rounded-lg py-32 px-4">
          <nav className="flex flex-col gap-y-6 items-center justify-center">
            <HoverLink href="/">Home</HoverLink>
            <HoverLink href="/about">About</HoverLink>
            <HoverLink href="/projects">Projects</HoverLink>
          </nav>

          <nav className="flex items-center justify-center gap-x-10 mt-12">
            <HoverLink
              href={userMetaData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="!w-6 !h-6" />
            </HoverLink>
            <HoverLink
              href={userMetaData.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="!w-6 !h-6" />
            </HoverLink>
            <HoverLink
              href={userMetaData.x.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="!w-6 !h-6" />
            </HoverLink>
            <ThemeToggle />
          </nav>
        </div>
      ) : null}
      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
