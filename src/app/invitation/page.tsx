import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";

const { InvitationForm } = lazily(
  () => import("./_components/invitation-form"),
);
export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <InvitationForm />
    </Suspense>
  );
};

export default Component;
