// import React from 'react';

// const points = [
//     "প্রত্যেক অভিভাবকের মাসে ১ বার হলেও কর্তৃপক্ষের সাথে সাক্ষাৎ জরুরি।",
//     "প্রত্যেক অভিভাবককে মাসিক প্রদেয় প্রতি ইংরেজি মাসের ৭ তারিখের মধ্যে অবশ্যই প্রদান করতে হবে।",
//     "কোনো ছাত্র কোনো মাসের কিছুদিন বা অধিকাংশ দিন অনুপস্থিত থাকলে এর জন্য মাসিক প্রদেয় থেকে কোনো টাকা ফেরত দেয়া হয় না।",
//     "উল্লেখিত মাসিক প্রদেয় খাবার, আবাসিক চার্জ ও বেতন বাবদ নেয়া অর্থের বাইরের যে কোনো খরচ অভিভাবককে বহন করতে হবে।",
//     "বিশেষ কোনো সমস্যা না থাকলে আর্থিক লেনদেন অভিভাবককেই করতে হবে।",
//     "ভর্তির পর তা বাতিল করতে চাইলে ভর্তিসংক্রান্ত কোনো টাকা ফেরত দেয়া হবে না।",
//     "মাদরাসা কর্তৃপক্ষ ছাত্রের সার্বিক নিরাপত্তা ব্যবস্থা গ্রহণ করে, তা সত্ত্বেও কোনো ছাত্র পালালে কিংবা কোনো দুর্ঘটনায় পড়লে কর্তৃপক্ষকে দায়ী করা যাবে না।",
//     "মাসিক প্রদেয় প্রদান ১৪ তারিখ পর্যন্ত বিলম্ব হলে ১৫ তারিখ থেকে ডাইনিং মিল বন্ধ থাকবে, অনাবাসিকদের ক্ষেত্রে ক্লাসে বসার সুযোগ স্থগিত হবে।",
// ];

// export default function GuardianInfo() {
//     return (
//         <section className="max-w-4xl mx-auto px-4 py-8">
//             <div className="bg-gradient-to-r from-blue-900 to-gray-800 text-white text-center py-4 rounded-t-xl shadow-md">
//                 <h2 className="text-2xl md:text-3xl font-bold galada-regular">অভিভাবকের জ্ঞাতব্য</h2>
//             </div>
//             <div className="bg-white border border-t-0 shadow-md rounded-b-xl">
//                 <ul className="space-y-4 p-6 list-decimal list-inside text-gray-900 text-justify leading-relaxed lg:text-lg">
//                     {points.map((point, index) => (
//                         <li key={index} className="relative pl-2">
//                             {point}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }

"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMoon, FiSun, FiInfo, FiCalendar, FiDollarSign, FiHome, FiShield, FiUserCheck, FiAlertCircle } from 'react-icons/fi';

const points = [
    "প্রত্যেক অভিভাবকের মাসে ১ বার হলেও কর্তৃপক্ষের সাথে সাক্ষাৎ জরুরি।",
    "প্রত্যেক অভিভাবককে মাসিক প্রদেয় প্রতি ইংরেজি মাসের ৭ তারিখের মধ্যে অবশ্যই প্রদান করতে হবে।",
    "কোনো ছাত্র কোনো মাসের কিছুদিন বা অধিকাংশ দিন অনুপস্থিত থাকলে এর জন্য মাসিক প্রদেয় থেকে কোনো টাকা ফেরত দেয়া হয় না।",
    "উল্লেখিত মাসিক প্রদেয় খাবার, আবাসিক চার্জ ও বেতন বাবদ নেয়া অর্থের বাইরের যে কোনো খরচ অভিভাবককে বহন করতে হবে।",
    "বিশেষ কোনো সমস্যা না থাকলে আর্থিক লেনদেন অভিভাবককেই করতে হবে।",
    "ভর্তির পর তা বাতিল করতে চাইলে ভর্তিসংক্রান্ত কোনো টাকা ফেরত দেয়া হবে না।",
    "মাদরাসা কর্তৃপক্ষ ছাত্রের সার্বিক নিরাপত্তা ব্যবস্থা গ্রহণ করে, তা সত্ত্বেও কোনো ছাত্র পালালে কিংবা কোনো দুর্ঘটনায় পড়লে কর্তৃপক্ষকে দায়ী করা যাবে না।",
    "মাসিক প্রদেয় প্রদান ১৪ তারিখ পর্যন্ত বিলম্ব হলে ১৫ তারিখ থেকে ডাইনিং মিল বন্ধ থাকবে, অনাবাসিকদের ক্ষেত্রে ক্লাসে বসার সুযোগ স্থগিত হবে।",
];

