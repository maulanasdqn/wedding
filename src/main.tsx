import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/global.css";
import { routes } from "./app/router";
import { HomeBannerLoading } from "./app/home/loading";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Suspense fallback={<HomeBannerLoading />}>
      <RouterProvider router={routes} />
    </Suspense>
  </StrictMode>
);
