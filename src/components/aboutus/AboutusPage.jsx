import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BenefitItem = ({ text }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex items-start"
        >
            <div className="flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-blue-600" />
            </div>
            <p className="ml-3 text-gray-700">{text}</p>
        </motion.div>
    );
};

const TestimonialCard = ({ content, author }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="p-5 bg-white rounded-lg shadow-md"
        >
            <p className="mb-4 italic text-gray-700">"{content}"</p>
            <p className="text-[#061D41] font-semibold">{author}</p>
        </motion.div>
    );
};

const AboutUsPage = () => {
    return (
        <div className="py-20 bg-gradient-to-b from-blue-100 via-gray-50 to-blue-200">
            <div className="container px-10 mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-12 md:flex-row"
                >
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#061D41] mb-6">Why Insource 360?</h2>
                        <div className="space-y-4">
                            <BenefitItem text="Faster Bank Approvals – Direct partnerships with top UAE banks for quicker processing." />
                            <BenefitItem text="100% Compliance Support – Expert guidance to meet banking and legal requirements." />
                            <BenefitItem text="Tailored Banking Solutions – Customized services to match your financial and business needs." />
                            <BenefitItem text="20+ Years of Experience – Proven expertise in UAE's financial and regulatory landscape." />
                            <BenefitItem text="Trusted by Global Clients – Supporting entrepreneurs, investors, and companies worldwide." />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:w-1/2 sm:grid-cols-2">
                        <TestimonialCard content="Insource 360 made opening our corporate account incredibly smooth. Their expertise saved us weeks of paperwork." author="Sarah L., Tech Startup CEO" />
                        <TestimonialCard content="As an international investor, I needed reliable offshore banking solutions. Their team delivered exactly what I needed." author="Michael R., Global Investor" />
                        <TestimonialCard content="The compliance support was invaluable. They handled everything professionally and efficiently." author="Ahmed K., Business Owner" />
                        <TestimonialCard content="I've worked with many consultants, but Insource 360's banking expertise is unmatched in the UAE market." author="Jessica T., Financial Director" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUsPage;
