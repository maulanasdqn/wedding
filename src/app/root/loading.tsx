import type { FC, ReactElement } from "react";

export const RootLoading: FC = (): ReactElement => {
  return (
    <div className="flex w-screen h-screen justify-center items-center text-2xl text-gray-100 bg-red-600">
      <img className="animate-spin" width={100} src="/ring.png" alt="..." />
    </div>
  );
};
