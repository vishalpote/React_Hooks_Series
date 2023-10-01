
import { useContext } from "react"
import { Name } from "./Component1"

const Components3 = () => {
    const myName=useContext(Name)
  return (
    <>
       <h1>Hello {myName}! </h1>
    </>
  )
}

export default Components3
