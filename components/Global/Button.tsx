import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { cn } from "../../base/functions/cn";

const Button = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button {...props} className={cn("btn rounded-lg", className)}>
      {children}
    </button>
  );
};

export default Button;
