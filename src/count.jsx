import { useState } from "react";

export default function Batman() {
  let [runs, setRuns] = useState(0);
  let add = () => {
    const set = runs + 1;
    setRuns(set);
  };
  let sty = {
    border: "1px solid red",
    padding: "40px",
  };

  return (
    <div style={sty}>
      <h2>count</h2>
      <h1>Score: {runs}</h1>
      <button onClick={add}>add</button>
    </div>
  );
}
