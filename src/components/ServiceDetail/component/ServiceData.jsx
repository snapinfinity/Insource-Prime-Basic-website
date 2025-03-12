import React from 'react';
import { Users, FileCheck, ShieldCheck, AlertTriangle, MessageSquare } from 'lucide-react';

const ServiceData = () => {
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

  const getIcon = (iconName) => {
    const IconMap = {
      Users,
      FileCheck,
      ShieldCheck,
      AlertTriangle,
      MessageSquare
    };
    const Icon = IconMap[iconName.name] || Users;
    return <Icon size={24} />;
  };

  return (
    <div className="px-10 py-16 bg-gray-50">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-2 md:text-[40px] text-[28px] font-bold text-gray-900">{servicesData.title}</h2>
        </div>
        
        <div className="space-y-12">
          {servicesData.features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row md:items-start group">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center mr-4 text-white transition-all duration-300 bg-blue-600 rounded-full w-14 h-14 group-hover:bg-blue-700">
                      {getIcon(feature.icon)}
                    </div>
                    <div className="text-6xl font-bold text-gray-200">0{index + 1}</div>
                  </div>
                </div>
                <div className="flex-grow pl-4 transition-all duration-300 border-l-4 border-blue-600">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="max-w-3xl text-gray-600">{feature.description}</p>
                </div>
              </div>
              
              {index < servicesData.features.length - 1 && (
                <div className="my-12 border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceData;