import React , {useRef}from "react";

const MemoCount = () => {
const renderCount = useRef(0);
console.log(renderCount);

return (
    <>
    <div className="useMemoCountContainer">
<p className="useMemoCountPara">
    Nothing is memoized here, so this component will re-render every time the parent component re-renders.
    <span>Render count: {renderCount.current++} times</span>
    </p>
    </div>
    </>
)
}

// export default React.memo(MemoCount)
export default MemoCount;
