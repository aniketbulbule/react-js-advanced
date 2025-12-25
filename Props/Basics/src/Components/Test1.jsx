import React from 'react'

function Test1(props) {
  console.log(props);
  console.log(props.msg);
 
  return (
    <div>
      <p>{props.msg}</p> 
    </div>
  )
}

export default Test1
