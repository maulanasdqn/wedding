import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

export const InvitationCountdown: React.FC<CountdownProps> = ({
  targetDate,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <div className="text-center text-2xl font-bold">Time's up!</div>;
  }

  return (
    <div className="flex space-x-4 text-center">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

const TimeBox: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => (
  <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg px-4 py-2">
    <span className="text-4xl font-mono">{value}</span>
    <span className="text-sm uppercase tracking-wide">{label}</span>
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
