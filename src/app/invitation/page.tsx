import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
import InvitationView from "./_components/invitation-view";
import { InvitationCountdown } from "./_components/invitation-countdown";
import InvitationQuotes from "./_components/invitation-quotes";
import InvitationRoadmap from "./_components/invitation-roadmap";

const { InvitationForm } = lazily(
  () => import("./_components/invitation-form"),
);

export const Component: FC = (): ReactElement => {
  const targetDate = new Date("2024-12-14T00:00:00");

  return (
    <Suspense>
      <audio autoPlay>
        <source src="/lagu-nikah.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <InvitationQuotes />
      <InvitationRoadmap />
      <InvitationView />
      <InvitationCountdown targetDate={targetDate} />
      <InvitationForm />
    </Suspense>
  );
};

export default Component;
