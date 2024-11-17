import type {
  DetailedHTMLProps,
  ReactElement,
  TextareaHTMLAttributes,
} from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TTextArea<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
  UseControllerProps<T>;

export const TextArea = <T extends FieldValues>(
  props: TTextArea<T>,
): ReactElement => {
  const className = clsx(
    "focus:outline-none focus:ring-none border-[2px] p-2 rounded-lg",
    {
      "border-red-300 placeholder:text-red-400 text-red-400": props.message,
      "bg-gray-50 border-gray-100": !props.message,
    },
  );

  const { field } = useController<T>(props);
  return (
    <InputWrap {...props}>
      <textarea className={className} {...props} {...field} />
    </InputWrap>
  );
};
