import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./app/router";
import "./styles/global.css";
import Snowfall from "react-snowfall";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <div style={{ position: "relative" }}>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        color="#f2b600"
      />

      <RouterProvider router={routes} />
    </div>
  </StrictMode>,
);
