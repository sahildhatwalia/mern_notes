import React, { useState } from 'react';

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">useState Counter Example</h2>
      <p className="counter-display">Current Count: {count}</p>
      
      <div className="button-group">
        <button className="counter-button" onClick={increment}>
          Increment (+)
        </button>
        <button className="counter-button" onClick={decrement}>
          Decrement (-)
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
      </div>

      {count > 10 && (
        <p className="counter-message">Wow, you're really counting up!</p>
      )}
      {count < 0 && (
        <p className="counter-message">Negative numbers? Interesting choice!</p>
      )}
    </div>
  );
};

export default UseStateHook;