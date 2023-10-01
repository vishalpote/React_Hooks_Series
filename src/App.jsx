
// import { useState } from 'react'
// import { useState } from 'react'
import { useCallback, useState } from 'react'
import './App.css'
import UseCallbackHooksInReact from './UseCallbackHooks/UseCallbackHooksInReact'
// import UseMemoHookds from './Components/useMemoHools/UseMemoHookds'
// import Memoinreact from './Components/useMemoHools/Memoinreact'
// import Usehistorriihooks from './Components/UseLocationInReact/Usehistorriihooks'

// import Component1 from './Components/UseContextHooks/Component1'
// import UselocationEffect from './Components/UseLocationInReact/UselocationEffect'
// import UseEffectWithCleanup from './Components/UseEffect/UseEffectWithCleanup'
// import Usereff from './Components/UseRef/Usereff'
// import UseEffects1 from './Components/UseEffect/UseEffects1'
// import LoginForm from './Components/UseState/LoginForm'
// import ShortCircuitInReact from './Components/UseState/ShortCircuitInReact'
// import UsestateTodo from './Components/UseState/UsestateTodo'
// import Usestateswith_object from './Components/UseState/Usestateswith_object'
// import UseStates from './Components/useState/UseStates'
// import UseReducers from './Components/Usereducer/UseReducers'
// import Toastify from './Components/UseLocationInReact/Toastify'
// import {useSelector,useDispatch} from "react-redux"
// import { increment,decrement } from './ReactReducer/actions/Index'
// import { addItems } from './TodoReducers/actions/Index'
// import {useDispatch,useSelector} from 'react-redux'

function App() {
// const mystate=useSelector((state)=>state.IncrDecr)
// const dispatch=useDispatch();

// const [inputdata,setInputData]=useState("")
// const mystate=useSelector((state)=>state.Todofunction)
// const dispatch=useDispatch();

// const [count,setCount]=useState(0)
// const [data,setData]=useState(100)



const [number,setNumber]=useState(0)


const handleClick=useCallback(()=>{
  setNumber(number+1)
},[number])


  return (
    <>
    <h2>HELLO REACT HOOKS !</h2>
    {/* <UseStates></UseStates> */}
    {/* <Usestateswith_object></Usestateswith_object> */}
    {/* <UsestateTodo></UsestateTodo> */}
    {/* <ShortCircuitInReact></ShortCircuitInReact> */}
    {/* <LoginForm></LoginForm> */}


    {/* useeffect start */}
    {/* <UseEffects1></UseEffects1> */}
    {/* <UseEffectWithCleanup></UseEffectWithCleanup> */}


    {/* usereff start */}
    {/* <Usereff></Usereff> */}


    {/* usereducer start  */}
    {/* <UseReducers></UseReducers> */}

    {/* Usecontext hooks start  */}
    {/* <Component1></Component1> */}

    {/* UseLocation Hooks Start  */}
    {/* <UselocationEffect></UselocationEffect> */}
   {/* <Usehistorriihooks></Usehistorriihooks> */}
    {/* <Toastify></Toastify> */}


    {/* <h1>Welocme To Redux</h1> */}
    {/* <h2>INCREMENT AND DECREMENT USING REDUX</h2>

    <h2>Count : {mystate}</h2>
    <button onClick={()=>dispatch(increment())}>INCR😊</button>
    <button onClick={()=>dispatch(decrement())}>DECR😆</button> */}


       
       {/* Todo Application Using The Redux  */}

       {/* <h2>Todo Application Using Redux</h2> */}
       {/* <h2>{mystate}</h2> */}
       {/* <input type="text"  placeholder='WHAT IS YOUR TODAYS PLAN' value={inputdata}
       onChange={(e)=>setInputData(e.target.value)}
       />
        <button onClick={()=>dispatch(addItems(inputdata))}>ADD-ITEMS</button> */}
       {/* <button onClick={()=>dispatch(deleteitem)}>DELETE-ITEMS</button> */}


        {/* Searchfilter box using usestate  */}
      


      {/* Memo hooks in react js  */}

        {/* <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}> INCR😊</button> */}
      {/* <Memoinreact data={data}></Memoinreact> */}

      {/* <UseMemoHookds></UseMemoHookds> */}



      {/* callback hooks start  */}
        <h1>Count : {number}</h1>
        <UseCallbackHooksInReact onClick={handleClick}></UseCallbackHooksInReact>

    </>
  )
}

export default App
