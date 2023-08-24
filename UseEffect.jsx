import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <p>{count}</p>
    </>
  );
}

export default UseEffect;
