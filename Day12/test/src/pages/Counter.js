import React, { useState } from "react";
// import { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <>
      <button onClick={increment}>Inc</button>
      <p>Count:{count}</p>
      <button onClick={decrement}>Dec</button>
    </>
  );
};

export default Counter;
