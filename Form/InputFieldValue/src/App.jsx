import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState("")

  return (
    <>
      <h3>Get Input Field Values</h3>
      {/* <input type='text' placeholder='Enter the text..'  onChange={(event)=>{alert(event.target.value)}}/>  */}

      {/* <input type='text' placeholder='Enter the text..'  onChange={(event)=>{console.log(event.target.value)}}/>  */}

      <input type="text" value={val} placeholder="Enter the text.." onChange={(event) => setVal(event.target.value)}/>
      <p>{val}</p>
      <button onClick={() => setVal("")}>Clear Value</button>

    </>
  ) 
} 

export default App
