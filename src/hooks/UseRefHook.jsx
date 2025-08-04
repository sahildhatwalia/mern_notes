//UseRefHook.jsx
import React, { useRef } from 'react';


const UseRefHook = () => {
  const refElement = useRef(null);
  const [name, setName] = React.useState('Hardeep');

  console.log(refElement);

  const Reset = () => {
    setName('');
    refElement.current.focus();
  };

  const handleInput = () => {
    refElement.current.style.color = 'red';
  };

  return (
    <div className= "useRefHookContainer">
      <h1 className="useRefHookTitle">UseRef Hook Example</h1>

{/* without ref element . without ref element not apply the functionality of useref hook on the input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Focus me with Reset"
        className="useRefHookInput"
        // style={{ border: '2px solid blue' }}
      />


{/* with ref element . ref element apply the functionality of useref hook on the input */}
      <input
        type="text"
        ref={refElement}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Focus me with Reset"
        className="useRefHookInput"
        // style={{ border: '2px solid green' }}
      />


      <button onClick={Reset} className= "useRefHookButton useRefHookResetButton">
        Reset Input
      </button>
      <button onClick={handleInput} className= "useRefHookButton">
        Change Color
      </button>
      <p className= "useRefHookText">Current Input: {name}</p>
    </div>
  );
};

export default UseRefHook;