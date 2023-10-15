import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const total = Math.round(bill * (1 + (tip1 + tip2) / 2 / 100));
  const amountTip = Math.round(total - bill);

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <ServiceTip tip={tip1} onTip={setTip1}>
        How did you like the service?
      </ServiceTip>
      <ServiceTip tip={tip2} onTip={setTip2}>
        How did your friend like the service?
      </ServiceTip>
      <Output total={total} tip={amountTip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onBill((bill) => Number(e.target.value))}
      ></input>
    </div>
  );
}
function ServiceTip({ tip, onTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ total, tip }) {
  return (
    <div>
      <h3>{total > 0 && `You pay $${total} ($${total}+$${tip})`}</h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
