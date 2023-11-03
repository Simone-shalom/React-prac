// Dependencies
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// Styles
import "./tailwind.output.css";

const Timer = ({ deleteTimer, id }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [alertMess, setAlerMess] = useState("");

  const onStart = () => {
    setIsRunning(true);
  };

  const onReset = () => {
    setHours("");
    setMinutes("");
    setSeconds("");
    setIsRunning(false);
  };

  const onPause = () => {
    setIsRunning(false);
  };

  const onAlert = useCallback(() => {
    window.alert(alertMess);
  }, [alertMess]);

  useEffect(() => {
    let countdown;
    if (isRunning) {
      countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => (prev - 1 >= 0 ? prev - 1 : 59));
        } else {
          if (minutes > 0) {
            setMinutes((prev) => (prev - 1 >= 0 ? prev - 1 : 59));
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours((prev) => prev - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(countdown);
              setIsRunning(false);
              onAlert();
            }
          }
        }
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [isRunning, hours, minutes, seconds, onAlert]);

  return (
    <div className=" ">
      <div className="flex pt-12 items-center justify-center">
        {/* InputComp */}
        <InputComp placeholder="HH" onChange={setHours} value={hours} /> :
        <InputComp placeholder="MM" onChange={setMinutes} value={minutes} /> :
        <InputComp placeholder="SS" onChange={setSeconds} value={seconds} />
        {/* Start btn */}
        {isRunning ? (
          <>
            <Btn title="Pause" funct={onPause} />
            <Btn title="Reset" funct={onReset} />
            <button
              onClick={() => deleteTimer(id)}
              className="border-2 border-black p-2 mx-2"
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <Btn title="Start" funct={onStart} />
          </>
        )}
      </div>
      {isRunning ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center pt-2 space-x-2">
          <p className="text-lg font-semibold pb-3">
            Add Notification on countDown
          </p>
          <input
            type="text"
            className="border-2 border-black px-3 py-2 rounded-lg text-lg text-center"
            placeholder="Alert message"
            value={alertMess}
            onChange={(e) => setAlerMess(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

const InputComp = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex px-3">
      <input
        className="border-2 w-16 text-center rounded-lg border-black text-xl px-3 py-2"
        placeholder={placeholder}
        value={value}
        type="number"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const Btn = ({ title, funct }) => {
  return (
    <button
      onClick={funct}
      className="border-2 rounded-lg border-black font-bold text-xl px-6 py-4 bg-gray-200"
    >
      {title}
    </button>
  );
};

const App = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    const newTimer = timers.length + 1;
    setTimers([...timers, newTimer]);
  };

  const deleteTimer = (id) => {
    const updatedTimers = timers.filter((timer) => timer !== id);
    setTimers(updatedTimers);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl font-bold ">CountDown Timer</h2>
      <div className="px-5 flex items-center justify-center pt-5">
        <button
          onClick={addTimer}
          className="px-5 border-2 flex items-center justify-center border-black rounded-lg font-bold"
        >
          Add Timer <FaPlus />
        </button>
      </div>
      {timers.map((timer) => (
        <Timer key={timer} id={timer} deleteTimer={deleteTimer} />
      ))}
    </div>
  );
};

export default App;
