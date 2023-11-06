
// Dependencies
import React, {useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [missing, setMissing] = useState(false)

  const onSubmit = () => {
    if(!name || !email || !date || !password ){
      setMissing(true)
    }
    setMissing(false)
    console.log("form submited");
    console.log(name, email, date, password);
  };

  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  const onBack = () => {
    setStep((prev) => prev - 1);
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
          onClick={onNext}
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
      {missing && (
        <div className='text-red-600 font-bold text-xl'>
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
          <div className="fixed ">
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
