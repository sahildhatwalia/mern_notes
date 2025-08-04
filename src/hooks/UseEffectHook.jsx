// UseEffectHook.jsx


import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Initial message');



  // 1. ComponentDidMount equivalent
  useEffect(() => {
    console.log('Component mounted (runs once after initial render)');
    
    // Cleanup function - ComponentWillUnmount equivalent
    return () => {
      console.log('Component will unmount (cleanup)');
    };
  }, []); // Empty dependency array means runs once




  // 2. ComponentDidUpdate equivalent for count
  useEffect(() => {
    console.log(`Count updated to: ${count}`);
    
//     // This runs before the next effect, for cleanup
    return () => {
      console.log(`Cleaning up before count changes from ${count}`);
    };
  }, [count]); 
  // Only re-run if count changes



  // 3. ComponentDidUpdate equivalent for message
  useEffect(() => {
    console.log(`Message updated to: "${message}"`);
  }, [message]);



//   4. Runs after every render (both mount and updates)
  useEffect(() => {
    console.log('This runs after every render');
  }); 
//   No dependency array


   return (
    <div className="lifecycle-demo">
      <h2>useEffect Lifecycle Demo</h2>
      <div className="counter-display">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      
      <div className="message-display">
        <p>Message: {message}</p>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
      </div>
      
      <p className="console-note">Open console to see lifecycle logs</p>
    </div>
  );
}

export default UseEffectHook;