

function Test4({obj}) {

  return (
    <div>
      <p>Id:{obj.id}</p> 
      <p>Name:{obj.name}</p> 
      <p>Age:{obj.age}</p> 
      <p>Message:{obj.message}</p> 

      {/* Or------------- */} 

      {Object.entries(obj).map(([key, value]) => (
        <p key={key}>
          {key} : {value}
        </p>
      ))}

      {/* Or------------- */}

       {Object.keys(obj).map((key) => (
        <p key={key}>
          {key} : {obj[key]}
        </p>
      ))}


      {/* Or------------- */}

      {Object.values(obj).map((value, index) => (
        <p key={index}>{value}</p>
      ))}   

    </div>
  )
}

export default Test4