import { useReducer } from 'react';


// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}


function UseReducerHook() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="counter-container-7a3b">
      <h2 className="counter-title-4e1c">Count: <span className="counter-count-display-d5f2">{state.count}</span></h2>
      <div className="counter-button-group-8g7h">
        <button 
          className="counter-button-3k9j counter-increment-btn-2m4n" 
          onClick={() => dispatch({ type: 'increment' })}
        >
          Increment+
        </button>
        <button 
          className="counter-button-3k9j counter-decrement-btn-6p8q" 
          onClick={() => dispatch({ type: 'decrement' })}
        >
         Decrement -
        </button>
        <button 
          className="counter-button-3k9j counter-reset-btn-1l5r" 
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
        <button 
          className="counter-button-3k9j counter-set-btn-9s2t" 
          onClick={() => dispatch({ type: 'set', payload: 10 })}
        >
          Set to 10
        </button>
      </div>
    </div>
  );
}

export default UseReducerHook;