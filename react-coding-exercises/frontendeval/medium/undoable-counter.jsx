// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const [history , setHistory] = useState([])
  const [redoHistory, setRedoHistory] = useState([]);


  const handleAction = (value) => {
    setCount(count + value)
    setHistory((prev) => [...prev, count +value])
  }

  const onUndo = () => {
    if (history.length > 1) {
      const lastValue = history[history.length - 2];
      setRedoHistory([...redoHistory, count]);
      setCount(lastValue);
      setHistory(history.slice(0, history.length - 1));
      setDisabled(false);
    } else if (history.length === 1) {
      setCount(0);
      setHistory([]);
      setRedoHistory([]);
      setDisabled(false);
    }
  }

  console.log(history)
  console.log(redoHistory)

  const onRedo = () => {
    if (redoHistory.length > 0) {
      const nextRedoValue = redoHistory[redoHistory.length - 1];
      setCount(nextRedoValue);
      setRedoHistory(redoHistory.slice(0, redoHistory.length - 1));
      setHistory((prev) => [...prev, nextRedoValue]);
    }
  };


 return (
    <div className="min-h-screen p-5 ">
      <h2 className="text-center text-4xl font-bold ">
        Undoable Counter
      </h2>

      <div className='flex flex-col pt-5'>
        {/* Undo Redo */}
        <div className='flex items-center justify-center space-x-10'>
        <button
          onClick={onUndo}
          className='text-lg border-2 border-black px-3 py-2 font-bold bg-gray-200'>
          Undo
        </button>
        <button
          disabled={disabled}
          onClick={onRedo} 
          className={`${disabled ?'opacity-50 cursor-not-allowed':'opacity-100 cursor-pointer'} text-lg border-2 border-black px-3 py-2 font-bold bg-gray-200`}>
          Redo
        </button>
        </div>

        <div className='flex pt-10 px-5 justify-between '>
        {/* Left side Buttons */}
          <div className='flex items-center justify-start space-x-3 '>
            <Button text='-100' onCLick={() => handleAction(-100)}/>
            <Button text='-10' onCLick={() => handleAction(-10)}/>
            <Button text='-1' onCLick={() => handleAction(-1)}/>
          </div>

        <div className='flex items-center justify-center'>
          <p className='text-3xl font-bold'>
          {count}
          </p>
          </div>

          {/* Right side Buttons */}
          <div className='flex items-center justify-end px-5 space-x-3'>
            <Button text='+1' onCLick={() => handleAction(+1)}/>
            <Button text='+10' onCLick={() => handleAction(+10)}/>
            <Button text='+100' onCLick={() => handleAction(+100)}/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const Button =({text, onCLick}) => {
  return (
    <button 
      onClick={onCLick}
      className='text-lg border-2 w-16 border-black px-3 py-2 font-bold bg-gray-200'>
          {text}
        </button>
  )
}
