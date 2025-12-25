import React, { useState } from "react";

function Show() {
  const [name, setName] = useState("Pushpa");

  function handleInput(event) {
    setName(event.target.value);
  } 

  return (
    <div>
      Name:
      <input type="text"
        placeholder="Enter your good name"
        value={name}
        onChange={handleInput}
      />
      <br />
      Your Good Name is: {name}
      <br />
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default Show;
