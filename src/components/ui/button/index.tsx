import type { FC, ReactElement } from "react";
import type { TButton } from "./type";

export const Button: FC<TButton> = (props): ReactElement => {
  return (
    <button className="bg-gray-400 text-primary rounded-full px-4 py-2 text-sm">
      {props.children}
    </button>
  );
};
