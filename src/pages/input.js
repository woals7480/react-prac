import React, { useState } from "react";

const Input = () => {
  const [txtValue, settxtValue] = useState("");

  const change = (e) => {
    settxtValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={change} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
