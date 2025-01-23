import React, { useState, useEffect } from 'react';

const ClockTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

  
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default ClockTimer;
