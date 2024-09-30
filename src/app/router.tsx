import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "./home/router";
import { MainLayout } from "@/components/ui/layouts/main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...homeRoutes],
  },
]);
