import type { FC, ReactElement } from "react";
import type { TButton } from "./type";
import { cn } from "@/utils/clsx";

export const Button: FC<TButton> = (props): ReactElement => {
  const mobileStyle = "px-4 py-2 text-sm";

  return (
    <button
      className={cn("bg-gray-400 text-primary rounded-full", mobileStyle)}
    >
      {props.children}
    </button>
  );
};
