import { useState } from 'react'

import './App.css'



 function App() {
  
  const [count, setCount] = useState(15)
    const increase=function inccounter(){
      if(count<25){
        setCount(count+1);}

  }
   const decrese=function deccounter(){
    if(count>0){
        setCount(count-1);}

  }

  return (
    <>
      <h1 >count is {count}</h1>
      <button id="but" onClick={increase} > Increse </button>
      <br />
      <button id="but" onClick={decrese}>Decrese</button>
    </>
  )
}

export default App
