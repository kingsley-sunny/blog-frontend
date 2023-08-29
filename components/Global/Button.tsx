import { ReactNode } from "react";
import { cn } from "../../base/functions/cn";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}) => {
  return <button className={cn("btn rounded-lg", className)}>{children}</button>;
};

export default Button;
