import { SplashScreen } from "./loading";
import { useEffect, useState, type FC, type ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const InvitationLayout: FC = (): ReactElement => {
  const loadTimeOut = 4;
  const [loadPage, setLoadPage] = useState(false);

  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col justify-center items-center h-full bg-white px-0">
      {loadPage ? (
        <section className="w-full max-w-[425px] bg-white p-4">
          <Outlet />
        </section>
      ) : (
        <SplashScreen loadTimeOut={3} />
      )}
    </main>
  );
};
