// Dependencies
import React, { useEffect, useState } from "react";
import axios from 'axios'
import ReactPaginate from 'react-paginate';

// Styles
import "./tailwind.output.css";

const App = () => {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const productsPerPage=10

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);


  const getData = async() => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold ">
        Products
      </h2>
      {currentProducts.map((prd) => (
        <Product prd={prd} key={prd.id}/>
      ))}

      <div className='flex'>
      <ReactPaginate
        className='flex space-x-3 pt-5 pb-10'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(data.length/productsPerPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName='bg-blue-500'
      />
        </div>
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