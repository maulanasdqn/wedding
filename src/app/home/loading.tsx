import type { FC, ReactElement } from "react";

export const HomeBannerLoading: FC = (): ReactElement => {
  return (
    <section className="flex flex-col py-20">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-7xl animate-pulse bg-gray-100 w-[600px] h-[60px] rounded-xl" />
        <h1 className="font-medium text-6xl animate-pulse bg-gray-100 w-[200px] h-[60px] rounded-xl" />
      </div>
    </section>
  );
};
