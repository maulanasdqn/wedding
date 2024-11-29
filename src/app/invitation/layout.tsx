import { SplashScreen } from "./loading";
import {
  Fragment,
  useEffect,
  useState,
  type FC,
  type ReactElement,
} from "react";
import { Outlet } from "react-router-dom";

export const InvitationLayout: FC = (): ReactElement => {
  const loadTimeOut = 4;
  const [loadPage, setLoadPage] = useState(false);

  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col justify-center min-h-screen items-center h-full w-full bg-red-600">
      {loadPage ? (
        <Fragment>
          <main className="flex flex-col gap-y-6 w-full p-6">
            <Outlet />
          </main>
        </Fragment>
      ) : (
        <SplashScreen loadTimeOut={3} />
      )}
    </main>
  );
};
