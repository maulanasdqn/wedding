import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
import { HomeBannerLoading } from "./loading";
const { HomeBanner } = lazily(() => import("./_components"));

export const HomePage: FC = (): ReactElement => {
  return (
    <Suspense fallback={<HomeBannerLoading />}>
      <HomeBanner />
    </Suspense>
  );
};
