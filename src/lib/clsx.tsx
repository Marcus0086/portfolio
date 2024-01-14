const clsx = (...args: string[]) => {
  return args.filter(Boolean).join(" ");
};
export default clsx;
