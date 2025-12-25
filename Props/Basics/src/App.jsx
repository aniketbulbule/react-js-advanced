import { useState } from 'react'
import './App.css'

import Test1 from './Components/Test1'
import Test2 from './Components/Test2'
import Test3 from './Components/Test3'
import Test4 from './Components/Test4'
import Student from './Components/Student'

function App() {

  let number = 999;
  let str = "Aniket";
  let arr = [10, 20, 30, 40, 50];

  let obj = {
    id: 101,
    name: "Pushpa",
    age: 99,
    message: "Jhukega nahi sala",
  };

  const [student, setStudent] = useState();

  return (
    <>
      <h3>Show Props</h3>

      <Test1 msg="Hello, I am learning props" />
      <hr />

      <Test2 num={number} name={str} />
      <hr />

      <Test3 arr={arr} />
      <hr />

      <Test4 obj={obj} />
      <hr />

      <button onClick={() => setStudent("Rahul")}>
        Change Student
      </button>
      
      {student && <Student name={student} />}
     
    </>
  )
}

export default App;
