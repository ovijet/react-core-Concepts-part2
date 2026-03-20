import "./App.css";
import Batman from "./count";
import Player from "./batsman";
import Footboll from "./footboll";

function App() {
  function onClick() {
    alert("click me");
  }
  let clickHenler = () => {
    alert("clicked me 3");
  };

  let clickMe = (num) => {
    let newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>react js</h1>


    <Batman></Batman>
    <Player></Player>
    <Footboll></Footboll>


{/* 
      <button onClick={onClick}>click me</button> <br />
      <button onClick={clickHenler}>click me 2</button>
      <button onClick={() => clickMe(10)}>click3</button> */}
    </>
  );
}

export default App;
