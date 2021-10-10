import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  const newComponent = () => {
    const [count, setCount] = useState(0); //eslint errror
    const incrementCount = () => {
      setCount((prevState) => prevState + 1);
    };
    return (
      <div>
        <OriginalComponent incrementCount={incrementCount} count={count} />
      </div>
    );
  };
  return newComponent;
};

export default withCounter;
