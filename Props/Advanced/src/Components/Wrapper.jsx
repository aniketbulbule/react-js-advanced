

function Wrapper({children}) {
  return (
    <div style={{color:"red" , border:"3px solid black", width:"150px" , padding:"3px"}}>
        {children} 
    </div>
  )
}

export default Wrapper