import { type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
const { RootBanner } = lazily(() => import("./_components/banner"));

export const Component: FC = (): ReactElement => {
  return <RootBanner />;
};

export default Component;
