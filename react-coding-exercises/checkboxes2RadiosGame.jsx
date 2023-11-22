import React, { useState } from 'react';

const Game = () => {
  const options = ['cricket', 'football', 'basketball'];
  const days = ['monday', 'friday', 'sunday'];

  const [item, setItem] = useState('');
  const [day, setDay] = useState('');

  const onItem = (name) => {
   setItem(name)
  };

  const onDay = (name) => {
    setDay(name);
  };

  console.log(item, day);

  return (
    <div className='flex flex-col items-center justify-center space-y-2 pt-10'>
      <h2>Play a Game</h2>
      <div className='flex flex-col space-x-3'>
        <p className='pt-10 text-center text-lg font-bold'>Select Game</p>
        <Button array={options} value={item} onChange={onItem} />
        <p className='pt-10 text-center text-lg font-bold'>Select Days</p>
        <Button array={days} value={day} onChange={onDay} />
      </div>
      <div>{item && day ? <div>Play</div> : <div>No</div>}</div>
    </div>
  );
};

export default Game;

export const Button = ({ array, value, onChange }) => {
  return (
    <div className='flex space-x-2 '>
      {array.map((item) => (
        <div key={item}>
          <input
            type='radio'
            value={item}  // Use the individual item value here
            checked={value === item}
            onChange={() => onChange(item)}
          />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

