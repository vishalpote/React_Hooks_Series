import { useState } from "react";


const UsestateTodo = () => {
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
    const [myArray,setMyArray]=useState(biodata)
    const removeItem=(id)=>{
        const updatedList=myArray.filter((ele)=>{
            return ele.id!==id
            
        })
        console.log(id)
        setMyArray(updatedList)
    }

  return (
    <>
      {
        myArray.map((ele)=>{
           
            return(
                <h1 key={ele.id}> Name : {ele.name} sname : {ele.sname} <button onClick={()=>removeItem(ele.id)}>Remove</button> </h1>
            )
        })
      }
    </>
  )
}

export default UsestateTodo
