import React from 'react'
import HeroSection from '../components/ServiceDetail/component/HeroSection';
import IntroSection from '../components/ServiceDetail/component/IntroSection';
import WhyChooseUsSection from '../components/ServiceDetail/component/WhyChooseUsSection';
import ProcessSection from '../components/ServiceDetail/component/ProcessSection';
import BenefitsSection from '../components/ServiceDetail/component/BenifitsSection';
import ContactForm from '../components/contact-us/ContactForm';
import { Briefcase, Building, ChevronsUp, CreditCard, Globe, Lock, Users } from 'lucide-react';

const PrivateBanking = () => {
    const heroData = {
        title: "Exclusive Private Banking Solutions",
        subtitle: "Personalized Wealth Management for High-Net-Worth Individuals",
        buttonText: "Get Started Today!",
        features: [
          {
            icon: Briefcase,
            title: "Wealth Management",
            description: "Tailored financial strategies",
          },
          {
            icon: Users,
            title: "Dedicated Advisors",
            description: "Personalized financial guidance",
          },
          {
            icon: Lock,
            title: "Discreet Banking",
            description: "High-level privacy and security",
          },
        ],
      };
    
      const introData = {
        title: "Private Banking Solutions",
        description:
          "Experience bespoke financial solutions tailored to high-net-worth individuals. At Insource 360 Banking Solutions, we offer exclusive private banking services, including personalized financial planning, wealth advisory, and asset management.",
      };
    
      const whyChooseUsData = {
        title: "Why Choose Private Banking with Us?",
        features: [
          {
            icon: Building,
            title: "Exclusive Onboarding in DIFC & Local Banks",
            description: "Gain access to premium banking services with ease.",
          },
          {
            icon: Users,
            title: "Dedicated Wealth Advisors",
            description: "Personalized financial planning with dedicated wealth managers.",
          },
          {
            icon: ChevronsUp,
            title: "Comprehensive Financial Solutions",
            description: "From investments to legacy planning, we offer complete wealth management.",
          },
          {
            icon: Lock,
            title: "Discreet & Secure Banking",
            description: "High-level financial privacy and security for your assets.",
          },
          {
            icon: Globe,
            title: "Global Investment Opportunities",
            description: "Access international markets and diverse investment portfolios with expert guidance.",
          },
          {
            icon: CreditCard,
            title: "Tailored Credit & Lending Solutions",
            description: "Exclusive loan and credit facilities designed for high-net-worth individuals.",
          },
        ],
      };
      
    
      const servicesData = {
        title: "Our Private Banking Services",
        steps: [
          {
            title: "Personalized Financial Solutions",
            description: "Tailored financial strategies for high-net-worth individuals.",
          },
          {
            title: "Wealth Management & Advisory",
            description: "Strategic asset management and investment advisory.",
          },
          {
            title: "Exclusive Banking Privileges",
            description: "Access to premium banking products and services.",
          },
          {
            title: "High-Net-Worth Financial Planning",
            description: "Comprehensive wealth planning, including inheritance and legacy solutions.",
          },
        ],
      };
    
      const processData = {
        title: "Our Process",
        steps: [
          {
            title: "Exclusive Consultation & Financial Analysis",
            description: "Understand your financial goals and risk tolerance.",
          },
          {
            title: "Tailored Wealth Management Strategy",
            description: "Personalized investment and wealth preservation strategies.",
          },
          {
            title: "Dedicated Wealth Advisor Allocation",
            description: "Ongoing financial advisory with dedicated relationship managers.",
          },
          {
            title: "Portfolio Management & Reporting",
            description: "Continuous monitoring and performance reporting.",
          },
          {
            title: "Exclusive Banking Privileges & Support",
            description: "Access to exclusive banking products and personalized concierge services.",
          },
        ],
      };
    
      const benefitsData = {
        title: "Key Benefits",
        benefits: [
          "Personalized wealth management strategies.",
          "Access to exclusive financial products.",
          "Dedicated relationship managers.",
          "Comprehensive legacy and succession planning.",
        ],
      };
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
    <HeroSection data={heroData} />
    <IntroSection data={introData} />
    <WhyChooseUsSection data={whyChooseUsData} />
    <ProcessSection data={processData} />
    <BenefitsSection data={benefitsData} />
    <ContactForm />
  </div>
  )
}

export default PrivateBanking