import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getaAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getaAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getaAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(promps) {
  return (
    <p>
      You have read <strong>{promps.count}</strong> pieces of advice
    </p>
  );
}
