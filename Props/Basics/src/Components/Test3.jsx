
function Test3({ arr }) {
  return (
    <div>
    Array : {arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]+" "+arr[4]}
    {/* ------------------ */}
      {arr.map((ele, index) => (
        <p key={index}>
           {index}:{ele} 
        </p>
      ))}   
    </div> 
  )
}

export default Test3
