import { useMemo, useState } from "react";

function UseMemo() {
  // const [name, SetName] = useState("");
  // let counter = 0;
  // for (let i = 0; i < 5; i++) {
  //   counter += 1;
  //   console.log("I", i);
  // }

  const [name, SetName] = useState("");
  const counter = useMemo(() => {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      counter += 1;
      console.log("I", i);
    }
    return counter;
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
    </div>
  );
}

export default UseMemo;
