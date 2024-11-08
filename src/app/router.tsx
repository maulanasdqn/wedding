import { createBrowserRouter } from "react-router-dom";
import { rootRoutes } from "./root/router";
import { ROUTE_URL } from "@/entities/constants/route-url";
import { invitationRoutes } from "./invitation/router";
import { RootLayout } from "./root/layout";
import { InvitationLayout } from "./invitation/layout";

export const routes = createBrowserRouter([
  {
    path: ROUTE_URL.ROOT,
    element: <RootLayout />,
    children: [...rootRoutes],
  },
  {
    path: ROUTE_URL.INVITATION,
    element: <InvitationLayout />,
    children: [...invitationRoutes],
  }
]);
