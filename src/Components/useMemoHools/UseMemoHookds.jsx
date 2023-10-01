import { useMemo, useState } from "react"


const UseMemoHookds = () => {
    const [number,setNumber]=useState(0);

    const squareNumber=useMemo(()=>{
        // console.log("Square Number:")
        return number*number;
    },[number])
  return (
    <>
      <h1>Count : {squareNumber}</h1>
      <button onClick={()=>setNumber(number+1)}>Square</button>
    </>
  )
}

export default UseMemoHookds
