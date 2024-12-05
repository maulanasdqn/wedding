import { FC, ReactElement } from "react";

export const InvitationGift: FC = (): ReactElement => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-8">Pilih Hadiah</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Kotak Rekening */}
        <div
          onClick={() => alert("Rekening dipilih!")}
          className="bg-white shadow-md rounded-lg p-6 w-64 cursor-pointer hover:bg-red-100 border border-red-600 transition transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-red-600 mb-2">Rekening</h2>
          <p className="text-gray-600">
            Kirimkan hadiah terbaik Anda melalui rekening berikut.
          </p>
        </div>

        {/* Kotak Kado */}
        <div
          onClick={() => alert("Kado dipilih!")}
          className="bg-white shadow-md rounded-lg p-6 w-64 cursor-pointer hover:bg-red-100 border border-red-600 transition transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-red-600 mb-2">Kado</h2>
          <p className="text-gray-600">
            Kirimkan kado spesial Anda langsung ke alamat kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationGift;
