import { useState } from "react";

export default function Player() {
  let [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);

  let updateRun = () => {
    let setRun = runs + 1;
    setRuns(setRun);
  };

  let updateRun4 = () => {
    let setRun4 = runs + 4;
    setRuns(setRun4);
  };
  let updateRun6 = () => {
    let setRun6 = runs + 6;
    let sixx = six + 1;
    setSix(sixx);
    setRuns(setRun6);
  };

  return (
    <>
      <h1>player: Bangladesh</h1>

      {runs > 50 && <p>your score is:{runs}</p>}
      <h2>score:{runs}</h2>
      <small>six:{six}</small>
      <button onClick={updateRun}>singles</button>
      <button onClick={updateRun4}>four</button>
      <button onClick={updateRun6}>six</button>
    </>
  );
}
