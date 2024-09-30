import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";

export const MainLayout: FC = (): ReactElement => {
  return (
    <main className="flex flex-col items-start justify-start py-2 md:py-6 px-6 md:px-8 lg:px-20 min-h-screen bg-primary">
      <Navbar />
      <Outlet />
    </main>
  );
};
