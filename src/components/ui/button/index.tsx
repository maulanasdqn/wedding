import type { FC, ReactElement } from "react";
import type { TButton } from "./type";
import { cn } from "@/utils/clsx";

export const Button: FC<TButton> = (props): ReactElement => {
  const mobileStyle = "px-4 py-2 text-sm";
  const tabletStyle = "md:px-5 md:py-3 md:text-base";
  const dektopStyle = "lg:px-6 lg:py-4 lg:text-xl";

  return (
    <button
      className={cn(
        "bg-gray-400 text-primary rounded-full",
        mobileStyle,
        tabletStyle,
        dektopStyle
      )}
    >
      {props.children}
    </button>
  );
};
