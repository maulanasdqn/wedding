import { type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
const { HomeBanner } = lazily(() => import("./_components"));

export const HomePage: FC = (): ReactElement => {
  return <HomeBanner />;
};
