import { useEffect, useLayoutEffect, useRef } from "react";

function UseLayout() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "nagawade";
  }, []);

  return (
    <div>
      <input type="text" placeholder="ex..." value="suyog" ref={inputRef} />
    </div>
  );
}

export default UseLayout;
