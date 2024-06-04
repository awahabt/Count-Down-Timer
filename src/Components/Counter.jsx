import React, { useEffect, useState } from "react";

const Counter = ({ initialCount, initialCount1, initialCount2 }) => {
  const [Count, setCount] = useState(initialCount);

  useEffect(() => {
    if (Count === 59){
      return initialCount = 0;
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [Count]);

  
  return (
    <div className="container">
      <p>{Count}</p>
    </div>
  );
};

export default Counter;
