import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsSection = ({ data }) => {
  const { title, benefits } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 text-white bg-gradient-to-br from-indigo-800 to-indigo-950"
    >
      <div className="container px-6 mx-auto md:px-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="mb-4 text-[40px] font-bold"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="text-lg text-indigo-300"
          >
            Elevate your business with our tailored advantages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
          {benefits.map((benefit, index) => (
            <motion.div
              variants={benefitVariants}
              key={index}
              className="flex items-start p-6 transition-shadow duration-300 transform bg-indigo-800 shadow-lg bg-opacity-60 rounded-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;