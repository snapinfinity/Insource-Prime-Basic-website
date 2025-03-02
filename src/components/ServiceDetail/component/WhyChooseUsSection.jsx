import React from 'react';
import bg1 from "../../../assets/slider-1.jpg";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/animation/Motion';

const WhyChooseUsSection = ({ data }) => {
  const { title, features } = data;

  // Define gradient styles for cards
  const cardGradients = [
    "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
    "bg-gradient-to-br from-indigo-50 to-purple-100 hover:from-indigo-100 hover:to-purple-200",
    "bg-gradient-to-br from-cyan-50 to-blue-100 hover:from-cyan-100 hover:to-blue-200",
    "bg-gradient-to-br from-sky-50 to-indigo-100 hover:from-sky-100 hover:to-indigo-200",
    "bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200",
    "bg-gradient-to-br from-indigo-50 to-blue-100 hover:from-indigo-100 hover:to-blue-200",
  ];

  return (
    <motion.div
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      animate="show"
      className="py-10 bg-white md:py-16"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-10 mx-auto">
        <motion.h2
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          className="mb-12 text-3xl md:text-[48px] font-bold text-center text-white"
        >
          {title}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.6 + index * 0.2, 0.8)}
              key={index}
              className={`p-6 transition duration-300 rounded-lg shadow-md ${cardGradients[index % cardGradients.length]} hover:shadow-xl transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="pb-3 text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="w-16 h-1 mt-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsSection;