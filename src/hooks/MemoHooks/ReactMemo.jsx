import React from "react";
import Count from "./MemoCount";


const ReactMemo = () => {
const [count, setCount] = React.useState(0);

    return (
        <>
        <div className="useMemoHookContainer">

            <h1 className="useMemoHookTitle">React Memo Example</h1>
            <p className="useMemoCount">Count: {count}</p>
            <button className="useMemoButton" onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
        <div className="usememoCountContainer">
            <Count />
        </div>
        </>
    )
}

export default ReactMemo;