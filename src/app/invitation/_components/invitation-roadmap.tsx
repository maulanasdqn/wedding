import { type FC, type ReactElement } from "react";

const InvitationRoadmap: FC = (): ReactElement => {
  return (
    <div
      id="journey"
      className="bg-[#F9F5F0] py-10 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold text-[#800000] mb-6">
        Perjalanan Cinta Kami
      </h2>
      <div className="relative w-full max-w-3xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD700] z-0"></div>

        <div className="space-y-10 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700] text-white text-xl font-bold rounded-full shadow-md">
              2020
            </div>
            <div className="mt-4 max-w-sm bg-white text-[#800000] p-4 rounded-lg shadow-md relative">
              <h3 className="text-lg font-semibold">Awal Bertemu</h3>
              <p className="text-sm">
                Untuk teman teman satu kampus , satu jurusan , dan satu kelas
                kita mungkin menjadi saksi atas perkenalan ,pertemuan dan
                pendekatan kita
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700] text-white text-xl font-bold rounded-full shadow-md">
              2021
            </div>
            <div className="mt-4 max-w-sm bg-white text-[#800000] p-4 rounded-lg shadow-md relative">
              <h3 className="text-lg font-semibold">Mulai Bersama</h3>
              <p className="text-sm">
                Setalah sekian banyak drama yang terjadi Kami resmi menjadi
                pasangan. Siapa sangka?
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700] text-white text-xl font-bold rounded-full shadow-md">
              2024
            </div>
            <div className="mt-4 max-w-sm bg-white text-[#800000] p-4 rounded-lg shadow-md relative">
              <h3 className="text-lg font-semibold">Lamaran</h3>
              <p className="text-sm">
                Dengan penuh keberanian dan bukan tergesa-gesa karena ini
                merupakan keinginan pihak wanita yang ingin diresmikan sebelum
                maupun sesudah wisuda dan ahirnya rencana itu pun terwujud
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700] text-white text-xl font-bold rounded-full shadow-md">
              2024
            </div>
            <div className="mt-4 max-w-sm bg-white text-[#800000] p-4 rounded-lg shadow-md relative">
              <h3 className="text-lg font-semibold">Hari Bahagia</h3>
              <p className="text-sm">
                Betapa bahagianya bisa mewujudkan apa yang biasanya hanya kita
                bicarakan seperti angan belaka, tapi We will make our happines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationRoadmap;
