import { use } from "react";
import Friend from "./friend";

export default function Friends({ fetchFriend }) {
  let sty = {
    border: "1px solid green",
    padding: "40px",
    borderRadius: "10px",
    width: "80%",
  };
  let friend = use(fetchFriend);
  console.log(friend);
  return (
    <>
      <div style={sty} className="card">
        <h2>friends:{friend.length}</h2>
        {friend.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </>
  );
}
