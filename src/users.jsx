import { use } from "react";

export default function Users({fetchUser}){
    let sty = {
    border: "1px solid yellow",
    padding: "40px",
    borderRadius: "10px",
    width: "80%",
  };
  let fetch =use(fetchUser)
  console.log(fetch);
  return(
    <>
      <div style={sty}>
        <h1>User:{fetch.length}</h1>
      </div>
    </>
  )
}