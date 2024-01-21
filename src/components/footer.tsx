import Link from "next/link";

import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";
import { userMetaData } from "@/components/constants";
import Contact from "@/components/contact";

const Footer = () => {
  return (
    <>
      <hr className="bg-gray-200 w-full" />
      <footer className="flex flex-col items-center justify-center py-8 px-4 md:px-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {userMetaData.position}
        </p>
        <a
          className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
          href={`mailto:${userMetaData.email}`}
        >
          {userMetaData.email}
        </a>
        <div className="flex gap-4 mt-4 items-center justify-center">
          <Link
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
            href={userMetaData.linkedin.url}
          >
            <LinkedInIcon className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
            href={userMetaData.x.url}
          >
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
            href={userMetaData.github.url}
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-prose mx-auto">
          {userMetaData.seoMetadata?.description}
        </p>
        <div className="mt-4">
          <Contact />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
          © 2024 {userMetaData.name}
        </p>
      </footer>
    </>
  );
};

export default Footer;
