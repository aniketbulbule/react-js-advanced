import { useState } from "react"

function RadioHandling() {

  const [gender, setGender] = useState("male")

  return (
    <div> 

      <h4>Select the Gender:</h4>

      <input type="radio" name='gender'  id='male' value="male" checked={gender=="male"} onChange={(event)=>{setGender(event.target.value)}}/>
      <label htmlFor="male">Male</label>  

      <input type="radio" name='gender' id='female' value="female" checked={gender=="female"}  onChange={(event)=>{setGender(event.target.value)}}/>
      <label htmlFor="female">Female</label>

      <h4>Selected Gender:{gender}</h4>  

    </div>
  )
}

export default RadioHandling