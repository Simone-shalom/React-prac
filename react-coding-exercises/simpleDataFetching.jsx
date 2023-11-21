// Dependencies
import React, { useEffect, useState } from "react";
import axios from 'axios'

// Styles
import "./tailwind.output.css";

const App = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  },[])

  console.log(data)


  return (
    <div className="min-h-screen ">
      <h2 className="text-center text-4xl font-bold ">
        Products
      </h2>
      {data.map((prd) => (
        <Product prd={prd} key={prd.id}/>
      ))}
    </div>
  );
};

export default App;


export const Product =({prd}) => {
  return (
    <div className='flex items-center justify-center'>
      {prd.title}
      </div>
  )
}