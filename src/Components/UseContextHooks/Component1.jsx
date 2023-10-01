import { createContext } from "react"
import Components2 from "./Components2"


const Name=createContext()

const Component1 = () => {
  return (
    <>
    <Name.Provider value={"vishal pote"}>

      <Components2 ></Components2>

    </Name.Provider>
    </>
  )
}

export default Component1
export {Name};
