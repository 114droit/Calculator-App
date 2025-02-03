import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  function calculate() {
    setResult(eval(input));
  };

  return (
      <div className="flex flex-col justify-center items-center border-1 mx-70 h-50">
        <span className="border-1 my-4">{result}</span>
        <label className="flex my-2">Eingabe:</label>
        <input type="text" className="border-1 w-20" onChange={(e) => setInput(e.target.value)}></input>
        <button className="bg-black text-white p-1 rounded-md w-20 my-4" onClick={() => calculate()}>Calculate</button>
      </div>
  );

};

export default Calculator;