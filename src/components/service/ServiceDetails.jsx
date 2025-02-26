import React from "react";
import { Check } from "lucide-react";
import bg1 from "../../assets/slider-1.jpg";
import { useNavigate } from "react-router-dom";

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

            <div className="container px-10 mx-auto mb-10 text-center">
                <h2 className="text-[28px]  md:text-[30px] font-bold text-white">
                    Delivering Excellence & Reliability in Every Service
                </h2>
                <p className="max-w-2xl mx-auto mt-2 text-gray-300">
                    We strive to provide seamless and trustworthy services, ensuring the best experience for you.
                </p>
            </div>

            <div className="container grid grid-cols-1 px-10 mx-auto lg:grid-cols-2">
                {services.length > 0 ? (
                    services.map((service, index) => (
                        <div key={service.id || index} className="mb-8 transition-all duration-300 md:p-6 rounded-2xl">
                            <div className="p-4 mb-4 text-white rounded-t-2xl service-gradient">
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                            </div>
                            <p className="mb-4 text-gray-300 text-[20px]">{service.description}</p>
                            {service.benefits?.length > 0 && (
                                <ul className="mb-4 space-y-2">
                                    {service.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="flex items-center text-gray-300">
                                            <Check className="w-5 h-5 mr-2 text-black bg-white rounded-full" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {service.callToAction && <p className="mb-4 text-gray-400 cursor-pointer"  onClick={() => navigate('/contact-us')}>{service.callToAction}</p>}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400">No services available</p>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
