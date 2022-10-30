import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}></button>
      <button onClick={decrement}></button>
    </div>
  );
};

export default Counter;
