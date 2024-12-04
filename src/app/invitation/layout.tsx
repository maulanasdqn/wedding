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
    <main className="flex flex-col justify-center items-center h-full bg-red-600 px-0">
      {loadPage ? (
        <Fragment>
          <audio autoPlay>
            <source src="/lagu-nikah.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <main className="flex flex-col justify-center items-center max-w-[625px] gap-y-6 py-6">
            <Outlet />
          </main>
        </Fragment>
      ) : (
        <SplashScreen loadTimeOut={3} />
      )}
    </main>
  );
};
