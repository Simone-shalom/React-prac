// Dependencies
import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

// Styles
import "./tailwind.output.css";

const questions = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human"
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day"
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average."
  }
];

const App = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl font-bold">
        Frequently asked questions
      </h2>
      <div className="flex flex-col pt-5">
        <div>
          {questions.map((ques, idx) => (
            <Card ques={ques} key={idx} isFirst={idx === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;


export const Card = ({ ques, isFirst }) => {
  const [showCard, setShowCard] = useState(isFirst);
  const [arrowDown, setArrowDown] = useState(isFirst ? "right" : "down");

  const onShowCard = () => {
    setShowCard(!showCard);
    setArrowDown(arrowDown === "right" ? "down" : "right");
  };

  return (
    <div className="flex items-center border-2 border-black py-5 justify-center m-2">
      <div className="p-5 flex flex-col items-center justify-center">
        <div
          onClick={onShowCard}
          className="flex space-x-3 cursor-pointer items-center  "
        >
          {arrowDown === "right" ? (
            <FaArrowAltCircleDown />
          ) : (
            <FaArrowAltCircleRight />
          )}
          <p className="text-xl font-semibold ">{ques.question}</p>
        </div>

        {/* {showCard && (
          <div className="">{ques.answer}</div>
        )} */}
        <div
          className={`transition-opacity duration-1000  ${
            showCard ? "opacity-100" : "opacity-0"
          }`}
        >
          {showCard && <div className="max-h-screen">{ques.answer}</div>}
        </div>
      </div>
    </div>
  );
};

