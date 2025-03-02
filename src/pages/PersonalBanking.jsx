import React from 'react'
import HeroSection from '../components/ServiceDetail/component/HeroSection';
import IntroSection from '../components/ServiceDetail/component/IntroSection';
import WhyChooseUsSection from '../components/ServiceDetail/component/WhyChooseUsSection';
import ProcessSection from '../components/ServiceDetail/component/ProcessSection';
import BenefitsSection from '../components/ServiceDetail/component/BenifitsSection';
import ContactForm from '../components/contact-us/ContactForm';
import { ChevronsUp, Globe, Key, Shield, ShieldCheck, Users, Wallet } from 'lucide-react';

const PersonalBanking = () => {
    const heroData = {
        title: "Hassle-Free Personal Bank Account Opening",
        subtitle: "For All Nationalities – Fast Processing & Full Compliance",
        buttonText: "Contact Us Now!",
        features: [
          {
            icon: Wallet,
            title: "Personal Banking",
            description: "Solutions for individuals of all nationalities",
          },
          {
            icon: Key,
            title: "Easy Access",
            description: "Simplified account opening process",
          },
          {
            icon: ShieldCheck,
            title: "Full Compliance",
            description: "Navigate UAE regulations with expert support",
          },
        ],
      };
    
      const introData = {
        title: "Personal Banking Solutions",
        description:
          "Open a personal bank account in the UAE with ease. Insource 360 Banking Solutions simplifies the process for expatriates, non-residents, and UAE residents with fast processing and minimal documentation.",
      };
    
      const whyChooseUsData = {
        title: "Why Choose Us for Personal Banking?",
        features: [
          {
            icon: Globe,
            title: "Account Opening for All Nationalities",
            description: "No matter your nationality, we ensure hassle-free account opening.",
          },
          {
            icon: Users,
            title: "Expert Guidance on Best Banking Options",
            description: "We help you choose the right bank and account type based on your needs.",
          },
          {
            icon: ChevronsUp,
            title: "Fast Processing & Minimal Documentation",
            description: "Efficient approvals with straightforward documentation.",
          },
          {
            icon: Shield,
            title: "Compliance & Security",
            description: "Full compliance with UAE regulations and secure banking solutions.",
          },
        ],
      };
    
      const processData = {
        title: "Our Process",
        steps: [
          {
            title: "Consultation & Requirement Analysis",
            description: "Understand your banking needs and recommend suitable options.",
          },
          {
            title: "Bank Selection & Documentation Assistance",
            description: "Help you choose the best bank and manage documentation.",
          },
          {
            title: "Application Submission & Coordination",
            description: "Full support during the application process.",
          },
          {
            title: "Compliance Checks & Approval Coordination",
            description: "Ensure compliance for quick approvals.",
          },
          {
            title: "Account Activation & Ongoing Support",
            description: "Continued support even after account activation.",
          },
        ],
      };
    
      const benefitsData = {
        title: "Key Benefits",
        benefits: [
          "Fast account opening for all nationalities.",
          "Expert guidance on choosing the right banking options.",
          "Simplified documentation process.",
          "Ongoing support for banking operations.",
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

export default PersonalBanking
