// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen px-10 flex items-center flex-col">
      <h1 className="text-2xl font-semibold pb-20">
        Composition over Inheritance
      </h1>

      <h1 className='text-lg font-bold pb-5'>
        Cards available:
        </h1>
      <div className="flex flex-col space-y-5">
        <Card title="First card" desc="first card desc" />
        <Card title="Second card" />
      </div>
    </div>
  );
};

export default App;

interface CardProps{
  title: string
  desc?: string
}

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className="text-xl rounded-lg border  border-black px-3">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};
