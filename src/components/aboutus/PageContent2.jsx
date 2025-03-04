import React, { useRef, useEffect } from 'react';
import { ChevronRight, Briefcase, Globe, Award, Users } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/slider-1.jpg"; 

const ServiceCard = ({ icon, title, description, link }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [isInView, animation]);

  const handleNavigate = () => {
    // Navigate to the specific service page
    navigate(link);
    
    // Scroll to hero section after navigation
    setTimeout(() => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback to top of the page if hero section is not found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={animation}
      className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg bg-opacity-90 backdrop-filter backdrop-blur-md"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#061D41] mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4">
        <button 
          onClick={handleNavigate} 
          className="flex items-center font-medium text-blue-600 hover:underline"
        >
          Learn more <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const PageContent2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animation}
      className="relative px-4 py-16 md:px-8"
      style={{
        backgroundColor: "#10153D",
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#10153D] via-transparent to-[#10153D] opacity-70"></div>
      <div className="relative z-10 max-w-6xl mx-auto"> 
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            className="inline-block px-6 py-2 mb-4 bg-opacity-90"
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              What We Do
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }}
            className="max-w-2xl p-4 mx-auto text-xl font-medium text-white rounded-lg "
          >
            At Insource 360, we offer <span className="font-bold text-blue-300">end-to-end banking solutions</span> tailored to your specific needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard
            icon={<Briefcase className="w-12 h-12 text-blue-600" />} 
            title="Corporate Bank Account Opening"
            description="Freezone & Mainland business banking with expert compliance guidance."
            link="/services/corporate-banking"
          />
          <ServiceCard
            icon={<Globe className="w-12 h-12 text-blue-600" />}
            title="Offshore Banking Solutions"
            description="Secure international banking for asset protection and business expansion."
            link="/services/offshore-banking"
          />
          <ServiceCard
            icon={<Award className="w-12 h-12 text-blue-600" />}
            title="Private Banking & Wealth Management"
            description="Exclusive banking services for high-net-worth individuals."
            link="/services/private-banking"
          />
          <ServiceCard
            icon={<Users className="w-12 h-12 text-blue-600" />}
            title="Personal Bank Accounts"
            description="Fast-track account opening with minimal documentation."
            link="/services/personal-banking"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageContent2;