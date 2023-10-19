// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [curencyAmount, setCurrencyAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getConversion() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${curencyAmount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        //console.log(data);
        setConverted(data.rates[toCurrency]);
        setIsLoading(false);
      }
      if (curencyAmount !== "" && fromCurrency !== toCurrency) getConversion();
    },
    [curencyAmount, fromCurrency, toCurrency]
  );

  return (
    <div className="App">
      <input
        type="text"
        value={curencyAmount}
        onChange={(amt) => setCurrencyAmount(Number(amt.target.value))}
      />
      <select onChange={(cur) => setFromCurrency(cur.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(cur) => setToCurrency(cur.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {fromCurrency === toCurrency ? (
        <p>
          {curencyAmount} {toCurrency}
        </p>
      ) : (
        <p>
          {converted} {toCurrency}
        </p>
      )}
    </div>
  );
}
