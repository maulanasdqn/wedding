import { ROUTE_URL } from "@/entities/constants/route-url";

export const rootRoutes = [
  {
    path: ROUTE_URL.ROOT,
    lazy: () => import("./page"),
  },
];
