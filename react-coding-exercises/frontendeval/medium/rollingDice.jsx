// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  const [number ,setNumber] = useState(0)
  const [show, setShow] = useState(false)

  const onRoll = () => {
    setShow(true)
  }

  return (
    <div className="min-h-screen flex items-center jusitfy-center flex-col">
      <h2 className="text-center text-4xl font-bold">Rolling dice</h2>
      <h2 className="text-center text-2xl font-bold pt-12">Number of dice</h2>

        <input 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className='border-2 w-48 border-black px-3 font-bold text-lg' type='number' min='0'/>
        <button onClick={onRoll} className={`${number > 0 ? 'cursor-pointer ' : "cursor-not-allowed"} text-xl font-bold mt-3 border-2 border-black bg-gray-200 px-16`}>
          Roll
          </button>
        {show && (
            <DiceDisplay number={number}/>
        )}
      
   </div>
  );
};

export default App;


const DiceDisplay = ({number}) => {
  
  return (
    <div>
    <Dice />
      </div>
  )
}

const Dice = () => {
  return (
    <div>
      Dice
      </div>
  )
}