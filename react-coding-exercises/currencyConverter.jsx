// Dependencies
import React, { useEffect, useState } from "react";
import axios from 'axios'

// Styles
import "./tailwind.output.css";

const App = () => {

  const [currency, setCurrency] = useState('usd')
  const [amount, setAmount] = useState(1)
  const [currency2, setCurrency2] = useState('eur')
  const [amount2, setAmount2] = useState(1)

  const onCurrencyChange=(e)=> {
    setCurrency(e.target.value)
  } 
  const onCurrencyChange2=(e)=> {
    setCurrency2(e.target.value)
  } 

  const onChangeAmount =(e) => {
    setAmount(e.target.value)
  }

  const onChangeAmount2 =(e) => {
    setAmount2(e.target.value)
  }


  
  return (
    <div className="min-h-screen  flex flex-col items-center ">
      <h2 className="text-center text-4xl font-bold ">
        Curerncy converter
      </h2>
      <div className='flex flex-col space-y-3'>
      <Currency curr={currency} amount={amount} 
        onChangeAmount={onChangeAmount}
        onCurrencyChange={onCurrencyChange}
        currencies={['USD','EUR']}/>
      <Currency curr={currency2} amount={amount2} 
        onChangeAmount={onChangeAmount2}
        onCurrencyChange={onCurrencyChange2}
        currencies={['USD','EUR']}/>
      </div>
     
    </div>
  );
};

export default App;


export const Currency =({curr, amount, onChangeAmount, onCurrencyChange, currencies}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex space-x-1'>
        <Input value={amount} onChange={onChangeAmount} type='number'/>
        <Select value={curr} onChange={onCurrencyChange} currencies={currencies}/>
      </div>

      </div>
  )
}

export const Input = ({value, onChange, type}) => {
  return (
    <input value={value} onChange={onChange} type={type}
      className='focus:outline-none border border-black px-5 text-lg font-bold'/>
  )
}
export const Select = ({value, onChange, currencies}) => {
  return (
   <select value={value}  onChange={onChange}
   className='focus:outline-none border border-black px-5 text-lg font-bold'>
    {currencies.map((curr) => (
      <option value={curr} key={curr}>{curr} </option>
    ))}
    </select>
  )
}
