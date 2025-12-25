import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DefaultExport from './Components/DefaultExport'
import { NamedExport } from './Components/NamedExport'
import { MultipleExport,AnotherExport } from './Components/MultipleExport' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DefaultExport/>
     <NamedExport/>

     <MultipleExport/> 
     <AnotherExport/>
    </>
  ) 
}

export default App
