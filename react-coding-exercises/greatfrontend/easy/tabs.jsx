// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [active, setActive] = useState("");

  const onActive = (id) => {
    setActive(id);
  };

  const items = [
    {
      id: "html",
      text: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      id: "css",
      text: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    },
    {
      id: "js",
      text: "JS",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    }
  ];

  return (
    <div className="p-5">
      <div className="flex space-x-1 pb-5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onActive(item.id)}
            className={`${active === item.id ? "bg-purple-500 text-white" : ""}
              border-2 border-black w-16 p-2`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {active === item.id && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
