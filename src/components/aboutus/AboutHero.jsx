import React from 'react';
import bg1 from "../../assets/aboutbg.jpg";

const AboutHero = () => {
  return (
    <div
      className="relative w-full h-[50vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 29, 65, 0.7), rgba(6, 29, 65, 0.7)), url(${bg1})`,
      }}
    >
      <div className="container px-4 mx-auto">
        {/* Gradient Text */}
        <h1 className="text-[70px] font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
          About Our Banking
        </h1>
        <p className="mt-2 text-sm text-white">
          {/* <span className="text-gray-300">HOME</span> <span className="text-orange-500"></span> ABOUT OUR BANKING */}
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
