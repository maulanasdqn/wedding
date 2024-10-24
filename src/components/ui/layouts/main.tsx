import { useEffect, useState, type FC, type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { SplashScreen } from "../splash";

export const MainLayout: FC = (): ReactElement => {
  const loadTimeOut = 4;
  const [loadPage, setLoadPage] = useState(false);

  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col items-start justify-start py-2 md:py-6 px-6 md:px-8 lg:px-20 min-h-screen bg-primary">
      {loadPage ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <SplashScreen loadTimeOut={loadTimeOut} />
      )}
    </main>
  );
};
