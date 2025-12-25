import './App.css'
import User from './Components/User'
import Clock from './Components/Clock'
import { useState } from 'react'

function App() {

  const userData = [
    { id: 101, name: "Aniket", age: 24 },
    { id: 102, name: "Vishal", age: 26 },
    { id: 103, name: "Sachin", age: 25 }
  ]

  const [color, setColor] = useState("green")

  return ( 
    <>
      <h1>Reuse Component In JSX</h1>

      {userData.map(user => (
        <User key={user.id} user={user} />
      ))}

      <hr />

      <h1>Default Props & Props Example</h1>
      <h2>Digital Clock In React JS</h2>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <Clock color={color} />
    </>
  )
}

export default App
