import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
import InvitationView from "./_components/invitation-view";
import InvitationQuotes from "./_components/invitation-quotes";
import InvitationRoadmap from "./_components/invitation-roadmap";
import MobileMenu from "../_components/ui/menu/menu-bar";
import EventDetails from "./_components/invitation-detail";
import InvitationGift from "./_components/invitation-gift";

const { InvitationForm } = lazily(
  () => import("./_components/invitation-form"),
);

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <div className="p-2">
        <InvitationQuotes />
        <InvitationRoadmap />
        <InvitationView />
        <EventDetails />
        <InvitationGift />
        <InvitationForm />
        <MobileMenu />
      </div>
    </Suspense>
  );
};

export default Component;
