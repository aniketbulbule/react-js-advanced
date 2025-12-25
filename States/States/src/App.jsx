import './App.css'
import Show from './Components/Show';

function Message({ msg }) {
  return (
    <>
      <h2>{msg}</h2>
    </> 
  )
} 

let cnt = 0; // global variable

function App() {
  let msg = "hello.."

  return (
    <>
      {msg}
      <h3>{msg} Aniket</h3>

      <Message msg={msg} />

      {cnt} <br />   <hr />
      

      <button onClick={Count}>click</button>

      {/* ------------- */}
      <Show/>
    </>
  )
}

export default App;

function Count() {
  cnt = cnt + 1;
  console.log(cnt); 
  // UI will NOT update because React does not re-render with normal variables.
  // To update the UI, we must use React Hooks like useState().
}
