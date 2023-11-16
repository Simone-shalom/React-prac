// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {

  const [ search, setSearch] = useState('')

  const products = ['book', '2books', '3books', '4books', '5books', '6books']
 
  const debounceSearch  = useDebounce(search, 500)

  const filteredProducts = products.filter((prd) => prd.toLowerCase()
  .includes(debounceSearch))

  return (
    <div className="mx-auto flex flex-col items-center h-screen">
      <h2 className=" font-bold text-blue-900 text-3xl">debounce func</h2>
      <input 
        className='border border-black px-3 focus:outline-none'
        value={search} onChange={(e) => setSearch(e.target.value)}/>
        {filteredProducts?.map((prd) => (
          <div key={prd}>
            {prd}
            </div>
        ))}
    </div>
  );
};

export default App;


export const useDebounce = (value, time) => {

  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(value)
    },time || 500)

    return () => {
      clearTimeout(timer)
    }

  },[value, time])

  return debouncedSearch
}