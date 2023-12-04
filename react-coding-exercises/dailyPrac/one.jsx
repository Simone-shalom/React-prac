//checbkoxes game 
// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [array, setArray] = useState([
    "play cricekt",
    "play basketball",
    "play video game"
  ]);

  const onDelete = (item) => {
    const filteredArray = array.filter((arr) => arr !== item);
    setArray(filteredArray);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl font-bold">Checkboxes</h2>
      {array.map((arr) => (
        <Box key={arr} value={arr} onChange={onDelete} />
      ))}
    </div>
  );
};

export default App;

const Box = ({ value, onChange }) => {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected(!selected);
  };

  return (
    <div className="px-10">
      <input type="checkbox" value={value} onChange={onSelect} />
      {value}
      {selected && <button onClick={() => onChange(value)}>X</button>}
    </div>
  );
};


//data fetching 
// Dependencies
import React, { useEffect, useState } from "react";
import axios from 'axios'

// Styles
import "./tailwind.output.css";

export const App2 = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  },[])

  console.log(data)


  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold ">
        Products
      </h2>
      {data.map((prd) => (
        <Product prd={prd} key={prd.id}/>
      ))}
    </div>
  );
};

// export default App2


export const Product =({prd}) => {
  return (
    <div className='flex items-center justify-center'>
      {prd.title}
      </div>
  )
}

// Game 
// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

export const App3 = () => {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekends", "weekdays"];

  const [option, setOption] = useState("");
  const [day, setDay] = useState("");

  return (
    <div className="min-h-screen px-10 flex items-center flex-col">
      <h2 className="text-center text-4xl font-bold pb-20 ">Play a game</h2>
      <div className="flex flex-col space-y-10">
        {/* Selecting Game  */}
        <div className="flex flex-col">
          <h1>Select a Game </h1>
          <SelectComp value={option} array={options} onChange={setOption} />
        </div>

        {/* Selecting Day  */}
        <div className="flex flex-col">
          <h1>Select a Day </h1>
          <SelectComp value={day} array={days} onChange={setDay} />
        </div>
      </div>
      {day && (
        <p className="font-bold pt-10">
        You have choosen to play {option} on {day}
      </p>
      )}
    </div>
  );
};


export const SelectComp = ({ value, onChange, array }) => {
  return (
    <div>
      {array.map((item) => (
        <div key={item} className="flex space-x-1 w-20">
          <input
            type="radio"
            value={value}
            checked={value === item}
            onChange={() => onChange(item)}
          />
          <p className="text-lg font-semibold">{item}</p>
        </div>
      ))}
    </div>
  );
};