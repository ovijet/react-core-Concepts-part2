import "./App.css";
import Batman from "./count";
import Player from "./batsman";
import Footboll from "./footboll";
import Friends from "./friends";
import Users from "./users";
import Posts from "./posts";
import { Suspense } from "react";

// let fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())

// let fetchFriends= async()=>{
//   let res= await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }
// console.log(fetchFriends);

let fetchPosts = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

function App() {
  // let fetchFriend=fetchFriends()
  let fetchPost = fetchPosts();
  // console.log(fetchPost);

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

    <Suspense fallback= {<h2>posted added</h2>}>
      <Posts fetchPost= {fetchPost}></Posts>
    </Suspense>


      {/* <Suspense fallback={<h3>loading........</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h2>dsto:</h2>
    }>
      <Friends fetchFriend={fetchFriend}></Friends>
    </Suspense> */}

      {/* 
      <Batman></Batman>
      <Player></Player>
      <Footboll></Footboll>
      <button onClick={onClick}>click me</button> <br />
      <button onClick={clickHenler}>click me 2</button>
      <button onClick={() => clickMe(10)}>click3</button> */}
    </>
  );
}

export default App;
