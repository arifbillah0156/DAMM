"use client";
import { useState } from "react";

export default function HomeSection4() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Rajuk Approval",
      content: `Studio Architect simplifies the process of obtaining RAJUK and City Corporation approvals for building plans. Our experienced team ensures fast, hassle-free, and compliant approvals, protecting clients from legal issues and delays. Trust us to guide you through the complex process, providing personalized support and ensuring a smooth, efficient experience.`,
    },
    {
      id: 2,
      title: "Soil Test",
      content: `Studio Architect provides professional soil testing services for building construction projects. A soil test is essential for ensuring the stability and safety of a building, and our team uses the latest techniques and equipment to deliver accurate results.`,
    },
    {
      id: 3,
      title: "Cost Estimate",
      content: `Studio Architect provides accurate and comprehensive cost estimates for building plans. Our experienced team takes into account all aspects of the construction process, including materials, labor, and local regulations, to ensure a realistic and accurate estimate.`,
    },
    {
      id: 4,
      title: "Digital Land Survey",
      content: `Studio Architect provides precise digital land survey services to accurately measure and map properties. Our cutting-edge technology and experienced team ensure accurate results, saving clients time and money.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-purple-500 text-center mb-4">
        <span className="text-green-600">Additional Services</span> We Offer
      </h2>
      {/* Divider */}
      <div className="w-full mx-auto border-b-4 border-green-600 mb-6"></div>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row">
        {/* Tab Titles */}
        <div className="md:w-1/3 border-r-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`block w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-green-50 ${
                activeTab === tab.id
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600"
              }`}
            >
              <i className="fa-solid fa-circle-check mr-2 text-green-600"></i>
              {tab.title}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="md:w-2/3 p-1 md:p-4 lg:h-[230px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"}`}
            >
              {" "}
              <p className="text-gray-700 text-lg px-4 py-3 border rounded-lg">
                "{tab.content}"
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
