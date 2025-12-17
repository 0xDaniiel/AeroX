import { useState, useEffect } from "react";

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

const getTimeLeft = () => {
  // Get stored end time or create a new one
  const storedEnd = localStorage.getItem("presale_end");
  let endTime: number;

  if (storedEnd) {
    endTime = parseInt(storedEnd, 10);
    // If past the end time, reset to 3 days from now
    if (Date.now() >= endTime) {
      endTime = Date.now() + THREE_DAYS_MS;
      localStorage.setItem("presale_end", endTime.toString());
    }
  } else {
    endTime = Date.now() + THREE_DAYS_MS;
    localStorage.setItem("presale_end", endTime.toString());
  }

  const diff = endTime - Date.now();
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTimeLeft();
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Presale ends in</span>
        <div className="flex items-center gap-2">
          {timeBlocks.map((block, i) => (
            <div key={block.label} className="flex items-center">
              <div className="bg-secondary rounded px-2 py-1">
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {String(block.value).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted-foreground ml-1">{block.label[0].toLowerCase()}</span>
              </div>
              {i < timeBlocks.length - 1 && <span className="text-muted-foreground mx-1">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
