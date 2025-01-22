import React from 'react';
import squidGif from '../assets/squid.gif';
import profile from '../assets/profile.jpeg';
const Home = () => {
  
  const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/rishi.sulakhe', '_blank');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${squidGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-gray-800 bg-opacity-80 border border-gray-700 rounded-lg p-6 max-w-sm text-center shadow-lg transform hover:scale-105 transition duration-300">
        <div className="relative w-32 h-32 mx-auto mb-4 border-4 border-gray-700 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-semibold text-white mb-2">Rishi Sulakhe</h1>
        <p className="text-gray-400 text-sm mb-4">Reg. No: 20230087</p>
        <div className="space-y-3">
          <button
            onClick={handleInstagramRedirect}
            className="w-full px-6 py-2 bg-red-600 text-white hover:bg-red-700 font-medium rounded-md transition duration-200"
          >
            Follow on Instagram
          </button>
         
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-gray-300"></div>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-300 rotate-45"></div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Home;
