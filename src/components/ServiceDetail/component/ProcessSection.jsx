import React from 'react';
import img from "../../../assets/loan.jpg";
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { fadeIn, staggerContainer } from '../../../shared/animation/Motion'; 

const ProcessSection = ({ data }) => {
  const { title, steps } = data;

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="py-16  bg-gray-50"
    >
      <div className="container px-10 mx-auto">
        <motion.div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <motion.div variants={fadeIn("right", "tween", 0.2, 0.8)} className="relative group">
            <img
              src={img}
              alt=""
              className="rounded-[23px] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[23px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.4, 0.8)} className="space-y-6">
            <motion.p variants={fadeIn("up", "tween", 0.6, 0.8)} className="text-blue-600">
              Step-by-Step Guidance for Effortless Corporate Banking
            </motion.p>
            <motion.h2
              variants={fadeIn("up", "tween", 0.8, 0.8)}
              className="text-gray-800 text-4xl md:text-5xl lg:text-[50px] font-bold"
            >
              {title}
            </motion.h2>
            {steps.map((step, index) => (
              <motion.div variants={fadeIn("up", "tween", 1 + index * 0.2, 0.8)} key={index} className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-blue-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-800 md:text-xl">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;