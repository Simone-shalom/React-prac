// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const storedTodos = JSON.parse(localStorage.getItem("todos1")|| '')

  useEffect(() => {
    if(storedTodos){
        setItems(storedTodos)
    }
  },[])

  const onAddItem = () => {
    setItems([...items, text]);
    setText("");
    localStorage.setItem("todos1", JSON.stringify([...items, text]));
  };

  console.log(items);

  return (
    <div className="min-h-screen px-10">
      <h2 className="text-center font-bold pb-20">My list</h2>

      <button
        onClick={onAddItem}
        className="border border-black px-3 rounded-lg font-bold"
      >
        Add Todo
      </button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="focus:outline-none border border-black px-3"
        placeholder="clean the house"
      />

      <div>
        {items.map((item) => (
          <Item item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default App;

interface ItemProps {
    item: string
}
export const Item = ({ item }:ItemProps) => {
  return <div className="flex items-center flex-col">{item}</div>;
};



//wokring timer with pause - 
// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const onPause = () => {
    setRunning(!running);
  };

  return (
    <div className="min-h-screen px-10 flex items-center flex-col">
      <h1 className="text-2xl font-semibold">Timer comp</h1>

      <div>{time}</div>
      <button onClick={onPause}>Stop</button>
    </div>
  );
};

export default App;
