import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
import InvitationView from "./_components/invitation-view";
import { InvitationCountdown } from "./_components/invitation-countdown";

const { InvitationForm } = lazily(
  () => import("./_components/invitation-form"),
);

export const Component: FC = (): ReactElement => {
  const targetDate = new Date("2024-12-14T00:00:00");

  return (
    <Suspense>
      <audio autoPlay loop>
        <source src="/lagu-nikah.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <InvitationView />
      <InvitationCountdown targetDate={targetDate} />
      <InvitationForm />
    </Suspense>
  );
};

export default Component;
