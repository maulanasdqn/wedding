import { ROUTE_URL } from "@/entities/constants/route-url";
import { RootPage } from "./page";

export const rootRoutes = [
  {
    path: ROUTE_URL.ROOT,
    element: <RootPage />,
  },
];
