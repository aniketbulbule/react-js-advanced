import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'  

function App() {

  return (
    <>
      <Navbar/> 
      <MainContent/>
      <Footer/> 
    </>
  )
}

export default App
