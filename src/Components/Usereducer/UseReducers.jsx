import { useReducer } from "react"
const reducer=(state,action)=>{
    // console.log(state,action)
    switch(action.type){
        case "INCR":
            return state=state+1
        case "DECR":
            return state=state-1<0?state:state-1
    }
    return state

    
}

const UseReducers = () => {
    const [count,dispatch]=useReducer(reducer,0)
  return (
    <>
      <h1>COUNT : {count}</h1>
      <button onClick={()=>dispatch({type:"INCR"})}>INCR😊</button>
      <button onClick={()=>dispatch({type:"DECR"})}>DECR😆</button>
    </>
  )
}

export default UseReducers
