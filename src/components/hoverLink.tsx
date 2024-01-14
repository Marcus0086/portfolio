"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import clsx from "@/lib/clsx";

const HoverLink = ({
  children,
  href,
  target,
  rel,
  className,
}: {
  children?: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      className={`relative group ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
      <span
        className={clsx(
          "h-[1px] inline-block bg-slate-900 dark:bg-gray-200 absolute left-0 -bottom-0.5 group-hover:w-full ease transition-[width] duration-300",
          pathname === href ? "w-full" : "w-0"
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default HoverLink;
