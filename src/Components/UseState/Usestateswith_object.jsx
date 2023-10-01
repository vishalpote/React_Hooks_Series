import { useState } from "react"


const Usestateswith_object = () => {
    const [objects,setObjcets]=useState({
        id:1,
        name:"vishal",
        sname:"pote"
    },
    {
        id:2,
        name:"karan",
        sname:"chavan"
    })
    const changeUpdate=()=>{
        setObjcets({...objects,name:"balu"})
    }
  return (
    <>
      <h1>Name:{objects.name} and sname: {objects.sname}</h1>
      <button onClick={changeUpdate}>Update</button>
    </>
  )
}

export default Usestateswith_object
