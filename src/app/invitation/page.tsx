import { Suspense, type FC, type ReactElement } from "react";
import { lazily } from "react-lazily";
import InvitationView from "./_components/invitation-view";
import InvitationQuotes from "./_components/invitation-quotes";
import InvitationRoadmap from "./_components/invitation-roadmap";
import MobileMenu from "../_components/ui/menu/menu-bar";
import EventDetails from "./_components/invitation-detail";
import InvitationGift from "./_components/invitation-gift";
import FloatingControls from "../_components/ui/menu/floating-control";

const { InvitationForm } = lazily(
  () => import("./_components/invitation-form"),
);

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <FloatingControls />
      <InvitationQuotes />
      <InvitationRoadmap />
      <InvitationView />
      <EventDetails />
      <InvitationGift />
      <div className="w-full px-6 pb-12">
        <InvitationForm />
      </div>
      <MobileMenu />
    </Suspense>
  );
};

export default Component;
