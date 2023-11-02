// Dependencies
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  };

  const onAccept = () => {
    setVisible(false);
    setSuccess(true);
  };

  return (
    <div
      className={`${
        visible ? "" : ""
      } min-h-screen flex items-center justify-center`}
    >
      <Button success={success} onVisible={onVisible} />
      <Modal onAccept={onAccept} onVisible={onVisible} visible={visible} />
     
       {visible && (
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onVisible}
      ></div>
      )}
      {success && <div className="text-lg font-semibold">Offer Accpeted!</div>}
    </div>
  );
};

export default App;

const Button = ({ onVisible, success }) => {
  return (
    <button
      onClick={onVisible}
      className={`${
        success ? "hidden" : "block"
      } text-center border-2 border-black px-3 py-2 rounded-md text-xl font-semibold capitalize`}
    >
      {success ? <p>Offer Accpeted</p> : <p>show offer</p>}
    </button>
  );
};

const Modal = ({ visible, onAccept, onVisible }) => {
  return (
    <>
      {visible && (
        <div className="flex bg-white w-full h-full md:w-auto md:h-auto items-center justify-center text-center fixed z-10 ">
          <div className="w-full h-full flex flex-col border-2 py-5 px-3 border-black bg-white">
            <span className="left-5 fixed cursor-pointer" onClick={onVisible}>
              <FaTimes />
            </span>

            <span className="pt-16 pb-12 flex items-center text-lg font-serif justify-center px-5">
              Click the button bellow to accept amazing offer
            </span>

            <button
              onClick={onAccept}
              className="border-2 border-black mx-32 py-1 px-2 rounded-md text-lg font-semibold capitalize"
            >
              amazing offer
            </button>
          </div>
        </div>
      )}
    </>
  );
};
