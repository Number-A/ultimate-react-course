import { useState } from "react";
import "./index.css";
export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="center">
      <div>
        <button onClick={step > 1 ? () => setStep((s) => s - 1) : null}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
