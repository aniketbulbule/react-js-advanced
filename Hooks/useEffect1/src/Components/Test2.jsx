import React, { useEffect, useState } from "react";

function Text2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Text2 Component Loaded");
  }, []); // Runs only once

  return (
    <div>
      <h3>This is Text2 Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Text2</button>
    </div>
  );
}

export default Text2;