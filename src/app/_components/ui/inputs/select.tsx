import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { InputWrap, TInputWrap } from "./wrap";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { clsx } from "clsx";

type TSelect<T extends FieldValues> = Omit<TInputWrap, "children"> &
  DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > &
  UseControllerProps<T> & {
    options: Array<{
      value: string | number | readonly string[] | undefined;
      label: string;
    }>;
  };

export const Select = <T extends FieldValues>(props: TSelect<T>) => {
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
      <select className={className} {...props} {...field}>
        <option>Pilih</option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputWrap>
  );
};
