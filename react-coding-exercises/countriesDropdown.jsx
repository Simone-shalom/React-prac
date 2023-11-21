import React, { useState } from 'react';
import './tailwind.output.css';

const countries = [
  {
    name: 'India',
    value: 'In',
    cities: ['Delhi', 'Mumbai'],
  },
  {
    name: 'Pakistan',
    value: 'Pk',
    cities: ['Lahore', 'Karachi'],
  },
  {
    name: 'Bangladesh',
    value: 'Bg',
    cities: ['Dhaka', 'Chittagong'],
  },
];

const App = () => {
  const [country, setCountry] = useState({ name: 'India', cities: ['Delhi', 'Mumbai'] });

  const onChangeCountryName = (e) => {
    const selectedCountry = countries.find((c) => c.name === e.target.value);
    setCountry(selectedCountry || { name: '', cities: [] });
  };

  const onChangeCountryCity = (e) => {
    setCountry({ ...country, cities: [e.target.value] });
  };

  return (
    <div className="min-h-screen items-center flex flex-col">
      <h2 className="pb-10 text-center text-4xl font-bold">Dropdown countries</h2>
      <div className="flex space-x-2 ">
        <Dropdown value={country.name} onChange={onChangeCountryName} name={'name'} options={countries.map((c) => c.name)} />
        <Dropdown value={country.cities[0]} onChange={onChangeCountryCity} name={'cities'} options={country.cities} />
      </div>
    </div>
  );
};

export default App;

export const Dropdown = ({ value, onChange, name, options }) => {
  return (
    <div>
      <select value={value} onChange={onChange} className="border border-black">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
