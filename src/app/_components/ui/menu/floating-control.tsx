import { FC, ReactElement, useState, useEffect } from "react";
import { FiMusic, FiPause, FiSend } from "react-icons/fi";

const FloatingControls: FC = (): ReactElement => {
  const [isPlaying, setIsPlaying] = useState(true); // Default autoPlay = true

  useEffect(() => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio && isPlaying) {
      audio.play();
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* Audio Control Button */}
      <button
        className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <FiPause className="text-xl" />
        ) : (
          <FiMusic className="text-xl" />
        )}
      </button>
      {/* RSVP Button */}
      <button
        className="w-10 h-10 bg-yellow-300 bg-transparant-10 text-white rounded-full flex items-center justify-center shadow-md hover:bg-yellow-100 transition"
        onClick={scrollToRSVP}
      >
        <FiSend className="text-xl" />
      </button>
    </div>
  );
};

export default FloatingControls;
