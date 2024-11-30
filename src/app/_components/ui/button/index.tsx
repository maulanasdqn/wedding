import type { FC, ReactElement } from "react";
import type { TButton } from "./type";

export const Button: FC<TButton> = (props): ReactElement => {
  return (
    <button
      {...props}
      className="bg-gray-500 text-white rounded-md p-2 my-4 disabled:opacity-50"
    >
      {props.children}
    </button>
  );
};
