import { useState } from 'react'

import './App.css'



 function App() {
  
  const [count, setCount] = useState(15)
    const increase=function inccounter(){
      if(count<25){
        //if i write 10 times this then also only 1 added
        //to do setCounter(Counter => Counter + 1)
         
        setCount(count+1);}

  }
   const decrese=function deccounter(){
    if(count>0){
        
        setCount(count-1);}

  }

  return (
    <>
      <h1 >count is {count}</h1>
      <button class="but" onClick={increase} > Increse </button>
      <br />
      <button class="but" onClick={decrese}>Decrese</button>
    </>
  )
}

export default App
