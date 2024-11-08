import { ROUTE_URL } from "@/entities/constants/route-url";
import { InvitationPage } from "./page";

export const invitationRoutes = [
  {
    path: ROUTE_URL.INVITATION,
    element: <InvitationPage />,
  },
];
