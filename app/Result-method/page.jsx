// export default function ResultSystem() {
//     return (
//         <div className="max-w-4xl mx-auto px-4 mt-4 py-6">
//             <div className="space-y-6">

//                 {/* Header */}
//                 <div className="text-center">
//                     <h1 className="text-4xl font-extrabold text-lc underline underline-offset-4 galada-regular">
//                         ফলাফল পদ্ধতি
//                     </h1>
//                 </div>

//                 {/* Section: পরীক্ষা পদ্ধতি */}
//                 <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
//                     <h2 className="text-xl font-bold text-indigo-700 mb-2">
//                         📘 পরীক্ষা পদ্ধতি
//                     </h2>
//                     <p className="text-gray-700 leading-relaxed">
//                         বছরে ৩টি সেমিস্টার ফাইনাল পরীক্ষা নেওয়া হয়। সাথে শ্রেণি অভিক্ষা এবং প্রতি সেমিস্টারে ৩টি পাক্ষিক পাঠ মূল্যায়ন অনুষ্ঠিত হয়।
//                     </p>
//                 </div>

//                 {/* Section: নাম্বার বন্টন */}
//                 <div className="bg-white rounded-xl shadow-md p-6 border border-green-100">
//                     <h2 className="text-xl font-bold text-green-700 mb-2">
//                         📊 নাম্বার বন্টন
//                     </h2>
//                     <ul className="list-disc list-inside text-gray-700 space-y-1">
//                         <li>শ্রেণি অভিক্ষা – ২০ নম্বর</li>
//                         <li>সেমিস্টার ফাইনাল – ৮০ নম্বর</li>
//                         <li>মোট – ১০০ নম্বর</li>
//                     </ul>
//                 </div>

