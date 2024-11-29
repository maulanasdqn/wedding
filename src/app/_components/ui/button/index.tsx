import type { FC, ReactElement } from "react";
import type { TButton } from "./type";

export const Button: FC<TButton> = (props): ReactElement => {
  return (
    <button
      {...props}
      className="bg-yellow-600 text-white rounded-full p-2 disabled:opacity-50"
    >
      {props.children}
    </button>
  );
};
