import { useState } from "react"

export default function Footboll() {
    let [footboll,setFootboll]=useState(0)

    let goal=()=>{
        let goalS=footboll+1 
        setFootboll(goalS)
    }
  return(
    <>
    <h1>player:neymar js</h1>
    <h1>score:{footboll}</h1>
    <button onClick={goal}>goal</button>
    </>
  )
}
