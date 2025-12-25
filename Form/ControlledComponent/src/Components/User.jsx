
import { useState } from "react";

export default function User() {
  const [username, setUsername] = useState("aniket");
  const [email, setEmail] = useState("aniket@123");
  const [password, setPassword] = useState("pass@123");
  return (
    <div>
        <h3>Controlled Component</h3>

      {/* <form action=""> */}

        <input type="text" value={username} placeholder='Enter the username' onChange={(event)=>setUsername(event.target.value)} />       <br />
        <input type="email" value={email} placeholder='Enter the email' onChange={(event)=>setEmail(event.target.value)} />         <br />
        <input type="password" value={password} placeholder='Enter the password' onChange={(event)=>setPassword(event.target.value)} />   <br /> 
        <button style={{margin:"5px"}}>submit</button>  
      
        <button onClick={()=>{setUsername('') , setEmail('') , setPassword('')}}>clear</button> <br />


      {/* </form> */}
        Username: {username}  <br />
        Email : {email}   <br />
        Password: {password}  <br />

    </div>
  )
}