//                 {/* Section: ফলাফল গ্রেডিং পদ্ধতি */}
//                 <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
//                     <h2 className="text-xl font-bold text-purple-700 mb-4">
//                         🏅 ফলাফল গ্রেডিং পদ্ধতি
//                     </h2>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full table-auto text-left text-gray-700">
//                             <thead>
//                                 <tr className="bg-purple-100 text-purple-800">
//                                     <th className="py-2 px-4 font-semibold">গ্রেড</th>
//                                     <th className="py-2 px-4 font-semibold">প্রাপ্ত নম্বর</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {[
//                                     ["A+", "80% বা তার বেশি"],
//                                     ["A", "70% - 79%"],
//                                     ["A-", "60% - 69%"],
//                                     ["B+", "55% - 59%"],
//                                     ["B", "50% - 54%"],
//                                     ["C", "45% - 49%"],
//                                     ["D", "40% - 44%"],
//                                     ["F", "৪০% এর নিচে (ব্যর্থ)"],
//                                 ].map(([grade, range]) => (
//                                     <tr key={grade} className="border-t hover:bg-purple-50">
//                                         <td className="py-2 px-4 font-medium">{grade}</td>
//                                         <td className="py-2 px-4">{range}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ResultSystem() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const gradeData = [
        { grade: "A+", range: "80% বা তার বেশি", percentage: 100, color: "bg-green-500" },
        { grade: "A", range: "70% - 79%", percentage: 75, color: "bg-teal-500" },
        { grade: "A-", range: "60% - 69%", percentage: 65, color: "bg-blue-500" },
        { grade: "B+", range: "55% - 59%", percentage: 57, color: "bg-indigo-500" },
        { grade: "B", range: "50% - 54%", percentage: 52, color: "bg-purple-500" },
        { grade: "C", range: "45% - 49%", percentage: 47, color: "bg-pink-500" },
        { grade: "D", range: "40% - 44%", percentage: 42, color: "bg-orange-500" },
        { grade: "F", range: "৪০% এর নিচে (ব্যর্থ)", percentage: 30, color: "bg-red-500" },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'}`}>


            {/* Dark Mode Toggle */}
            {/* <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-300'}`}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div> */}

            <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
                {/* Animated Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block relative">
                        <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-700 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'} galada-regular pt-6`}>
                            ফলাফল পদ্ধতি
                        </h1>
                        <div className={`absolute -bottom-2 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gradient-to-r from-indigo-400 to-purple-600'} rounded-full transform scale-x-0 transition-transform duration-1000 delay-300 ${isVisible ? 'scale-x-100' : ''}`}></div>
                    </div>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        একটি আধুনিক এবং কার্যকর মূল্যায়ন ব্যবস্থা যা শিক্ষার্থীদের সামগ্রিক বিকাশ নিশ্চিত করে
                    </p>
                </div>

                {/* Navigation Tabs */}
                {/* <div className="flex flex-wrap justify-center mb-10 gap-2">
                    {['all', 'method', 'distribution', 'grading'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                                ? `${darkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white'} shadow-lg`
                                : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'} shadow`
                                }`}
                        >
                            {tab === 'all' && 'সব দেখুন'}
                            {tab === 'method' && 'পরীক্ষা পদ্ধতি'}
                            {tab === 'distribution' && 'নাম্বার বন্টন'}
                            {tab === 'grading' && 'গ্রেডিং পদ্ধতি'}
                        </button>
                    ))}
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Section: পরীক্ষা পদ্ধতি */}
                    {(activeTab === 'all' || activeTab === 'method') && (
                        <div
                            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                        >
                            <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}>
                                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
                                            <span className="text-2xl">📘</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
                                            পরীক্ষা পদ্ধতি
                                        </h2>
                                    </div>
                                    <div className="space-y-4">
                                        <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            বছরে ৩টি সেমিস্টার ফাইনাল পরীক্ষা নেওয়া হয়। সাথে শ্রেণি অভিক্ষা এবং প্রতি সেমিস্টারে ৩টি পাক্ষিক পাঠ মূল্যায়ন অনুষ্ঠিত হয়।
                                        </p>

                                        <div className="mt-6 space-y-3">
                                            {[
                                                { title: "সেমিস্টার ফাইনাল", desc: "প্রতি সেমিস্টারে একটি করে ফাইনাল পরীক্ষা", icon: "📝" },
                                                { title: "শ্রেণি অভিক্ষা", desc: "নিয়মিত শ্রেণীকক্ষে মূল্যায়ন", icon: "👨‍🏫" },
                                                { title: "পাক্ষিক মূল্যায়ন", desc: "প্রতি সেমিস্টারে ৩টি পাক্ষিক পরীক্ষা", icon: "📊" }
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-start p-4 rounded-lg transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-50 hover:bg-indigo-100'
                                                        }`}
                                                >
                                                    <span className="text-xl mr-3">{item.icon}</span>
                                                    <div>
                                                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section: নাম্বার বন্টন */}
                    {(activeTab === 'all' || activeTab === 'distribution') && (
                        <div
                            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } ${darkMode ? 'bg-gray-800' : 'bg-white'}  p-1 ${darkMode ? 'bg-gradient-to-r from-green-600 to-teal-500' : 'bg-gradient-to-r from-green-500 to-teal-500'}`}
                        >
                            <div>
                                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                                            নাম্বার বন্টন
                                        </h2>
                                    </div>

                                    <div className="">
                                        <div className="space-y-5">
                                            {[
                                                { title: "শ্রেণি অভিক্ষা", value: "২০ নম্বর", percent: 20 },
                                                { title: "সেমিস্টার ফাইনাল", value: "৮০ নম্বর", percent: 80 },
                                                { title: "মোট", value: "১০০ নম্বর", percent: 100 }
                                            ].map((item, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</span>
                                                        <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{item.value}</span>
                                                    </div>
                                                    <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                        <div
                                                            className={`h-full rounded-full ${darkMode ? 'bg-gradient-to-r from-green-500 to-teal-400' : 'bg-gradient-to-r from-green-500 to-teal-500'} transition-all duration-1000 ease-out`}
                                                            style={{ width: isVisible ? `${item.percent}%` : '0%' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`mt-8 p-5 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border-l-4 border-green-500`}>
                                            <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'}`}>মূল্যায়নের গুরুত্ব</h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                শিক্ষার্থীদের মূল্যায়ন শুধুমাত্র সেমিস্টার ফাইনাল পরীক্ষার উপর নির্ভর করে না। নিয়মিত শ্রেণি অভিক্ষা এবং পাক্ষিক মূল্যায়নও সমান গুরুত্বপূর্ণ।
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section: ফলাফল গ্রেডিং পদ্ধতি */}
                    {(activeTab === 'all' || activeTab === 'grading') && (
                        <div
                            className={`lg:col-span-2 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                        >
                            <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                        <div className="flex items-center mb-4 md:mb-0">
                                            <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                                                <span className="text-2xl">🏅</span>
                                            </div>
                                            <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                                                ফলাফল গ্রেডিং পদ্ধতি
                                            </h2>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                                            সর্বোচ্চ গ্রেড: A+ (৮০% বা তার বেশি)
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Table View */}
                                        <div className={`overflow-hidden rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} p-1`}>
                                            <div className={`overflow-x-auto rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className={`${darkMode ? 'bg-gray-600' : 'bg-purple-100'}`}>
                                                            <th className={`py-3 px-4 text-left font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>গ্রেড</th>
                                                            <th className={`py-3 px-4 text-left font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>প্রাপ্ত নম্বর</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {gradeData.map((item, index) => (
                                                            <tr
                                                                key={index}
                                                                className={`border-t ${darkMode ? 'border-gray-600 hover:bg-gray-600' : 'border-purple-100 hover:bg-purple-50'} transition-colors duration-200`}
                                                            >
                                                                <td className={`py-3 px-4 font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.grade}</td>
                                                                <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.range}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Visual Representation */}
                                        <div className="space-y-4">
                                            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>গ্রেড বিতরণ (ভিজ্যুয়াল)</h3>
                                            <div className="space-y-3">
                                                {gradeData.map((item, index) => (
                                                    <div key={index} className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <div className="flex items-center">
                                                                <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                                                                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.grade}</span>
                                                            </div>
                                                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.range}</span>
                                                        </div>
                                                        <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                            <div
                                                                className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                                                                style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                                                <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>গ্রেডিং নীতি</h3>
                                                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    গ্রেডিং সিস্টেমটি শিক্ষার্থীদের পারফরম্যান্সের একটি সুষম মূল্যায়ন প্রদান করে। ৪০% এর নিচে প্রাপ্ত নম্বরকে ফেল (F) গ্রেড হিসেবে বিবেচনা করা হয়।
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Additional Information Section */}
                <div className={`mt-12 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}>
                        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                                    <span className="text-2xl">💡</span>
                                </div>
                                <h2 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                                    গুরুত্বপূর্ণ তথ্য
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "পুনঃপরীক্ষা",
                                        desc: "F গ্রেড প্রাপ্ত শিক্ষার্থীদের পুনঃপরীক্ষার সুযোগ দেওয়া হয়",
                                        icon: "🔄"
                                    },
                                    {
                                        title: "উন্নতির সুযোগ",
                                        desc: "নিম্ন গ্রেড প্রাপ্ত শিক্ষার্থীরা উন্নতির জন্য বিশেষ ক্লাসে অংশগ্রহণ করতে পারে",
                                        icon: "📈"
                                    },
                                    {
                                        title: "সমন্বিত মূল্যায়ন",
                                        desc: "শুধুমাত্র লিখিত পরীক্ষা নয়, ব্যবহারিক, প্রকল্প ও উপস্থাপনাও মূল্যায়নের অংশ",
                                        icon: "🎯"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 rounded-xl transition-all duration-300 hover:shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'
                                            }`}
                                    >
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}