import { useState } from "react"

function DropDown() {

   const [city, setCity] = useState("pune")

  return (
    <div> 

      <h3>Select City</h3>

      <select name="" id="" defaultValue="mumbai"  onChange={(event)=>{setCity(event.target.value)}}>

        <option value="pune">Pune</option>
        <option value="banglore">Banglore</option>
        <option value="mumbai">Mumbai</option>
        <option value="delhi">Delhi</option>

      </select>
      
      <h4>Selected City:{city}</h4>   

    </div>
  )
}

export default DropDown