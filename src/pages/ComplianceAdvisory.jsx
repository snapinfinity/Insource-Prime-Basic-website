import { ShieldCheck, Users, FileCheck, AlertTriangle, MessageSquare, Lock, CheckCircle } from "lucide-react";

import IntroSection from "../components/ServiceDetail/component/IntroSection";
import WhyChooseUsSection from "../components/ServiceDetail/component/WhyChooseUsSection";
import ProcessSection from "../components/ServiceDetail/component/ProcessSection";
import BenefitsSection from "../components/ServiceDetail/component/BenifitsSection";
import ContactForm from "../components/contact-us/ContactForm";
import HeroSection from "../components/ServiceDetail/component/HeroSection";
import ServiceData from "../components/ServiceDetail/component/ServiceData";

const heroData = {
  title: "Comprehensive Compliance Advisory for Seamless Banking Operations",
  subtitle: "Expert Guidance on KYC, AML, and Regulatory Compliance",
  buttonText: "Get Started Today!",
  features: [
    {
      icon: ShieldCheck,
      title: "Compliance Expertise",
      description: "Navigate UAE regulations with confidence",
    },
    {
      icon: FileCheck,
      title: "Due Diligence Support",
      description: "Comprehensive KYC/AML solutions",
    },
    {
      icon: AlertTriangle,
      title: "Risk Mitigation",
      description: "Proactive financial crime prevention",
    },
  ],
};

const introData = {
  title: "Compliance Advisory Services",
  description:
    "Navigating compliance regulations is crucial for maintaining a strong banking relationship. At Insource 360 Banking Solutions, we provide comprehensive Compliance Advisory services, ensuring businesses meet all regulatory and banking compliance requirements efficiently.",
};

const servicesData = {
  title: "Our Compliance Advisory Services Include:",
  features: [
    {
      icon: Users,
      title: "Account Onboarding & Client Screening",
      description:
        "End-to-end support for client onboarding in compliance with banking regulations. Screening of clients against global sanctions and adverse media databases. Ensuring due diligence requirements are met before account activation.",
    },
    {
      icon: FileCheck,
      title: "Customer Due Diligence (CDD) / Enhanced Due Diligence (EDD) / Know Your Customer (KYC)",
      description:
        "Developing and implementing CDD, KYC, and ECDD processes to mitigate financial crime risks. Risk-based assessment for identifying and monitoring high-risk clients. Ongoing due diligence and transaction monitoring for compliance adherence.",
    },
    {
      icon: ShieldCheck,
      title: "AML Policy & Counter Financing of Terrorism (CFT)",
      description:
        "Drafting and enforcing AML/CFT policies aligned with UAE regulatory frameworks. Ensuring compliance with the latest AML directives and international guidelines. Regular AML/CFT policy reviews to meet evolving regulatory requirements.",
    },
    {
      icon: AlertTriangle,
      title: "Client Screening & Adverse Media Checks",
      description:
        "Screening against international watchlists, PEP lists, and sanction lists. Continuous monitoring for adverse media reports and risk factors. Proactive identification of financial crime risks before onboarding.",
    },
    {
      icon: MessageSquare,
      title: "Correspondent Banking Queries Response",
      description:
        "Addressing compliance queries raised by correspondent banks. Preparing and submitting the required documentation for due diligence. Supporting businesses in maintaining a seamless banking relationship.",
    },
  ],
};

const whyChooseUsData = {
  title: "Why Choose Insource 360 for Compliance Advisory?",
  features: [
    {
      icon: Lock,
      title: "End-to-End Compliance Solutions",
      description:
        "From onboarding to AML policy enforcement, we provide comprehensive compliance support.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Expertise",
      description:
        "Strong understanding of UAE banking and compliance laws ensures your business stays compliant.",
    },
    {
      icon: AlertTriangle,
      title: "Enhanced Risk Mitigation",
      description:
        "Our tailored solutions for financial crime prevention protect your business reputation.",
    },
    {
      icon: MessageSquare,
      title: "Seamless Banking Relations",
      description:
        "We provide ongoing support for smooth banking interactions and approvals.",
    },
    {
      icon: Users,
      title: "Expert Advisory Team",
      description:
        "Our team of experienced professionals offers strategic guidance tailored to your business needs.",
    },
    {
      icon: CheckCircle,
      title: "Proactive Compliance Monitoring",
      description:
        "We continuously track regulatory updates to ensure your compliance framework remains up to date.",
    },
  ],
};
const processData = {
  title: "Our Compliance Process",
  steps: [
    {
      title: "Initial Compliance Assessment",
      description:
        "We evaluate your current compliance status and identify potential risk areas.",
    },
    {
      title: "Customized Compliance Strategy",
      description: "Development of a tailored compliance framework based on your business needs.",
    },
    {
      title: "Implementation & Documentation",
      description: "Setting up robust compliance processes and preparing necessary documentation.",
    },
    {
      title: "Staff Training & Awareness",
      description: "Training your team on compliance requirements and best practices.",
    },
    {
      title: "Continuous Monitoring & Updates",
      description: "Ongoing monitoring and updates to comply with changing regulations.",
    },
    {
      title: "Regulatory Reporting Support",
      description: "Assistance with required regulatory reporting and correspondence.",
    },
  ],
};

const benefitsData = {
  title: "Key Benefits",
  benefits: [
    "Minimize compliance risks and avoid regulatory penalties.",
    "Streamline banking relationships and account approvals.",
    "Protect your business reputation through proper due diligence.",
    "Stay updated with evolving compliance regulations in the UAE.",
  ],
};

const ComplianceAdvisory = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection data={heroData} />
      <IntroSection data={introData} />
      {/* <WhyChooseUsSection data={servicesData} /> */}
      <ServiceData/>
      <WhyChooseUsSection data={whyChooseUsData} />
      <ProcessSection data={processData} />
      <BenefitsSection data={benefitsData} />
      <ContactForm />
    </div>
  );
};

export default ComplianceAdvisory;