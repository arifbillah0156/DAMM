"use client";
import { useState } from "react";

export default function HomeSection4() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Main Campus",
      content: `Road: 20, Uttara, Dhaka-1230. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.`,
    },
    {
      id: 2,
      title: "Boys Campus",
      content: `Road: 20/C, Azompur, Uttara. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.`,
    },
    {
      id: 3,
      title: "Third Campus",
      content: `Molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.Molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.`,
    },
    {
      id: 4,
      title: "VIP Campus",
      content: `Testing Text. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.Testing Text. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-purple-500 text-center mb-4">
        <span className="text-green-600">Addresses of all</span>  Our Campuses
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
              className={`block w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-green-50 ${activeTab === tab.id
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
