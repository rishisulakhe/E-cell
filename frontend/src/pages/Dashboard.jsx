import React, { useState } from 'react';
import logo from '../assets/logo.png'; 

const Dashboard = () => {
  const [gridColors, setGridColors] = useState(Array(9).fill('bg-blue-500'));

  const handleSquareClick = (index) => {
    const newColors = [...gridColors];
    if (index === 8) {
      const resetColors = newColors.map(() => 'bg-blue-500');
      setGridColors(resetColors);
    } else {
      newColors[index] = 'bg-red-500'; 
      setGridColors(newColors);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 md:flex-wrap md:space-y-4 sm:space-y-4 items-center justify-center min-h-screen p-4">
      <div className="rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 h-32 w-32 lg:h-64 lg:w-64 md:w-full sm:w-full"></div>
      <div className="rounded-xl bg-white shadow-md h-32 w-32 lg:h-64 lg:w-64 flex items-center justify-center md:w-full sm:w-full">
        <img src={logo} alt="E-Cell Logo" className="h-24 w-24 lg:h-48 lg:w-48 object-contain" />
      </div>
      <div className="rounded-xl bg-gray-100 shadow-inner h-32 w-32 lg:h-64 lg:w-64 grid grid-cols-3 grid-rows-3 md:w-full sm:w-full">
        {gridColors.map((color, index) => (
          <div
            key={index}
            className={`w-full h-full ${color} border border-gray-300 cursor-pointer`}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
