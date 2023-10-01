

const UseCallbackHooksInReact = ({onClick}) => {
    console.log("Child Renders...")
  return (
    <>
     <button onClick={onClick}>INCR✌</button> 
    </>
  )
}

export default UseCallbackHooksInReact
