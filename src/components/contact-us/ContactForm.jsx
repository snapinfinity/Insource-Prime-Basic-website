import React, { useState } from "react";
import bg1 from "../../assets/bg1.png";
import person from "../../assets/map.png";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { enqueueSnackbar } from "notistack";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../shared/animation/Motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

 
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
 
    if (errors[name]) {
      const newErrors = {...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
   
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    
  
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; 
    }
    
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        isRead: false,
      });
      enqueueSnackbar("Message sent successfully!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar("Failed to send message. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
      className="py-20 bg-black lg:py-40"
      id="contact-form"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container grid grid-cols-1 gap-8 px-10 mx-auto lg:grid-cols-2" >
        <motion.div variants={fadeIn("left", "tween", 0.2, 0.8)}>
          <div className="relative box-gradient transition-all duration-300 ease-in-out rounded-b-[30px] shadow-lg">
            <div className="flex justify-center">
              <img src={person} alt="Map" className="z-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 pt-3 space-y-6 text-white sm:grid-cols-2 sm:pt-0">
            <ContactInfo
              icon={Phone}
              title="Phone Number"
              content="+971 50 859 0446"
            />
            <ContactInfo
              icon={MapPin}
              title="Main Office"
              content="Business Bay-Dubai - United Arab Emirates"
            />
            <ContactInfo icon={Mail} title="Email" content="md@insourceprime.com" />
            <ContactInfo
              icon={Clock}
              title="Work Hour"
              content="Mon - Sat : 09.00AM - 18:00PM"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeIn("right", "tween", 0.4, 0.8)}>
          <div className="p-6">
            <h2 className="mb-3 md:text-[42px] text-[30px] font-bold text-white">
              Get In Touch
            </h2>
            <p className="mb-6 text-lg text-white">
              We'd love to hear from you. Fill out the form below, and we'll get
              back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <InputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <div className="mt-1 text-sm text-red-500">{errors.name}</div>
                )}
              </div>
              
              <div>
                <InputField
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <div className="mt-1 text-sm text-red-500">{errors.email}</div>
                )}
              </div>
              
              <div>
                <InputField
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                />
                {errors.subject && (
                  <div className="mt-1 text-sm text-red-500">{errors.subject}</div>
                )}
              </div>
              
              <div>
                <TextareaField
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                />
                {errors.message && (
                  <div className="mt-1 text-sm text-red-500">{errors.message}</div>
                )}
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
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center">
    <div className="flex items-center justify-center">
      <Icon size={20} className="mr-4 md:bg-[#0E4DAA] p-1 rounded-full w-8 h-8" />
    </div>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const InputField = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 text-black bg-white rounded-lg"
  />
);

const TextareaField = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 text-black bg-white rounded-lg"
    rows="6"
  ></textarea>
);

export default ContactForm;