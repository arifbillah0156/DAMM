"use client";
import { useState } from "react";

export default function HomeSection4() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Main Campus",
      content: `Road: 20, Uttara, Dhaka-1230.`,
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.07899642205876!2d90.405565!3d23.867199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42e544cf359%3A0xde8af1e80b435980!2sDarul%20Azhar%20Model%20Madrasah%20Main%20Campus!5e0!3m2!1sen!2sbd!4v1752671746934!5m2!1sen!2sbd"
    },
    {
      id: 2,
      title: "Boys Campus",
      content: `Road: 20/C, Azompur, Uttara.`,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.03859062740966!2d90.40506921708584!3d23.867714378619564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56cfafd9c43%3A0xc50e40004ff57400!2sDarul%20Azhar%20model%20Madrasah%20(Boys%20campus)!5e0!3m2!1sen!2sbd!4v1752671894213!5m2!1sen!2sbd"
    },
    {
      id: 3,
      title: "Third Campus",
      content: `Molestias eligendi deserunt velit quia quasi `,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.03859062740966!2d90.40506921708584!3d23.867714378619564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56cfafd9c43%3A0xc50e40004ff57400!2sDarul%20Azhar%20model%20Madrasah%20(Boys%20campus)!5e0!3m2!1sen!2sbd!4v1752671894213!5m2!1sen!2sbd"
    },
    {
      id: 4,
      title: "VIP Campus",
      content: `Testing Text. Iusto, molestias eligendi deserunt velit `,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.03859062740966!2d90.40506921708584!3d23.867714378619564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56cfafd9c43%3A0xc50e40004ff57400!2sDarul%20Azhar%20model%20Madrasah%20(Boys%20campus)!5e0!3m2!1sen!2sbd!4v1752671894213!5m2!1sen!2sbd"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-lc text-center mb-4 abril-fatface-regular">
        <span className="">Addresses of all</span> <p className="block md:hidden"></p>  Our Campuses
      </h2>
      {/* Divider */}
      <div className="w-full mx-auto border-b-4 border-lc mb-6"></div>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row">
        {/* Tab Titles */}
        <div className="md:w-1/3 border-r-2 border-gray-200 rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`block w-full text-left px-4 py-3 border-b border-blue-200 hover:bg-blue-50 ${activeTab === tab.id
                ? "bg-sky-100 text-lc font-semibold"
                : "text-gray-600"
                }`}
            >
              <i className="fa-solid fa-circle-check mr-2 text-lc"></i>
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
              <p className="text-gray-800 text-lg px-4 py-3 border rounded-lg">
                "{tab.content}"
              </p>{" "}
              <iframe src={tab.map} className="h-full w-full p-1 rounded-xl border mt-1"></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
