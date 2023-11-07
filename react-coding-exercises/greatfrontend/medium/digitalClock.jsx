// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // Extracting hours, minutes, and seconds
const [hours, minutes, seconds] = time.split(":").map((timePart) =>timePart.padStart(2, '0'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },1000)

    return () =>  clearInterval(interval)
  },[])

  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold">Digital Clock</h2>
      <div className='flex items-center justify-center pt-5'>
        <div className='w-40 flex  h-16 bg-black rounded-lg border-2 border-gray-500 font-bold text-4xl text-white items-center justify-center'>
        <DigitDislay digit={hours}/>:
        <DigitDislay digit={minutes}/>:
        <DigitDislay digit={seconds}/>
        </div>
      </div>
    </div>
  );
};

export default App;


const DigitDislay = ({digit}) => {
  return (
    <div className='font-serif text-4xl font-bold '>
        {digit}
      </div>
  )
}