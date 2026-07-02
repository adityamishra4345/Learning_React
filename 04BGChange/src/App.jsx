import { useState } from 'react'

import './App.css'
//onclick requires a fn so we give a fn
function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"  style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap rounded-3xl justify-center gap-3 shadow-lg bg-white px-3 py-1 " >
          <button className="outline-none  rounded-xl p-2 m-4 bg-blue-600 text-2xl text-white" onClick={()=> setcolor("blue")}>blue

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-black text-2xl text-white" onClick={()=> setcolor("black")}>black

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-red-600 text-2xl text-white" onClick={()=> setcolor("red")}>red

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-green-600 text-2xl text-white" onClick={()=> setcolor("green")}>green

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-cyan-400 text-2xl text-white" onClick={()=> setcolor("cyan")}>cyan

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-pink-500 text-2xl text-white" onClick={()=> setcolor("pink")}>pink

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-purple-500 text-2xl text-white" onClick={()=> setcolor("purple")}>purple

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-olive-400 text-2xl text-black" onClick={()=> setcolor("olive")}>olive

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-gray-500 text-2xl text-white" onClick={()=> setcolor("gray")}>gray

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-yellow-500 text-2xl text-white" onClick={()=> setcolor("yellow")}>yellow

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-amber-500 text-2xl text-white" onClick={()=> setcolor("gold")}>amber

          </button>
          <button className="outline-none  rounded-xl p-2 m-4 bg-white text-2xl text-black" onClick={()=> setcolor("white")}>white

          </button>
          
        </div>

    </div>
    </div>
      
    </>
  )
}

export default App
