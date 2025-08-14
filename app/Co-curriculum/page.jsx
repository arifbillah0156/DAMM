// // app/components/CoCurriculum.jsx

// export default function CoCurriculum() {
//     return (
//         <div className="bg-white text-gray-900 mt-5 py-10 px-4 md:px-10 max-w-6xl mx-auto">
//             <div className="mb-8 text-center">
//                 <h2 className="text-3xl md:text-4xl text-lc galada-regular underline underline-offset-4">
//                     কো-কারিকুলাম
//                 </h2>
//             </div>

//             <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-gray-800 p-3 px-4 py-2 rounded-md shadow mb-6 text-center">
//                 কো-কারিকুলাম সমূহ
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 text-lg font-medium">
//                 <div className="space-y-2 ml-[10%]">
//                     <p>০১. হিফযুল করআন</p>
//                     <p>০২. স্পোকেন ইংলিশ</p>
//                     <p>০৩. ডিবেটিং ক্লাব</p>
//                     <p>০৪. স্পোর্টস এন্ড হেল্থ ক্লাব</p>
//                     <p>০৫. কম্পিউটার প্রশিক্ষণ</p>
//                     <p>০৬. দেয়ালিকা ও সময়িকী প্রকাশ</p>
//                     <p>০৭. ইসলামী গান ও কবিতা পাঠের আসর</p>
//                     <p>০৮. হাতে কলমে আর্ট</p>
//                     <p>০৯. সাহিত্য সভা</p>
//                 </div>
//                 <div className="space-y-2 ml-[10%] md:ml-0">
//                     <p className="mt-2 md:mt-0">১০. হিফযুল হাদীস</p>
//                     <p>১১. স্পোকেন এ্যারাবিক</p>
//                     <p>১২. রিডার্স ফোরাম</p>
//                     <p>১৩. সায়েন্স ক্লাব</p>
//                     <p>১৪. লিডারশিপ ট্রেনিং</p>
//                     <p>১৫. ক্বিরাত প্রশিক্ষণ</p>
//                     <p>১৬. ইসলামী ক্যালিগ্রাফি</p>
//                     <p>১৭. গল্প ও অভিনয়</p>
//                     <p>১৮. কারাতে</p>
//                 </div>
//             </div>

//             <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-gray-800 px-4 py-2 rounded-md shadow mt-10 mb-4 text-center">
//                 হিফযুল কুরআনের নির্ধারিত সিলেবাসঃ
//             </h2>

//             <div className="text-lg space-y-2 font-medium ml-[5%]">
//                 <p>* ১ম বর্ষে ৬ পারা</p>
//                 <p>* ২য় বর্ষে ৭ পারা</p>
//                 <p>* ৩য় বর্ষে ৭ পারা</p>
//                 <p>* ৪র্থ বর্ষে ৫ পারা</p>
//                 <p>* ৫ম বর্ষে ৫ পারা</p>
//                 <p>* ৬ষ্ঠ বর্ষে পূর্ণ করআন শুনানি</p>
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FiBook, FiUsers, FiAward, FiCalendar, FiStar, FiTrendingUp,
    FiPenTool, FiMic, FiActivity, FiCode, FiEdit, FiMusic,
    FiHeart, FiBookOpen, FiMessageSquare, FiSettings, FiUser,
    FiGlobe, FiZap, FiChevronRight, FiArrowUp
} from 'react-icons/fi';

