import { useEffect, useState } from "react"


const UseEffectWithCleanup = () => {
    const [screensize,setScreenSize]=useState(window.screen.width);
    const actualwidth=()=>{
        console.log(window.innerWidth)
        setScreenSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",actualwidth)
        return ()=>{
            window.removeEventListener("resize",actualwidth)
        }
    })
  return (
    <>
      <h1>The screen Size Is {screensize}</h1>
    </>
  )
}

export default UseEffectWithCleanup