const iconMap = [
    <FiUserCheck className="text-xl" />,
    <FiCalendar className="text-xl" />,
    <FiDollarSign className="text-xl" />,
    <FiHome className="text-xl" />,
    <FiDollarSign className="text-xl" />,
    <FiAlertCircle className="text-xl" />,
    <FiShield className="text-xl" />,
    <FiInfo className="text-xl" />,
];

export default function GuardianInfo() {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPoints, setFilteredPoints] = useState(points);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredPoints(points);
        } else {
            const filtered = points.filter(point =>
                point.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPoints(filtered);
        }
    }, [searchTerm]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-12 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative overflow-hidden rounded-2xl shadow-xl mb-10 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-900 to-indigo-800'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
                    <div className="relative z-0 text-center py-8 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">অভিভাবকের জ্ঞাতব্য</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto">মাদরাসার নিয়মাবলী ও গুরুত্বপূর্ণ তথ্য</p>

                        {/* Search Bar */}
                        <div className="mt-6 max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="নিয়ম খুঁজুন..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full py-3 px-4 pl-12 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-blue-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                                />
                                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-100" />
                            </div>
                        </div>

                        {/* Dark Mode Toggle */}
                        {/* <button
                            onClick={toggleDarkMode}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
                        </button> */}
                    </div>
                </motion.div>

                {/* Progress Bar */}
                {/* <div className="mb-8">
                    <div className="flex justify-between text-sm mb-1">
                        <span className={darkMode ? "text-gray-400" : "text-gray-600"}>পড়ার অগ্রগতি</span>
                        <span className={darkMode ? "text-gray-400" : "text-gray-600"}>{filteredPoints.length} টি নিয়ম</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                    </div>
                </div> */}

                {/* Points List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-5"
                >
                    {filteredPoints.length > 0 ? (
                        filteredPoints.map((point, index) => {
                            const originalIndex = points.indexOf(point);
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-blue-50'}`}
                                >
                                    <div
                                        className={`p-5 cursor-pointer flex items-start ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${darkMode ? 'bg-indigo-900/50' : 'bg-blue-100'}`}>
                                            {iconMap[originalIndex]}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-medium text-lg leading-relaxed">{point}</h3>
                                                <motion.div
                                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                    className="ml-2 text-gray-400"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </motion.div>
                                            </div>

                                            <motion.div
                                                initial={false}
                                                animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className={`mt-3 pt-3 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                                                    <p>এই নিয়মটি মাদরাসা কর্তৃপক্ষ দ্বারা প্রয়োগ করা হয়। কোনো প্রশ্ন থাকলে অফিসে যোগাযোগ করুন।</p>
                                                    <div className="mt-3 flex space-x-3">
                                                        <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                            গুরুত্বপূর্ণ
                                                        </span>
                                                        <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                                            সকলের জন্য
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-center py-12 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                        >
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className={`text-xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>কোনো নিয়ম পাওয়া যায়নি</h3>
                            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>অন্য কোনো শব্দ দিয়ে আবার চেষ্টা করুন</p>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </div>
    );
}