import React from 'react'
import bg1 from "../../assets/woman.jpg";
const ContactHero = () => {
  return (
    <div
         className="relative w-full h-[50vh] bg-cover bg-center flex items-center"
         style={{
           backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)), url(${bg1})`,
         }}
       >
         <div className="container px-4 mx-auto text-center">
           <h1 className="xl:text-[70px]  text-[40px] font-bold  text-white">
           Contact Us
           </h1>
           <p className="mt-2 text-sm text-white">
             {/* <span className="text-gray-300">HOME</span> <span className="text-orange-500"></span> ABOUT OUR BANKING */}
           </p>
         </div>
       </div>
  )
}

export default ContactHero