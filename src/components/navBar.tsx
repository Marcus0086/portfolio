import Logo from "@/components/logo";
import HoverLink from "@/components/hoverLink";
import ThemeToggle from "@/components/themeToggle";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";
import { userMetaData } from "@/components/constants";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-32 py-8 font-medium flex items-center justify-between bg-[rgba(255_,255_,255_,0.10)] dark:bg-slate-950/75 backdrop-blur-xl">
      <nav className="flex gap-x-10 items-center justify-center">
        <HoverLink href="/">Home</HoverLink>
        <HoverLink href="/about">About</HoverLink>
        <HoverLink href="/projects">Projects</HoverLink>
      </nav>
      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
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
    </header>
  );
};

export default NavBar;
