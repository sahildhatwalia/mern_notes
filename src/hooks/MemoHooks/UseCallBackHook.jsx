import { useState } from "react";

const Button = ({ onClick, children }) => {
    console.log(`Rendering Button:, ${children}`)

    return (
        <button className="counter-button" onClick={onClick}>
            {children}
        </button>
    );
}

const UseCallBackHook = () => {

    const [count, setCount] = useState(0);


    const increment = () => {
        console.log("Incrementing inside");
        setCount(count + 1);
    };
    const decrement = () =>setCount(count - 1);
    
    return (
        <>
        <div className="CallBackcounter-container">

<h1 className="CallBackcounter-title">UseCallBack Example</h1>
<h1 className="CallBackcounter-count">Count: {count}</h1>

<div>

        <Button onClick={increment}>Increment (+)</Button>
        <Button onClick={decrement}>Decrement (-)</Button>
</div>
        </div>
        
        </>
    )
};

export default UseCallBackHook;