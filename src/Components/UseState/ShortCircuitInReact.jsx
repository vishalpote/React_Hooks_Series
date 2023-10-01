import { useState } from "react"


const ShortCircuitInReact = () => {
    const [demo,setDemo]=useState(" Hello Vishal!")
  return (
    <>
      <h1>{
        demo || 
        <>
        <h2>Hello World!</h2>
        <p> How Are You !</p>
        </>
        }</h1>
    </>
  )
}

export default ShortCircuitInReact
