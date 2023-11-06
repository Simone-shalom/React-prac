// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const tasks = [
  {
    id: 1,
    text: "Walk the dog"
  },
  {
    id: 2,
    text: "Water the plants"
  },
  {
    id: 3,
    text: "Wash the dishes"
  }
];

const App = () => {
  const [task, setTask] = useState("");
  const [taskDisplay, setTaskDisplay] = useState(tasks)
  const [idCounter, setIdCounter] = useState(4);

  const addTask = () => {
    if(task) {
      const newTask = {
        id: idCounter,
        text: task
      }
      setIdCounter(idCounter +1)
      setTaskDisplay([...taskDisplay, newTask])
      setTask('')
    }
  };

 const onDeleteTask = (id) => {
  const updatedTasks = taskDisplay.filter((task) => task.id !== id)
   setTaskDisplay(updatedTasks)
 }

  return (
    <div className="p-5 ">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="pt-5 flex flex-col justify-center w-40 items-start space-y-2">
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-3 border-2 border-gray-500 rounded-lg"
        />
        <div>
          <button
            onClick={addTask}
            className="border-2 border-black text-center px-2 hover:bg-gray-200"
          >
            Submit
          </button>
        </div>
      </div>
      <ul className="pt-5">
        {taskDisplay.map((task) => (
          <li key={task.id} className="flex space-x-3 items-center space-y-2">
            <span className="text-lg items-center w-40">- {task.text}</span>
            <button 
              onClick={() =>onDeleteTask(task.id)}
              className="border-2 border-black  px-2 hover:bg-gray-200">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
