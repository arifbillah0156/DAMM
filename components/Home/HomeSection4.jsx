"use client";
import { useState } from "react";
import SplitText from "../Others/SplitText";

export default function HomeSection4() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Main Campus",
      content: `House: 17, Road: 20, Sector: 04, Uttara, Dhaka.`,
      map: "https://www.google.com/maps/embed?pb=!4v1753253995258!6m8!1m7!1sv4aACXISfI_Dx-dBdj9saQ!2m2!1d23.86711272736647!2d90.40567584269962!3f261.3601894874574!4f13.864318632667505!5f0.7820865974627469"
    },
    {
      id: 2,
      title: "Boys & Hifz",
      content: `House: 07 Road: 20, Sector: 04, Uttara, Dhaka.`,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.03859062740966!2d90.40506921708584!3d23.867714378619564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c56cfafd9c43%3A0xc50e40004ff57400!2sDarul%20Azhar%20model%20Madrasah%20(Boys%20campus)!5e0!3m2!1sen!2sbd!4v1752671894213!5m2!1sen!2sbd"
    },
    {
      id: 3,
      title: "VIP Campus",
      content: `House: 04, Road: 02/B, Sector: 04, Uttara, Dhaka.`,
      map: "https://www.google.com/maps/embed?pb=!4v1753253769298!6m8!1m7!1sfRBVNjtq1vCHBmwN_9DTmg!2m2!1d23.86020471218407!2d90.4053826524267!3f158.6016478296432!4f21.155883245793504!5f0.7820865974627469"
    },
    {
      id: 4,
      title: "Digital Campus",
      content: `House: 36, Road: 05, Sector: 13, Uttara, Dhaka.`,
      map: "https://www.google.com/maps/embed?pb=!4v1752896558925!6m8!1m7!1seJkH6TjGz1m3nhQYsrxLAg!2m2!1d23.86997763925196!2d90.38827204598951!3f7.132060077127238!4f3.448519017910698!5f0.4000000000000002"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Heading */}
      <div className="w-full text-center">
        <SplitText text="Addresses of all Our Campuses" className="text-3xl font-bold text-lc text-center mb-4 abril-fatface-regular" />
      </div>
      {/* <h2 className="text-3xl font-bold text-lc text-center mb-4 abril-fatface-regular">
        <span className="">Addresses of all</span> <p className="block md:hidden"></p>  Our Campuses
      </h2> */}
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
              <i className="fa-solid fa-map-location-dot mr-2 text-lc"></i>
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
              <p className="text-lc italic text-md px-3 py-3 border-l-4 border-y border-r-4 border rounded-lg border-x-blue-400 merriweather tracking-wide">
                <i className="fa-solid fa-location-dot mr-1"></i> {tab.content}
              </p>
              <iframe src={tab.map} className="h-full w-full p-1 rounded-xl border mt-1"></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
