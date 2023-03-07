import React from "react";
import dayjs from "dayjs";

export function useCountDown(date: any) {
  const calculateTimeLeft = () => {
    const difference = (dayjs(date) as any) - (dayjs() as any);
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return timeLeft;
}