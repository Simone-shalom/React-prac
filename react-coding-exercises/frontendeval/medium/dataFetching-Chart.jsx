// Dependencies
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Chart from 'chart.js/auto';

// Styles
import "./tailwind.output.css";

const App = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    try {
      const response = await axios.get('https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new')
      //
      const numbers  = response.data.split('\n').map(Number)
      
      const NumberOfNumbers = numbers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1

        return acc
      },{})

      setData(NumberOfNumbers)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() =>{
    getData()
  },[])

//use object methods to get labels and values 
  const labels = Object.keys(data)
  const values = Object.values(data)


  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Frequency of Numbers',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold">Data fetching histogram</h2>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default App;
