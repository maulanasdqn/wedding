import { type FC, type ReactElement } from "react";

export const InvitationQuotes: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 p-2 w-full h-full rounded-md text-yellow-300 text-3xl">
      <div className="flex flex-col items-center justify-center  text-center py-10 px-4">
        <div className="bg-[#800000] text-[#FFD700] rounded-lg p-6 shadow-md max-w-3xl">
          <h2 className="text-sm font-bold mb-4">Surah Ar-Rum:21</h2>
          <p className="text-sm font-serif leading-relaxed mb-4">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="text-sm text-[#FFD700] italic">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
            (QS. Ar-Rum: 21)
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationQuotes;