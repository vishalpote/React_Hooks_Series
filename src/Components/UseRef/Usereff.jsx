import { useRef, useState } from "react"
import {FcApproval} from 'react-icons/fc'

const Usereff = () => {
    const name=useRef(null);
    const [show,setShow]=useState(false)
    const submitForm=(e)=>{
        e.preventDefault()
        const namedisp=name.current.value
        namedisp===""?alert("please fill data") : setShow(true)
    }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={submitForm}>
            <label htmlFor="name">Name :</label>
            <input type="text" ref={name} />
            <br />
            <br />
            <button>Submit</button>
        </form>
      <h1>{show ? `MY NAME IS:${(name.current.value).toUpperCase()}`: ""}<FcApproval></FcApproval></h1>
      </div>
    </>
  )
}

export default Usereff
