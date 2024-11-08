import { type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
const { RootBanner } = lazily(() => import("./_components/banner"));

export const RootPage: FC = (): ReactElement => {
  return <RootBanner />;
};
