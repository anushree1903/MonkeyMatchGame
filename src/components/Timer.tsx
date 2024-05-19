import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
  onTimeout: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeout();
    }
  }, [timeLeft, onTimeout]);

  return (
    <div className="ml-16 h-4 bg-gray-200 w-full mr-2 rounded-xl">
      <div
        className="h-4 bg-yellow-500"
        style={{ width: `${(timeLeft / initialTime) * 100}%` }}
      ></div>
    </div>
  );
};

export default Timer;
