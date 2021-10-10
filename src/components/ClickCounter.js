import React from "react";

export default function ClickCounte({ count, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}
