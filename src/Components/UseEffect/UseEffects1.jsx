import { useEffect, useState } from "react"


const UseEffects1 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Chats(${count})`
    },[count])
   
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>INCR😊</button>
      <button onClick={()=>setCount(count-1)}>DECR😆</button>
    </>
  )
}

export default UseEffects1
