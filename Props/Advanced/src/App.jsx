import { useState } from 'react'
import './App.css'

import Test1 from './Components/Test1'
import Test2 from './Components/Test2'
import Test3 from './Components/Test3'
import User from './Components/User'
import Wrapper from './Components/Wrapper'

function App() {

  return ( 
    <>
      <h2>Default Props</h2>
      <User name="Pushpa Raj"/>
      <User />
      <User name='Rocky Bhai'/>
      <User />                              
      <hr />
      
      <h2>Pass Jsx with Props(Children)</h2>
      <Wrapper>
         <p>Hello,Everyone</p>
      </Wrapper>

      <hr />

      <Test1 color="green"/>
      <hr />

      <Test2 />
      <hr />

      <Test3 />
      <hr />
  
    </>
  )
}

export default App;
