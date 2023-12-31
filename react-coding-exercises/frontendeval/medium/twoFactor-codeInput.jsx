import React, { useRef, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl font-bold ">Two-factor code input</h2>
      <CodeInput digits={4} xhardcodedCode={"1234"} />
    </div>
  );
};

const CodeInput = ({ digits, xhardcodedCode }) => {
  const [code, setCode] = useState(Array(digits).fill(""));
  const [disabled, setDisable] = useState(false);
  const [goodCode, setGoodCode] = useState(false);
  const [badCode, setBadCode] = useState(false);

  const inputRefs = Array(digits)
    .fill()
    .map((_, i) => useRef(null));

  const handleInputChange = (index, value) => {
    // If the value is a number between 0 and 9 or an empty string, update the code
    if (/^[0-9]{0,1}$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < code.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const submitCode = () => {
    const enteredCode = code.join("");
    const hardcodedCode = xhardcodedCode;

    if (enteredCode.length === 4) {
      setDisable(false);
      if (enteredCode === hardcodedCode) {
        setGoodCode(true);
      } else {
        setGoodCode(false);
        setBadCode(true);
      }
    } else {
      setDisable(true);
    }
  };

  const onPaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === digits && /^\d+$/.test(pastedData)) {
      setCode(pastedData.split("").slice(0, digits));
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center pt-12">
        <div className="flex space-x-3 items-center justify-center pb-4">
          {code.map((value, index) => (
            <Input
              onPaste={onPaste}
              key={index}
              value={value}
              ref={inputRefs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        {disabled && (
          <div className="flex text-center pb-4 text-red-600 text-lg capitalize font-serif">
            missing fields !
          </div>
        )}
        {goodCode && (
          <div className="flex text-center pb-4 text-lg capitalize font-serif">
            Logged in successfully !
          </div>
        )}
        {badCode && (
          <div className="flex text-center pb-4 text-red-600 text-lg capitalize font-serif">
            Incorrect Code !
          </div>
        )}
        <button
          onClick={submitCode}
          className="flex bg-gray-200 items-center justify-center border-2 border-black  w-64 py-3 text-lg font-bold rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const Input = React.forwardRef(({ value, onChange, onPaste }, ref) => {
  return (
    <div className="">
      <input
        onPaste={onPaste}
        className="w-16 h-16 border-2 border-black text-center font-bold text-3xl"
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

export default App;
