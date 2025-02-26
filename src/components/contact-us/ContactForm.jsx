import React, { useState } from 'react';
import bg1 from "../../assets/bg1.png";
import person from "../../assets/photo.png";
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
    const [formData, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="py-20 bg-black lg:py-40" style={{
            backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>

            <div className='container grid lg:grid-cols-2 grid-cols-1` mx-auto gap-8 px-10' >
                <div className="flex flex-col gap-3 md:gap-6">
                    <div className="relative box-gradient transition-all duration-300 ease-in-out rounded-b-[30px] shadow-lg">
                        <div className="flex justify-center">
                            <img src={person} alt="" className="z-10  w-[250px] h-[250px] sm:h-[330px]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 space-y-6 text-white">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-800 rounded-full">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Phone Number</h3>
                                <p>+971 50 859 0446</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-800 rounded-full">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Main Office</h3>
                                <p>123th, RoundStreet, Pekanbaru.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-800 rounded-full">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p>md@insourceprime.com</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-800 rounded-full">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Work Hour</h3>
                                <p>Mon - Sat : 09.00AM - 18:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="mb-3 md:text-[42px] text-[30px] font-bold text-white">Get In Touch</h2>
                    <p className="mb-6 text-lg text-white">We’d love to hear from you. Fill out the form below, and we’ll get back to you as soon as possible.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 text-black bg-white rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-3 text-black bg-white rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Your Subject"
                                className="w-full p-3 text-black bg-white rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full p-3 text-black bg-white rounded-lg"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="px-8 py-3 text-white transition-colors bg-black border-2 border-white rounded-full hover:bg-gray-900"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
