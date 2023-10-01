import { useState } from "react"


const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [info,setInfo]=useState([])
    const submitInfo=(e)=>{
        e.preventDefault()
        const entry={ id:new Date().getTime().toString(),email:email,password:password}
        setInfo([...info,entry])
        setEmail("")
        console.log(entry.id)
        setPassword("")
    }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={submitInfo}>
        <label htmlFor="Name">Email :  
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label htmlFor="Name">PassWord :
        <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button >Submit</button>
        </form>
      </div>
      <div className="info">
        {
            info.map((ele)=>{
                return(
                    <>
                    <h1 key={ele.id} >Email : {ele.email}  Password: {ele.password}</h1>
                  
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default LoginForm
