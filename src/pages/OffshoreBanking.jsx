import React from 'react'
import HeroSection from '../components/ServiceDetail/component/HeroSection';
import IntroSection from '../components/ServiceDetail/component/IntroSection';
import WhyChooseUsSection from '../components/ServiceDetail/component/WhyChooseUsSection';
import ProcessSection from '../components/ServiceDetail/component/ProcessSection';
import BenefitsSection from '../components/ServiceDetail/component/BenifitsSection';
import ContactForm from '../components/contact-us/ContactForm';
import { CreditCard, DollarSign, Globe, Shield, ShieldCheck, Users, Lock  } from 'lucide-react';

const heroData = {
    title: "Secure Offshore Bank Account Opening",
    subtitle: "Tax-Efficient Banking Solutions for Global Businesses",
    buttonText: "Get Started Today!",
    features: [
      {
        icon: Globe,
        title: "Global Access",
        description: "Banking solutions for international businesses",
      },
      {
        icon: Lock,
        title: "Financial Privacy",
        description: "Enhanced security and confidentiality",
      },
      {
        icon: DollarSign,
        title: "Tax Efficiency",
        description: "Optimize your global tax position",
      },
    ],
  };

  const introData = {
    title: "Offshore Banking Solutions",
    description:
      "Access international banking solutions with ease. At Insource 360 Banking Solutions, we provide secure and tax-efficient offshore bank account services, tailored to the needs of international businesses and BVI companies.",
  };

  const whyChooseUsData = {
    title: "Why Choose Offshore Banking?",
    features: [
      {
        icon: Globe,
        title: "Global Access & Financial Privacy",
        description:
          "Offshore accounts provide enhanced privacy and access to global financial markets.",
      },
      {
        icon: Shield,
        title: "Tax Efficiency & Asset Protection",
        description:
          "Secure your wealth and optimize tax efficiency with structured offshore banking.",
      },
      {
        icon: CreditCard,
        title: "Multiple Currency Holdings",
        description:
          "Conduct transactions in multiple currencies with competitive exchange rates.",
      },
      {
        icon: DollarSign,
        title: "Simplified Cross-Border Transactions",
        description:
          "Seamlessly manage international trade and investment transactions.",
      },
    ],
  };

  // const servicesData = {
  //   title: "Our Offshore Banking Solutions",
  //   steps: [
  //     {
  //       title: "Offshore Accounts for BVI Companies & International Businesses",
  //       description: "Secure and flexible banking solutions for international operations.",
  //     },
  //     {
  //       title: "Company Structuring & Relocation Assistance",
  //       description: "Expert advisory on optimal company structuring for tax efficiency and global reach.",
  //     },
  //     {
  //       title: "Secure & Tax-Efficient Banking Options",
  //       description: "Maximize privacy and asset protection with tailored offshore banking solutions.",
  //     },
  //   ],
  // };

  const processData = {
    title: "Our Process",
    steps: [
      {
        title: "Consultation & Needs Assessment",
        description: "Understand your financial goals and international banking requirements.",
      },
      {
        title: "Company Structuring Advisory",
        description: "Guidance on the best offshore jurisdictions and company setups.",
      },
      {
        title: "Document Preparation & Submission",
        description: "Comprehensive assistance with documentation for account opening.",
      },
      {
        title: "Compliance Checks & Approval Coordination",
        description: "Ensuring compliance with international banking regulations.",
      },
      {
        title: "Account Activation & Management Support",
        description: "Ongoing support for account management and international transactions.",
      },
    ],
  };

  const benefitsData = {
    title: "Key Benefits",
    benefits: [
      "Access to global banking services.",
      "Enhanced financial privacy and security.",
      "Tax-efficient banking solutions.",
      "Multi-currency holdings and transactions.",
    ],
  };

const OffshoreBanking = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100">
        <HeroSection data={heroData} />
        <IntroSection data={introData} />
        <WhyChooseUsSection data={whyChooseUsData} />
        <ProcessSection data={processData} />
        <BenefitsSection data={benefitsData} />
        <ContactForm />
      </div>
    );
  };

export default OffshoreBanking