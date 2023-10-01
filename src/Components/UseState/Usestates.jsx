import { useState } from "react";


const UseStates = () => {
    const biodata=[
        {
            id:1,
            name:"vishal",
            sname:"pote"
        },
        {
            id:2,
            name:"karan",
            sname:"chavan"
        },
        {
            id:3,
            name:"pratham",
            sname:"sonje"
        },
    ];
    const [myArray,setMyArray]=useState(biodata);
    const clearItem=()=>{
        setMyArray()
    }
    // setMyArray(biodata)
  return (
    <>
      {
        myArray.map((ele)=>{
            const {name,id,sname}=ele
            return(
                <h1 key={id}>NAME:{name} SURNAME: {sname}</h1>
            )
        })
      }
      <button onClick={clearItem}>Clear All</button>
    </>
  )
}

export default UseStates
