// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [value, setValue] = useState(10);


  // Define a dynamic background gradient based on the percentage
  const circleStyle = {
    background: `conic-gradient(
      transparent ${value}%, 
      rgba(144, 238, 144, 0.8) ${value}%
    )`,
  };

  return (
    <div className="min-h-screen items-center flex flex-col">
      <h2 className="text-center text-4xl font-bold pb-10">Progress UI</h2>

      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-1/2 mb-5"
      />

      <div
        className="relative bg-green-700 rounded-full w-40 h-40 mt-5"
        style={circleStyle}
      ></div>
    </div>
  );
};

export default App;
