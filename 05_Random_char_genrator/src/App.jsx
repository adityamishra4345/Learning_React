import { useState,useCallback, useEffect,useRef } from 'react'




function App() {
  const [length, setlength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [CharAllowed , setCharAllowed]=useState(false)

  const [password , setpassword]=useState()

  const [isCopied, setIsCopied] = useState(false)


  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="1234567890"

    if(CharAllowed) str+="[{()}]!@#$%&*~"
    for(let i=1 ;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str[char];
    }
    setpassword(pass);
  } , [length,CharAllowed,numberAllowed,setpassword])
    
  const copypasswordtoclipboard =useCallback(()=>{
    passwordRef.current?.select()
    setIsCopied(true);

    window.navigator.clipboard.writeText(password)
    setTimeout(() => {
    setIsCopied(false);
  }, 2000);
  },
[password])

  useEffect( ()=>{
    passwordGenerator() }, [length,CharAllowed,numberAllowed,setpassword])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
      
        value={password}
        className='outline-none w-full py-1 px-3 text-black bg-white'        
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button 
        className='outline-none bg-blue-600
         text-white 
         px-3 py-0.5
          shrink-0'
          onClick={copypasswordtoclipboard}
          >
          {isCopied ? "Copied!" : "Copy"}
          </button>
      </div>
      <div className='flex text-sm gap-x-4' >


        <div className='flex items-center gap-x-1 '>
          <input type="range" 
          min={6} 
          max={100} 
          value={length} 
          className='cursor-pointer accent-blue-600 '
          style={{ accentColor: "#2563eb" }}
          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1 rounded-2xl">
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id="characterInput"
            onChange={() => {
                 setCharAllowed((prev) => !prev )
            }}
          />
          <label >Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
