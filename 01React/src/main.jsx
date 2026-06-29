import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
import Adi from './adi.jsx'
//here .render is jsx custom rendering method which takes this type like fn if we have to 
//use our  something we done in adi.jsx then we have to build our custom render too
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
//to run this we have to introduce our custom render as in custom react folder as .reder will not run this
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



// const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    
   
)
//this out this .render wanna us to give it 



createRoot(document.getElementById('root')).render(
  <>
  {reactElement}
    <Adi/>
    
    <App />
 </>
)
