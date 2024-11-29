import { ROUTE_URL } from "@/entities/constants/route-url";

export const invitationRoutes = [
  {
    path: ROUTE_URL.INVITATION,
    lazy: () => import("./page"),
  },
];
