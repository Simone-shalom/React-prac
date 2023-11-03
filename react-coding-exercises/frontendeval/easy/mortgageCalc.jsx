// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [rate, setRate] = useState(3);
  const [length, setLength] = useState(30);

  const [mortgage, setMortgage] = useState();

  const totalPayments = length * 12;
  const monthlyRate = rate /100/ 12;

  const Calculate = () => {
    const calculatedMortgage =
    (loanAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments));
  setMortgage(calculatedMortgage);
  };

  const formattedMortgage = `$${Math.floor(mortgage)
    .toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/,/g, ",")}`;

  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl font-bold ">Mortgage calculator</h2>

      <div className="flex flex-col p-10  space-y-5">
        <InputComp
          value={loanAmount}
          onChange={setLoanAmount}
          text="Principal Loan Amount"
          placeholderVal="5000"
        />

        <InputComp
          value={rate}
          onChange={setRate}
          text="Interest rate"
          placeholderVal="3"
          metric="%"
        />

        <InputComp
          value={length}
          onChange={setLength}
          text="Length of loan "
          placeholderVal="30"
          metric="Years"
        />
      </div>

      <button
        onClick={Calculate}
        className="px-10 w-40 border-2 border-black mx-10 h-12 font-semibold text-lg rounded-md"
      >
        Calculate
      </button>

      <div className="px-10 py-3 flex font-semibold text-lg rounded-md">
       <p>Your monthly Mortgage payment will be - 
         </p> 
         {mortgage && (
             <div>
             {formattedMortgage}
               </div> 
         )}    
      </div>
    </div>
  );
};

export default App;

const InputComp = ({ text, value, onChange, placeholderVal, metric }) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold">{text}</p>
      <div className="flex space-x-2 font-bold">
        <input
          type="number"
          placeholder={placeholderVal}
          className="border border-black w-64 rounded-md px-2 text-lg"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <p>{metric}</p>
      </div>
    </div>
  );
};
