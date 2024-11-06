import { SplashScreen } from "@/components/ui/splash";
import { HomePage } from "./page";

export const homeRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/invitation",
    element: <SplashScreen loadTimeOut={3} />,
  },
];
