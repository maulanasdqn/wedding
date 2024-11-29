import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TInputText<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseControllerProps<T>;

export const InputText = <T extends FieldValues>(
  props: TInputText<T>,
): ReactElement => {
  const { field } = useController<T>(props);
  const className = clsx(
    "focus:outline-none focus:ring-none border-[2px] p-2 rounded-lg",
    {
      "border-red-300 placeholder:text-red-400 text-red-400": props.message,
      "bg-gray-50 border-gray-100": !props.message,
    },
  );
  return (
    <InputWrap {...props}>
      <input className={className} {...props} {...field} type="text" />
    </InputWrap>
  );
};
