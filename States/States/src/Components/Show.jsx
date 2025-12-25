
import React, { useState } from 'react'

function Show() {
  const [display,setDisplay]=useState(true);


  return (
    <div>
        <h3>tiggel and hide show</h3>
        <button onClick={()=>setDisplay(!display)}>click</button> <span> = </span>
        {/* {display? "Hide" : "Show"} <br /> */}
        {display? "Hide" : null}
    </div> 
  ) 
} 
 
export default Show