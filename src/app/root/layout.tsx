import { RootLoading } from "@/app/root/loading";
import { useEffect, useState, type FC, type ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: FC = (): ReactElement => {
  const loadTimeOut = 4;
  const [loadPage, setLoadPage] = useState(false);

  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-red-600 px-0">
      {loadPage ? (
        <section className="w-full h-screen max-w-[425px] overflow-y-hidden bg-red-600">
          <Outlet />
        </section>
      ) : (
        <RootLoading />
      )}
    </main>
  );
};
