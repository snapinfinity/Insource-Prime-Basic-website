import React from 'react';
import bg1 from "../../../assets/slider-1.jpg";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/animation/Motion';


const WhyChooseUsSection = ({ data }) => {
  const { title, features } = data;

  return (
    <motion.div
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      animate="show"
      className="px-6 py-16 bg-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container p-10 mx-auto">
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
              className="p-6 transition rounded-lg bg-gray-50 hover:shadow-lg"
            >
              <feature.icon className="w-10 h-10 mb-4 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsSection;