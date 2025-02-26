import React from "react";
import { Check } from "lucide-react";
import bg1 from "../../assets/slider-1.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { benefitVariants, containerVariants, serviceCardVariants } from "../../shared/animation/Motion";

const ServiceDetails = ({ services = [] }) => {
    const navigate = useNavigate();

    return (
        <div className="py-16 bg-gray-900"
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <motion.div 
                className="container px-10 mx-auto mb-10 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-[28px] md:text-[30px] font-bold text-white">
                    Delivering Excellence & Reliability in Every Service
                </h2>
                <p className="max-w-2xl mx-auto mt-2 text-gray-300">
                    We strive to provide seamless and trustworthy services, ensuring the best experience for you.
                </p>
            </motion.div>
            
            <motion.div 
                className="container grid grid-cols-1 gap-6 px-10 mx-auto lg:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {services.length > 0 ? (
                    services.map((service, index) => (
                        <motion.div 
                            key={service.id || index} 
                            className="mb-8 md:p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.1)]"
                            variants={serviceCardVariants}
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                        >
                            <motion.div 
                                className="p-4 mb-4 text-white rounded-t-2xl service-gradient"
                                whileHover={{ 
                                    backgroundColor: "rgba(255, 255, 255, 0.15)" 
                                }}
                            >
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                            </motion.div>
                            <motion.p 
                                className="mb-4 text-gray-300 text-[20px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 * (index + 1) }}
                            >
                                {service.description}
                            </motion.p>
                            {service.benefits?.length > 0 && (
                                <motion.ul className="mb-4 space-y-2">
                                    {service.benefits.map((benefit, benefitIndex) => (
                                        <motion.li 
                                            key={benefitIndex} 
                                            className="flex items-center text-gray-300"
                                            variants={benefitVariants}
                                            transition={{ delay: 0.1 * benefitIndex }}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Check className="w-5 h-5 mr-2 text-black bg-white rounded-full" />
                                            </motion.div> {benefit}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                            {service.callToAction && (
                                <motion.p 
                                    className="mb-4 text-gray-400 cursor-pointer hover:text-white"
                                    onClick={() => navigate('/contact-us')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {service.callToAction}
                                </motion.p>
                            )}
                        </motion.div>
                    ))
                ) : (
                    <motion.p 
                        className="col-span-2 text-center text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        No services available
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default ServiceDetails;