const CoCurriculum = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // Check if element is in view for scroll animations
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('co-curriculum');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight && position.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activities = [
        { id: 1, name: "হিফযুল করআন", icon: <FiBookOpen className="text-xl" />, category: "islamic" },
        { id: 2, name: "স্পোকেন ইংলিশ", icon: <FiGlobe className="text-xl" />, category: "language" },
        { id: 3, name: "ডিবেটিং ক্লাব", icon: <FiMessageSquare className="text-xl" />, category: "academic" },
        { id: 4, name: "কারাতে", icon: <FiAward className="text-xl" />, category: "physical" },
        { id: 5, name: "কম্পিউটার প্রশিক্ষণ", icon: <FiCode className="text-xl" />, category: "technical" },
        { id: 6, name: "দেয়ালিকা ও সময়িকী প্রকাশ", icon: <FiEdit className="text-xl" />, category: "creative" },
        { id: 7, name: "ইসলামী গান ও কবিতা পাঠের আসর", icon: <FiMusic className="text-xl" />, category: "islamic" },
        { id: 8, name: "হাতে কলমে আর্ট", icon: <FiPenTool className="text-xl" />, category: "creative" },
        { id: 9, name: "সাহিত্য সভা", icon: <FiBook className="text-xl" />, category: "academic" },
        { id: 10, name: "হিফযুল হাদীস", icon: <FiBookOpen className="text-xl" />, category: "islamic" },
        { id: 11, name: "স্পোকেন এ্যারাবিক", icon: <FiGlobe className="text-xl" />, category: "language" },
        { id: 12, name: "রিডার্স ফোরাম", icon: <FiBook className="text-xl" />, category: "academic" },
        { id: 13, name: "সায়েন্স ক্লাব", icon: <FiZap className="text-xl" />, category: "technical" },
        { id: 14, name: "লিডারশিপ ট্রেনিং", icon: <FiUser className="text-xl" />, category: "development" },
        { id: 15, name: "ক্বিরাত প্রশিক্ষণ", icon: <FiMic className="text-xl" />, category: "islamic" },
        { id: 16, name: "ইসলামী ক্যালিগ্রাফি", icon: <FiPenTool className="text-xl" />, category: "creative" },
        { id: 17, name: "গল্প ও অভিনয়", icon: <FiHeart className="text-xl" />, category: "creative" },
        { id: 18, name: "স্পোর্টস এন্ড হেলথ ক্লাব", icon: <FiActivity className="text-xl" />, category: "physical" },

    ];

    const syllabus = [
        { year: "১ম বর্ষ", para: "৬ পারা", progress: 30 },
        { year: "২য় বর্ষ", para: "৭ পারা", progress: 45 },
        { year: "৩য় বর্ষ", para: "৭ পারা", progress: 60 },
        { year: "৪র্থ বর্ষ", para: "৫ পারা", progress: 75 },
        { year: "৫ম বর্ষ", para: "৫ পারা", progress: 90 },
        { year: "৬ষ্ঠ বর্ষ", para: "পূর্ণ করআন শুনানি", progress: 100 },
    ];

    const categories = [
        { id: 'all', name: 'সব কিছু', icon: <FiStar /> },
        { id: 'islamic', name: 'ইসলামিক', icon: <FiBookOpen /> },
        { id: 'academic', name: 'একাডেমিক', icon: <FiBook /> },
        { id: 'creative', name: 'ক্রিয়েটিভ', icon: <FiPenTool /> },
        { id: 'physical', name: 'ফিজিক্যাল', icon: <FiActivity /> },
    ];

    const filteredActivities = activeCategory === 'all'
        ? activities
        : activities.filter(activity => activity.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1]
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 0.61, 0.36, 1]
            }
        }
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (progress) => ({
            width: `${progress}%`,
            transition: {
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut"
            }
        })
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden relative">


            <motion.div
                id="co-curriculum"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-6xl mx-auto relative z-0"
            >
                {/* Main heading with animated underline */}
                <motion.div variants={headingVariants} className="text-center mb-12 ">
                    <motion.h1
                        className="text-2xl  md:text-4xl pt-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        কো-কারিকুলার কার্যক্রম
                    </motion.h1>
                    <div className="flex justify-center">
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "6rem" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Category filters */}
                <motion.div variants={headingVariants} className="mb-10">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                className={`flex items-center px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-100'
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Activities grid */}
                <motion.div variants={containerVariants} className="mb-16">
                    <motion.div variants={headingVariants} className="mb-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-indigo-800 p-4 rounded-xl shadow-lg text-center flex items-center justify-center">
                            <FiStar className="mr-2" />
                            কো-কারিকুলার সমূহ
                            <FiStar className="ml-2" />
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                    >
                        {filteredActivities.map((activity) => (
                            <motion.div
                                key={activity.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.25), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
                                }}
                                className="group bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start cursor-pointer"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300 mr-4">
                                    {activity.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center mb-1">
                                        <span className="font-bold text-blue-600 mr-2">{activity.id.toString().padStart(2, '0')}.</span>
                                        <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                                            {activity.name}
                                        </h3>
                                    </div>
                                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <FiChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 mt-1" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Syllabus section */}
                <motion.div variants={containerVariants} className="mb-16">
                    <motion.div variants={headingVariants} className="mb-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-indigo-800 p-4 rounded-xl shadow-lg text-center flex items-center justify-center">
                            <FiBookOpen className="mr-2" />
                            হিফযুল কুরআনের নির্ধারিত সিলেবাস
                            <FiBookOpen className="ml-2" />
                        </h2>
                    </motion.div>

                    <motion.div variants={containerVariants} className="space-y-4">
                        {syllabus.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 mr-4">
                                        <FiCalendar className="text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-lg text-blue-700">{item.year}</span>
                                            <span className="text-base font-medium text-gray-700 bg-blue-50 px-3 py-1 rounded-full">
                                                {item.para}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mb-2">অগ্রগতি: {item.progress}%</div>
                                    </div>
                                </div>
                                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                                        custom={item.progress}
                                        variants={progressVariants}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-12"
                >
                    <motion.div
                        className="inline-block relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-70"></div>
                        {/* <motion.button
                            className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center mx-auto shadow-lg"
                            whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                        >
                            <FiTrendingUp className="mr-3 text-xl" />
                            সম্পূর্ণ শিক্ষার অভিজ্ঞতা অর্জন করুন
                            <FiChevronRight className="ml-3 text-xl" />
                        </motion.button> */}
                    </motion.div>
                </motion.div>


            </motion.div>
        </div>
    );
};

export default CoCurriculum;