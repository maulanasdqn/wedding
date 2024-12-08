import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./app/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/global.css";
import Snowfall from "react-snowfall";

const root = createRoot(document.getElementById("root")!);
const queryClient = new QueryClient();

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
        snowflakeCount={50}
      />
      <audio id="bg-audio" autoPlay loop>
        <source src="/lagu-nikah.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
