import { ReactNode } from "react";
import { cn } from "../../base/functions/cn";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("max-w-7xl px-6 mx-auto w-full", className)}>{children}</div>;
};

export default Container;
