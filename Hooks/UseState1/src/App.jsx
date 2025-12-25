import { useState } from 'react'
import './App.css'

function App() {

  // ------------------------------------------
  const [name, setName] = useState("ooole")

  function changeName() {
    setName("Pushpa")
  } 
 
  //-------------------------------------------
  const [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  //-------------------------------------------
  const [arr, setArr] = useState(["hey, Hello who are you?"])

  function response() {
    setArr(["I am doing good, how about you."]) 
  }

  //-------------------------------------------
  const [arr1, setArr1] = useState([100, 200, 300, 400])

  function response1() {
    setArr1([...arr1, 500])
  }

  //-------------------------------------------
  const [obj, setObj] = useState({
    id: 99,
    name: "Pushpa",
    age: 999,
  })

  function updateObj() {
    setObj({
      ...obj,
      age: obj.age + 1 // example update
    })
  }

  return (
    <>
      <h3>UseState</h3>

      {/* Counter */}
      <button onClick={plus}>Increment</button> <br />
      <button onClick={minus}>Decrement</button> <br />
      <h4>{count}</h4>

      <hr />

      {/* Change Name */}
      <button onClick={changeName}>Change Name</button>
      <h4>Name: {name}</h4>

      <hr />

      {/* Array 1 */}
      <h4>User1: {arr.join(", ")}</h4>
      <button onClick={response}>Send</button>

      <hr />

      {/* Array 2 */}
      <h4>Array 2: {arr1.join(", ")}</h4>
      <button onClick={response1}>Add Number</button>

      <hr />

      {/* Object */}
      <h4>Object Data:</h4>
      <p>Id: {obj.id}</p>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>

      <button onClick={updateObj}>Update Age</button>
    </>
  )
}
export default App
