import { type FC, type ReactElement } from "react";

const InvitationQuotes: FC = (): ReactElement => {
  return (
    <section
      id="home"
      className="flex flex-col items-center pt-8 w-full h-full min-h-screen "
    >
      <p className="text-center text-sm text-yellow-500">
        "Hawa tercipta di dunia untuk menemani sang Adam, begitu juga dirimu
        tercipta tuk temani aku"
      </p>
      <p className="text-xs text-yellow-500 p-1">"-Dewa19, 2 Sedjoli"</p>
      <img src="/flower.png" width={180} alt="flower" />
      <div className="flex flex-col items-center justify-center gap-y-4 p-2 rounded-md text-yellow-300 text-3xl">
        <div className="flex flex-col items-center justify-center  text-center py-10 px-4">
          <div className="bg-[#800000] text-[#FFD700] rounded-lg p-6 shadow-md max-w-3xl">
            <h2 className="text-sm font-bold mb-4">QS Ar-Rum:21</h2>
            <p className="text-sm font-serif leading-relaxed mb-4">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
              لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
              إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
            </p>
            <p className="text-sm text-[#FFD700] italic">
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.” (QS. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InvitationQuotes;
