import React from "react";

function Text1() {
  let cnt1 = 0;
  let cnt2 = 0;

  const renderEveryTime = () => {
    cnt1++;
    console.log("Button 1 clicked. Count is: " + cnt1);
  }; 

  const renderOnce = () => {
    cnt2++;
    console.log("Button 2 clicked. Count is: " + cnt2);
  }; 

  return (
    <div>
      <h3>UseEffect Understanding</h3>
      <button onClick={renderEveryTime} > call any time</button> 
      <button onClick={renderOnce}> call once</button>
    </div>
  );
}

export default Text1;