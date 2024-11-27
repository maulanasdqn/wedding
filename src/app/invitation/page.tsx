import { Fragment, type FC, type ReactElement } from "react";
import { InvitationForm } from "./_components/invitation-form";
import { InvitationCountdown } from "./_components/invitation-countdown";

export const InvitationPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <InvitationCountdown targetDate={new Date("2024-12-14T08:00:00")} />
      <InvitationForm />
    </Fragment>
  );
};
