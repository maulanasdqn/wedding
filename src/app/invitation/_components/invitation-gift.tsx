import { FC, ReactElement, useState } from "react";
import { FiCreditCard, FiGift } from "react-icons/fi";

const InvitationGift: FC = (): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<
    "rekening" | "kado" | null
  >(null);

  return (
    <div
      id="gift"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
    >
      <h1 className="text-3xl font-bold text-red-600 mb-8">Pilih Hadiah</h1>
      <div className="flex flex-col gap-3 mb-8">
        {/* Kotak Rekening */}
        <div
          onClick={() => setSelectedOption("rekening")}
          className={`bg-white shadow-md rounded-lg p-6 w-64 cursor-pointer hover:bg-red-100 border ${
            selectedOption === "rekening" ? "border-red-600" : "border-gray-300"
          } transition transform hover:scale-105 flex flex-col items-center`}
        >
          <FiCreditCard className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold text-red-600 mb-2">Rekening</h2>
          <p className="text-gray-600 text-center">
            Kirimkan hadiah terbaik Anda melalui rekening kami klik untuk
            detail.
          </p>
        </div>

        {/* Kotak Kado */}
        <div
          onClick={() => setSelectedOption("kado")}
          className={`bg-white shadow-md rounded-lg p-6 w-64 cursor-pointer hover:bg-red-100 border ${
            selectedOption === "kado" ? "border-red-600" : "border-gray-300"
          } transition transform hover:scale-105 flex flex-col items-center`}
        >
          <FiGift className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold text-red-600 mb-2">Kado</h2>
          <a href="https://www.tokopedia.com/search?q=hampers+nikahan+kado+wedding&source=universe&st=product&navsource=home&srp_component_id=02.02.01.02">
            <p className="text-gray-600 text-center">
              Kirimkan kado spesial Anda langsung ke alamat kami.
            </p>
          </a>
        </div>
      </div>

      {/* Tampilkan Detail Berdasarkan Pilihan */}
      {selectedOption === "rekening" && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center border border-red-600">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Rekening</h2>
          <p className="text-gray-700 mb-4">
            Mandiri - 1320023489322 - Fenny Oktaviani
          </p>
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Rekening</h2>
          <p className="text-gray-700 mb-4">
            Mandiri - 1300020982875 - Maulana Sodiqin
          </p>
        </div>
      )}

      {selectedOption === "kado" && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center border border-red-600">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Alamat Pengiriman
          </h2>
          <p className="text-gray-700">
            Jl. Karang Sari RT.06/Rw.01 ,Kel. Cibeureum, Kec. Cimahi Selatan,
            Kota Cimahi,40535.
          </p>
        </div>
      )}
    </div>
  );
};

export default InvitationGift;
