import { useState, useEffect, FC, ReactElement } from "react";
import { TCountdownProps, TTimeBoxProps } from "../_entities/type";

export const InvitationCountdown: FC<TCountdownProps> = (
  props,
): ReactElement => {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(props.targetDate),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(props.targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [props.targetDate]);

  if (timeLeft.total <= 0) {
    return <div className="text-center text-2xl font-bold">Time's up!</div>;
  }

  return (
    <section className="flex flex-col gap-y-4 h-screen  justify-center items-center">
      <h1 className="text-center text-white text-3xl font-bold">
        Menuju Hari Kebahagiaan
      </h1>
      <div className="flex  text-center">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </section>
  );
};

const TimeBox: FC<TTimeBoxProps> = (props): ReactElement => (
  <div className="flex flex-col items-center justify-center text-white px-1 py-2 min-h-[60px] mb-6">
    <span className="text-2xl md:text-4xl font-mono w-full">{props.value}</span>
    <span className="text-sm uppercase tracking-wide w-full">
      {props.label}
    </span>
  </div>
);

const calculateTimeLeft = (targetDate: Date) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};
