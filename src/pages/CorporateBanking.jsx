import { Building, ShieldCheck, Users, DollarSign, CreditCard, Globe } from "lucide-react";

import IntroSection from "../components/ServiceDetail/component/IntroSection";
import WhyChooseUsSection from "../components/ServiceDetail/component/WhyChooseUsSection";
import ProcessSection from "../components/ServiceDetail/component/ProcessSection";
import BenefitsSection from "../components/ServiceDetail/component/BenifitsSection";
import ContactForm from "../components/contact-us/ContactForm";
import HeroSection from "../components/ServiceDetail/component/HeroSection";

const heroData = {
  title: "Effortless Corporate Banking in UAE",
  subtitle: "Hassle-Free Setup for Freezone & Mainland Businesses",
  buttonText: "Get Started Today!",
  features: [
    {
      icon: Building,
      title: "Corporate Banking",
      description: "Tailored solutions for your business",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Expertise",
      description: "Navigate UAE regulations with ease",
    },
    {
      icon: DollarSign,
      title: "Trade Finance",
      description: "Credit lines for business growth",
    },
  ],
};

const introData = {
  title: "Corporate Banking Solutions",
  description:
    "Establishing a corporate bank account in the UAE is essential for conducting business smoothly. At Insource 360 Banking Solutions, we specialize in streamlining the process, ensuring full compliance with UAE regulations, and providing tailored banking solutions that suit your business needs.",
};

const whyChooseUsData = {
  title: "Why Choose Us for Corporate Bank Accounts?",
  features: [
    {
      icon: Building,
      title: "Comprehensive Solutions for Freezone & Mainland",
      description:
        "We offer tailored banking solutions for both Freezone and Mainland companies, ensuring smooth setup and compliance.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Due Diligence & Compliance Advisory",
      description:
        "Our experts navigate complex compliance requirements, ensuring a seamless onboarding experience.",
    },
    {
      icon: Users,
      title: "Expert Liaison with Major UAE Banks",
      description:
        "Leverage our strong relationships with leading banks for faster processing and approval.",
    },
    {
      icon: DollarSign,
      title: "Custom Solutions for Every Business Structure",
      description:
        "Whether LLC, branch office, or freezone entity, we tailor solutions to your business model.",
    },
    {
      icon: CreditCard,
      title: "Credit Line Approvals for Trading",
      description:
        "We facilitate trade finance solutions, including credit lines to support your trading operations and business growth.",
    },
    {
      icon: Globe,
      title: "International Banking Access",
      description:
        "Expand your financial reach with our support in opening offshore and international corporate bank accounts.",
    },
  ],
};


const processData = {
  title: "Our Process",
  steps: [
    {
      title: "Consultation & Requirement Analysis",
      description:
        "We assess your business needs and recommend the most suitable banking solutions.",
    },
    {
      title: "Document Preparation & Verification",
      description: "Full support in gathering and verifying required documentation.",
    },
    {
      title: "Bank Selection & Application Submission",
      description: "We help you choose the best bank and manage the entire application process.",
    },
    {
      title: "Compliance Checks & Approval Coordination",
      description: "We ensure full compliance with UAE regulations for faster approvals.",
    },
    {
      title: "Credit Line Application & Approval",
      description: "Assistance in securing trade credit lines for smooth business operations.",
    },
    {
      title: "Account Activation & Support",
      description: "Ongoing support even after account activation for a smooth banking experience.",
    },
  ],
};

const benefitsData = {
  title: "Key Benefits",
  benefits: [
    "Fast and efficient account opening.",
    "Full compliance with UAE banking regulations.",
    "Trade finance solutions for business growth.",
    "Ongoing support for financial management and transactions.",
  ],
};

const CorporateBanking = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection data={heroData} />
      <IntroSection data={introData} />
      <WhyChooseUsSection data={whyChooseUsData} />
      <ProcessSection data={processData} />
      <BenefitsSection data={benefitsData} />
      {/* <ContactSection /> */}
      <ContactForm/>
    </div>
  );
};

export default CorporateBanking;
