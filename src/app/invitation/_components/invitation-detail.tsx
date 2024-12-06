import { FC, ReactElement } from "react";
import { InvitationCountdown } from "./invitation-countdown";

export const EventDetails: FC = (): ReactElement => {
  const targetDate = new Date("2024-12-14T00:00:00");
  return (
    <div
      className=" flex flex-col h-full min-h-screen gap-16 items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/bg-flower.png')" }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl">
        <h1 className="text-4xl font-bold text-[#FFD700] text-center mb-8">
          Detail Acara
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Akad Nikah */}
          <div className="flex-1 text-right border-r-2 border-[#FFD700] pr-6">
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">
              Akad Nikah
            </h2>
            <p className="text-lg">Sabtu, 14 Desember 2024</p>
            <p className="text-lg">Pukul 08.00 WIB</p>
            <p className="text-lg">
              Kanaya Food Court - Jl. Cikutra No.237, Neglasari, Kec. Cibeunying
              Kaler, Kota Bandung, Jawa Barat 40124
            </p>
          </div>
          {/* Resepsi Pernikahan */}
          <div className="flex-1 text-left pl-6">
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">
              Resepsi Pernikahan
            </h2>
            <p className="text-lg">Sabtu, 14 Desember 2024</p>
            <p className="text-lg">Pukul 10.30 WIB - 13.30 WIB</p>
            <p className="text-lg">
              G Kanaya Food Court - Jl. Cikutra No.237, Neglasari, Kec.
              Cibeunying Kaler, Kota Bandung, Jawa Barat 40124
            </p>
          </div>
        </div>
      </div>
      <InvitationCountdown targetDate={targetDate} />
    </div>
  );
};

export default EventDetails;
