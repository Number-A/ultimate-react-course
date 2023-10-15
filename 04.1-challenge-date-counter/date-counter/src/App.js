import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="center">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>{count === 0 ? `Today is ${date.toDateString()}` : ""}</span>
        <span>
          {count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : ""}
        </span>
        <span>
          {count < 0 ? `${count * -1} days ago was ${date.toDateString()}` : ""}
        </span>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
