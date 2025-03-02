import React from 'react';
import { ArrowRight } from 'lucide-react';
import bg1 from "../../../assets/breadcrumb.jpg";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/animation/Motion';

const HeroSection = ({ data }) => {
 

  const { title, subtitle, buttonText, features } = data;

  // Function to scroll down to the contact form
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.3, 0.4)}
      initial="hidden"
      animate="show"
      className="py-20 text-white bg-gradient-to-r from-blue-900 to-blue-700"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)), url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container px-10 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
            <p className="mb-8 text-xl font-light md:text-2xl">{subtitle}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 font-semibold text-blue-800 transition bg-white rounded-lg hover:bg-blue-50"
              onClick={handleScrollToContact}  // Call scroll function
            >
              {buttonText} <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
          <motion.div variants={fadeIn("right", "tween", 0.5, 1)} className="hidden md:block">
            <div className="p-8 bg-white border border-white bg-opacity-10 rounded-xl backdrop-blur-sm border-opacity-20">
              {features?.map((feature, index) => (
                <motion.div
                  variants={fadeIn("up", "tween", 0.8 + index * 0.2, 0.8)}
                  key={index}
                  className={`flex items-center ${index !== features.length - 1 ? 'mb-6' : ''}`}
                >
                  <feature.icon className="w-8 h-8 mr-4 text-blue-300" />
                  <div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
