// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },1000)

    return () =>  clearInterval(interval)
  },[])

  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold">Digital Clock</h2>
      <div className='flex items-center justify-center'>
{time} 
        </div>
    </div>
  );
};

export default App;