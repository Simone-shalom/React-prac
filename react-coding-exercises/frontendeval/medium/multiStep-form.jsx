// Dependencies
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [missing, setMissing] = useState(false);
  const [survay, setSurvay] = useState(false);

  const onSubmit = () => {
    if (!name || !email || !date || !password) {
      setMissing(true);
      return;
    }
    setMissing(false);
    console.log("form submited");
    console.log(name, email, date, password);
  };

  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  const onBack = () => {
    setStep((prev) => prev - 1);
  };

  const onGmailCheckOnNext = () => {
    if (email.includes("@gmail.com")) {
      setSurvay(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const onHideSurvay = () => {
    setSurvay(false);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center pb-5 ">MultiStep Form</h1>
      {step === 1 && (
        // Name Modal
        <Modal
          name="Name"
          onClick={onNext}
          btnAction="next"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {step === 2 && (
        //Email modal
        <Modal
          name="Email"
          onClick={onGmailCheckOnNext}
          onBack={onBack}
          btnAction="next"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      )}
      {step === 3 && (
        //Date modal
        <Modal
          name="Date"
          onClick={onNext}
          onBack={onBack}
          btnAction="next"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
      )}
      {step === 4 && (
        //Password modal
        <Modal
          name="Password"
          onClick={onSubmit}
          onBack={onBack}
          btnAction="Submit"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      )}

      {survay && (
        <div className="z-10 flex flex-col items-center justify-center absolute inset-0 bg-white h-full">
          <h1 className="text-2xl font-bold"> Survay</h1>
          <h3 className="font-semibold">Why u use gmail {name}??</h3>
          <div>
            <div className="flex space-x-2">
              <input type="checkbox" />
              <p>Cause</p>
            </div>
            <div className="flex space-x-2">
              <input type="checkbox" />
              <p>Why not</p>
            </div>
            <div className="flex space-x-2">
              <input type="checkbox" />
              <p>Yassir</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={onHideSurvay}
              className="border-2 capitalize text-lg font-semibold border-black w-20 mt-3"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {missing && (
        <div className="text-red-600 font-bold text-xl">
          Missing fields, go back
        </div>
      )}
    </div>
  );
};

export default App;

const Modal = ({ name, onClick, btnAction, onBack, value, onChange, type }) => {
  return (
    <div className="p-5 px-10 items-center justify-center flex">
      <div className="flex flex-col">
        {onBack && (
          <div className=" absolute ">
            <button
              onClick={onBack}
              className="text-lg flex space-x-2 items-center focus:outline-none font-semibold text-blue hover:scale-110 transition duration-300"
            >
              <FaArrowLeft color="" /> <p>Back</p>
            </button>
          </div>
        )}
        <div className="flex flex-col ">
          <h1 className="pt-16 text-lg font-semibold capitalize">{name}</h1>
          <input
            className="border border-black rounded-md px-3 w-48"
            value={value}
            onChange={onChange}
            type={type ? type : "text"}
          />
          <button
            onClick={onClick}
            className="border-2 capitalize text-lg font-semibold border-black w-20 mt-3"
          >
            {btnAction}
          </button>
        </div>
      </div>
    </div>
  );
};
