import { useEffect, useState } from "react";

function Counter({ end }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const timer = setInterval(() => {

      start += Math.ceil(end / 50);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);

    }, 30);

    return () => clearInterval(timer);

  }, [end]);

  return (
    <h2>
      {count}+
    </h2>
  );
}

export default Counter;