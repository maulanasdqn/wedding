import { type FC, type ReactElement } from "react";
import { InvitationCountdown } from "./invitation-countdown";

export const InvitationView: FC = (): ReactElement => {
  const targetDate = new Date("2024-12-14T00:00:00");
  return (
    <section className="flex flex-col items-center justify-center h-full min-h-screen gap-y-4 p-2 w-full rounded-md text-yellow-300 text-3xl">
      <h1 className="text-yellow-500 font-bold">Bride & Groom</h1>
      <div className="w-[120px] h-[120px] rounded-full bg-white overflow-hidden flex items-center justify-center pt-8">
        <img src="/grooms.png" width={90} alt="maul" />
      </div>
      <h1>Maulana Sodiqin S.T.</h1>
      <p className="text-sm text-center text-white">
        Putra ke 1 dari Bapak Topik Cahyana & Ibu Maryati
      </p>
      <div className="w-[120px] h-[120px] rounded-full bg-white overflow-hidden flex items-center justify-center pl-8 pt-4">
        <img src="/brides.png" width={90} alt="mpun" />
      </div>
      <h1>Fenny Oktaviani S.T.</h1>
      <p className="text-sm text-center text-white">
        Putri ke 5 dari Bapak Ahyar (Alm.) & Ibu Irawati
      </p>
      <InvitationCountdown targetDate={targetDate} />
    </section>
  );
};

export default InvitationView;
