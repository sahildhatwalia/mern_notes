import React ,{ useMemo} from 'react'


const ExpensiveComponent = () => {
  // Simulate an expensive calculation
  const sum = () => {
    console.log('Calculating sum...');
  let i = 0;
  for ( i = 0; i < 1000000000; i++) {
   i = i + 1;
  }
  return i ;

};

// const total = useMemo(() => sum(), []); 
// Only calculate once on mount

const total = sum();

return <p> Sum: {total}</p>

};


const UseMemoHook = () => {
const [count, setCount] = React.useState(0);

  return (
  <>
  <div className="useMemoHookContainer">
<ExpensiveComponent />

<button
onClick={() => setCount(count + 1)}
className="useMemoButton"
> 
Re-render Btn
</button>

<p className="useMemoCount">Perent re-render: {count}</p>

  </div>


  </>
  )
}

export default UseMemoHook;