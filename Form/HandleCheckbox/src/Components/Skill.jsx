import { useState } from "react"

function Skill() {

  const [skills, setSkills] = useState([])

  function handleSkills(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value, event.target.checked);

    const value = event.target.value
    const checked = event.target.checked

    if (checked) {
      // if checkbox is checked → add skill
      // setSkills([event.target.value])
      // setSkills(event.target.value)
      setSkills([...skills, value])  //spread operator
    } else {
      // if checkbox is unchecked → remove skill
      setSkills(skills.filter(skill => skill !== value)) 
    }
  }

  return (
    <>
      <h2>Select Your Skills</h2>

      <input type="checkbox" id="java" value="java" onChange={handleSkills} />
      <label htmlFor="java">Java</label>
      <br />

      <input type="checkbox" id="javascript" value="javascript" onChange={handleSkills} />
      <label htmlFor="javascript">Javascript</label>
      <br />

      <input type="checkbox" id="sql" value="sql" onChange={handleSkills} />
      <label htmlFor="sql">SQL</label>
      <br />

      <input type="checkbox" id="react-js" value="react-js" onChange={handleSkills} />
      <label htmlFor="react-js">React-js</label>
      <br />

      <h3>Selected Skills:</h3>

      {/* {skills +" "} */}

      {/* -------- */}

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </>
  )
}

export default Skill
