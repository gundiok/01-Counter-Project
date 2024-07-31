import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="count"> The current count is : {count}</div>
      <div className="button-container">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
          className=" btn increase-btn"
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
          className=" btn decrease-btn"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          className=" btn reset-btn"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
