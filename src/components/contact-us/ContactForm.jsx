import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../assets/bg1.png";
import person from "../../assets/map.png";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { enqueueSnackbar } from "notistack";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../shared/animation/Motion";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      const newErrors = { ...errors };
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
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
  
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        isRead: false,
        createdAt: serverTimestamp(),
      });
      enqueueSnackbar("Message sent successfully!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2000,
      });
 
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      setErrors({});

      emailjs.sendForm(
        'service_e2o1m0k',
        'template_y7i86oz',
        form.current,
        '_TW_0quAh3kZuz1yR',
        {
          to_email: 'Connect@insourceprime.com'
        
        }
      ).then(result => {
        console.log('Email sent successfully:', result.text);
      }).catch(emailError => {
        console.error("Error sending email:", emailError);
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar("Failed to send message. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2000,
      });
    } finally {
      setLoading(false);
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
      <div className="container grid grid-cols-1 gap-8 px-10 mx-auto lg:grid-cols-2">
        <motion.div className="order-2 lg:order-1" variants={fadeIn("left", "tween", 0.2, 0.8)}>
          <div className="relative box-gradient transition-all duration-300 ease-in-out rounded-b-[30px] shadow-lg">
            <div className="flex justify-center">
              <img src={person} alt="Map" className="z-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 pt-3 space-y-6 text-white sm:grid-cols-2 sm:pt-0">
            <ContactInfo icon={Phone} title="Phone Number" content="+971 50 859 0446" />
            <ContactInfo icon={MapPin} title="Main Office" content="Business Bay-Dubai - United Arab Emirates" />
            <ContactInfo icon={Mail} title="Email" content="md@insourceprime.com" />
            <ContactInfo icon={Clock} title="Work Hour" content="Mon - Sat : 09.00AM - 18:00PM" />
          </div>
        </motion.div>

        <motion.div className="order-1 lg:order-2" variants={fadeIn("right", "tween", 0.4, 0.8)}>
          <div className="p-6">
            <h2 className="mb-3 md:text-[42px] text-[30px] font-bold text-white">Get In Touch</h2>
            <p className="mb-6 text-lg text-white">We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.</p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <InputField type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
              {errors.name && <div className="mt-1 text-sm text-red-500">{errors.name}</div>}

              <InputField type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
              {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}

              <InputField type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your Mobile" />
              {errors.mobile && <div className="mt-1 text-sm text-red-500">{errors.mobile}</div>}

              <select name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 text-black bg-white rounded-lg">
                <option value="">Select Subject</option>
                <option value="Corporate Bank Account Opening">Corporate Bank Account Opening</option>
                <option value="Offshore Bank Account Opening">Offshore Bank Account Opening</option>
                <option value="Private Banking">Private Banking</option>
                <option value="Personal Banking">Personal Banking</option>
                <option value="Compliance Advisory">Compliance Advisory</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && <div className="mt-1 text-sm text-red-500">{errors.subject}</div>}

              <TextareaField name="message" value={formData.message} onChange={handleChange} placeholder="Your Message (Optional)" />

              <button
                type="submit"
                className="px-8 py-3 text-white transition-colors bg-black border-2 border-white rounded-full hover:bg-gray-900 disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
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