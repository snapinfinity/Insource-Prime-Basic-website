import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';
import img from "../../assets/Credit_Card_Mockup_1161.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const StatCard = ({ icon, title, description, delay }) => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay }}
            className="p-4 bg-white rounded-lg shadow-md"
        >
            <div className="flex items-center mb-2">
                {icon}
                <h3 className="ml-2 text-lg font-bold">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const PageContent = () => {
    return (
        <div className="container px-10 py-16 mx-auto">
            <div className="flex flex-col items-center gap-12 md:flex-row">
                {/* Image Section */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <img src={img} alt="Credit Card Mockup" className="" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 md:w-1/2 md:mt-0"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#061D41] mb-6">Who We Are</h2>
                    <p className="mb-4 text-gray-700">
                        We are a <span className="font-semibold">leading banking consultancy</span> with deep expertise in UAE banking regulations, international compliance, and financial structuring.
                    </p>
                    <p className="mb-4 text-gray-700">
                        Our <span className="font-semibold">strong relationships with major UAE banks</span> allow us to streamline approvals, reduce delays, and provide tailored solutions for clients worldwide.
                    </p>
                    <p className="mb-4 text-gray-700">
                        We specialize in handling complex banking cases, ensuring that businesses and individuals can access <span className="font-semibold">reliable financial solutions</span> with minimal effort.
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <StatCard
                            icon={<Shield className="w-8 h-8 text-blue-600" />}
                            title="Trusted"
                            description="By global clients"
                            delay={0.2}
                        />
                        <StatCard
                            icon={<Clock className="w-8 h-8 text-blue-600" />}
                            title="Fast"
                            description="Account approvals"
                            delay={0.4}
                        />
                        <StatCard
                            icon={<Users className="w-8 h-8 text-blue-600" />}
                            title="Expert"
                            description="Advisory team"
                            delay={0.6}
                        />
                        <StatCard
                            icon={<Award className="w-8 h-8 text-blue-600" />}
                            title="100%"
                            description="Compliance support"
                            delay={0.8}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PageContent;
