// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const lights = [
  {
    id: 1,
    text: "red",
    duration: 4000,
    next: 'green',
  },
  {
    id: 2,
    text: "yellow",
    duration: 500,
    next: 'red',
  },
  {
    id: 3,
    text: "green",
    duration: 3000,
    next: 'yellow',
  },
];


const App = () => {

  const [active ,setActive] = useState('red')
  const [currentColor, setCurrentColor] = useState('red');

useEffect(() => {
 
  const currentLight = lights.find((light) => light.text === currentColor)
  const interval = setInterval(()=> {
    if(currentColor === 'red'){
      setActive('green')
      setCurrentColor('green')
    } else if(currentColor === 'yellow'){
      setActive('red')
      setCurrentColor('red')
    } else if(currentColor === 'green') {
      setCurrentColor('yellow')
      setActive('yellow')
    }
  },currentLight.duration)

  return () => clearInterval(interval)
},[currentColor])

  return <div className='p-5 flex flex-col items-center justify-center'>
    <h1 className='text-2xl font-bold text-center pb-5 '>
      Traffic Lights
      </h1>

      {lights.map((light) => (
        <div key={light.id} className={`${active === light.text ? 'bg-red-500' : 'bg-red-100'}`}>
          <div className={`w-20 h-20 bg-${light.text}-100 border-2 border-black ${active === light.text ? `bg-${light.text}-500` : ""}`}>

            </div>
        </div>
      ))}
  </div>;
};

export default App;
