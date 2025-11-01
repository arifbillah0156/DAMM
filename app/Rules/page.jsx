// import React from "react";

// export default function RulesPage() {
//     return (
//         <div className="max-w-5xl mx-auto px-4 py-12 mt-4 text-gray-900 text-justify">
//             <div className="mb-8 text-center">
//                 <h1 className="text-3xl md:text-4xl text-lc galada-regular underline underline-offset-8">
//                     ছাত্রাবাসের নিয়মাবলী
//                 </h1>
//             </div>

//             <section className="space-y-4">
//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     ছাত্রাবাসের নিয়মাবলীঃ
//                 </h2>
//                 <ul className="list-disc pl-6 space-y-2">
//                     <li>মাদরাসা কর্তৃপক্ষের অনুনমোদিত (খিলাফে সুন্নত) কোনো পোশাকই গ্রহণযোগ্য নয়।</li>
//                     <li>ছাত্ররা নিজ জিম্মায় নগদ অর্থ রাখতে পারবে না। পকেট খরচ অনূর্ধ ৫০০/- সংশ্লিষ্ট শিক্ষকের কাছে রাখা যাবে।</li>
//                     <li>ছাত্রের চিঠিপত্র কর্তৃপক্ষ সেন্সর করতে পারবে।</li>
//                     <li>ছুটি পেতে অভিভাবকদের আবেদন জমা দিতে হবে।</li>
//                     <li>নির্ধারিত স্থানেই রাত্রী যাপন করতে হবে।</li>
//                     <li>রাজনীতিতে জড়িত থাকা নিষেধ।</li>
//                     <li>ছুটি চলাকালে রেজিস্টারে নাম লিখে ক্যাম্পাস ত্যাগ ও প্রবেশ করতে হবে।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     ছাত্রদের জ্ঞাতব্যঃ
//                 </h2>
//                 <ul className="list-decimal pl-6 space-y-2">
//                     <li>মাদরাসার সব নিয়ম-কানুন ও শিক্ষকদের আদেশ মানতে হবে।</li>
//                     <li>চুল, দাড়ি, গোঁফ ও পোশাক সুন্নতের অনুসারে হতে হবে।</li>
//                     <li>রাজনীতি, সংগঠন, সমিতি সম্পূর্ণ নিষিদ্ধ।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     সাক্ষাতের নিয়ম ও সময়সূচিঃ
//                 </h2>
//                 <ul className="list-decimal pl-6 space-y-2">
//                     <li>শুক্রবার সকাল ৮:৩০-১১টা, এবং আছরের পর থেকে মাগরিব পর্যন্ত।</li>
//                     <li>জরুরী প্রয়োজনে ফোনে যোগাযোগ সম্ভব।</li>
//                     <li>অনুমতি ছাড়া সাক্ষাৎ শৃঙ্খলা ভঙ্গ বলে বিবেচিত হবে।</li>
//                     <li>ছুটি শেষে অভিভাবক দ্বারা আগমন ও নির্ধারিত সময়ে ফিরে আসা আবশ্যক।</li>
//                     <li>ভর্তি বাতিলের ক্ষমতা কর্তৃপক্ষের রয়েছে।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     ছাত্রদের ছুটি প্রসঙ্গঃ
//                 </h2>
//                 <ul className="list-decimal pl-6 space-y-2">
//                     <li>নতুন ছাত্র: সপ্তাহে একদিন (শুক্রবার)।</li>
//                     <li>পুরাতন ছাত্র: মাসে দু’দিন।</li>
//                     <li>৪র্থ শ্রেণির উপরে: বিশেষ ছুটি নিষিদ্ধ।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     সাক্ষাতের নিয়মাবলিঃ
//                 </h2>
//                 <ul className="list-decimal pl-6 space-y-2">
//                     <li>সত্যায়িত ৩ কপি পাসপোর্ট ও স্ট্যাম্প সাইজ ছবি জমা দিতে হবে।</li>
//                     <li>অন্য কারও মাধ্যমে সাক্ষাৎ হলে তারও ছবি ও অনুমতি লাগবে।</li>
//                     <li>মাদরাসা পরিচয়পত্র ছাড়া সাক্ষাৎ অনুমোদিত নয়।</li>
//                     <li>সাক্ষাৎ কার্ড বাধ্যতামূলক।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     মহিলা অভিভাবকের জন্য জ্ঞাতব্যঃ
//                 </h2>
//                 <ul className="list-disc pl-6 space-y-2">
//                     <li>সংকীর্ণতা বিবেচনায় মহিলা অভিভাবকের যাতায়াত কম হওয়া শ্রেয়।</li>
//                     <li>ইসলামী শরীয়াহ মোতাবেক পোশাকে আসা আবশ্যক।</li>
//                 </ul>

//                 <h2 className="text-xl font-semibold text-white px-4 py-2 bg-gradient-to-r from-blue-900 to-gray-800 p-3 rounded-md">
//                     ইউনিফর্মঃ
//                 </h2>
//                 <p><strong>ছাত্র:</strong> নেভীব্লু সেরওয়ানি, সাদা সেলোয়ার, কালো জুতা-মোজা ও সাদা টুপি।</p>
//                 <p><strong>ছাত্রী:</strong> একই রঙের কামিজ, সাদা পায়জামা-স্কার্ফ, কালো জুতা-মোজা।</p>
//             </section>
//         </div>
//     );
// }

"use client"
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';

const HostelRules = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const sectionRefs = useRef([]);

    useEffect(() => {
        setIsVisible(true);

        // Scroll to top on load
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Track scroll position
        const handleScroll = () => {
            // Show/hide scroll to top button
            setShowScrollTop(window.scrollY > 500);

            // Determine active section
            const scrollPosition = window.scrollY + 200;

            for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
                const section = sectionRefs.current[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const headerVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            },
        },
    };

    const ruleCardVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
        hover: {
            scale: 1.02,
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
        }
    };

    const sections = [
        { id: 'hostel-rules', title: 'ছাত্রাবাসের নিয়মাবলীঃ', icon: '📋' },
        { id: 'students-note', title: 'ছাত্রদের জ্ঞাতব্যঃ', icon: '👨‍🎓' },
        { id: 'meeting-schedule', title: 'সাক্ষাতের নিয়ম ও সময়সূচিঃ', icon: '🕒' },
        { id: 'student-leave', title: 'আবাসিক শিক্ষার্থীদের ছুটিঃ', icon: '📅' },
        { id: 'meeting-rules', title: 'সাক্ষাতের নিয়মাবলিঃ', icon: '📝' },
        { id: 'female-guardians', title: 'মহিলা অভিভাবকের জন্য জ্ঞাতব্যঃ', icon: '👩' },
        { id: 'uniform', title: 'ইউনিফর্মঃ', icon: '👔' }
    ];

    return (
        <>


            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                {/* Sticky Navigation */}
                <motion.div
                    className="block md:hidden sticky top-0 z-0 bg-white/80 backdrop-blur-md shadow-md rounded-xl mx-auto max-w-5xl mb-6"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex overflow-x-auto py-3 px-4 scrollbar-hide">
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`flex items-center px-4 py-2 mx-1 rounded-lg whitespace-nowrap transition-colors ${activeSection === section.id ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' : 'text-gray-700 hover:bg-blue-100'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-2">{section.icon}</span>
                                <span className="font-medium">{section.title}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="max-w-5xl mx-auto relative z-0">
                    {/* Header with animated elements */}
                    <motion.div
                        className="mb-12 text-center"
                        variants={headerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >


                        <motion.h1
                            className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 pt-6"
                            style={{ fontFamily: "'Galada', cursive" }}
                        >
                            ছাত্রাবাসের নিয়মাবলী

                        </motion.h1>

                        <motion.div
                            className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-700 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "10rem" }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />

                        <motion.p
                            className="mt-6 text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            মাদরাসার ছাত্রাবাসের জন্য প্রযোজ্য নিয়মাবলী ও বিধিনিষেধ সমূহ
                        </motion.p>
                    </motion.div>

                    {/* Rules sections */}
                    <motion.div
                        className="space-y-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {/* Section 1: Hostel Rules */}
                        <motion.div
                            id="hostel-rules"
                            ref={el => sectionRefs.current[0] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">📋</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">ছাত্রাবাসের নিয়মাবলীঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        মাদরাসা কর্তৃপক্ষের অনুনমোদিত (খিলাফে সুন্নত) কোনো পোশাকই গ্রহণযোগ্য নয়।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        ছাত্ররা নিজ জিম্মায় নগদ অর্থ রাখতে পারবে না। পকেট খরচ অনূর্ধ ৫০০/- সংশ্লিষ্ট শিক্ষকের কাছে রাখা যাবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                        ছাত্রের চিঠিপত্র কর্তৃপক্ষ সেন্সর করতে পারবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                        ছুটি পেতে অভিভাবকদের আবেদন জমা দিতে হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                        নির্ধারিত স্থানেই রাত্রী যাপন করতে হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                                        রাজনীতিতে জড়িত থাকা নিষেধ।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-blue-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 flex-shrink-0">7</span>
                                        ছুটি চলাকালে রেজিস্টারে নাম লিখে ক্যাম্পাস ত্যাগ ও প্রবেশ করতে হবে।
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 2: Students to note */}
                        <motion.div
                            id="students-note"
                            ref={el => sectionRefs.current[1] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">👨‍🎓</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">ছাত্রদের জ্ঞাতব্যঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-indigo-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        মাদরাসার সব নিয়ম-কানুন ও শিক্ষকদের আদেশ মানতে হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-indigo-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        চুল, দাড়ি, গোঁফ ও পোশাক সুন্নতের অনুসারে হতে হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-indigo-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                        রাজনীতি, সংগঠন, সমিতি সম্পূর্ণ নিষিদ্ধ।
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 3: Meeting rules */}
                        <motion.div
                            id="meeting-schedule"
                            ref={el => sectionRefs.current[2] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">🕒</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">সাক্ষাতের নিয়ম ও সময়সূচিঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-purple-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        শুক্রবার সকাল ৮:৩০-১১টা, এবং আছরের পর থেকে মাগরিব পর্যন্ত।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-purple-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        জরুরী প্রয়োজনে ফোনে যোগাযোগ সম্ভব।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-purple-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                        অনুমতি ছাড়া সাক্ষাৎ শৃঙ্খলা ভঙ্গ বলে বিবেচিত হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-purple-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                        ছুটি শেষে অভিভাবক দ্বারা আগমন ও নির্ধারিত সময়ে ফিরে আসা আবশ্যক।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-purple-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                        ভর্তি বাতিলের ক্ষমতা কর্তৃপক্ষের রয়েছে।
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 4: Student leave */}
                        <motion.div
                            id="student-leave"
                            ref={el => sectionRefs.current[3] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-pink-900 to-rose-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">📅</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">আবাসিক শিক্ষার্থীদের ছুটিঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-pink-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        নতুন শিক্ষার্থী: সপ্তাহে একদিন (শুক্রবার)।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-pink-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        পুরাতন শিক্ষার্থী: মাসে দু'দিন।
                                    </motion.li>
                                    {/* <motion.li variants={itemVariants} className="hover:text-pink-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                        ৪র্থ শ্রেণির উপরে: বিশেষ ছুটি নিষিদ্ধ।
                                    </motion.li> */}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 5: Meeting rules */}
                        {/* <motion.div
                            id="meeting-rules"
                            ref={el => sectionRefs.current[4] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-rose-900 to-red-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">📝</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">সাক্ষাতের নিয়মাবলিঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-decimal pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-rose-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        সত্যায়িত ৩ কপি পাসপোর্ট ও স্ট্যাম্প সাইজ ছবি জমা দিতে হবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-rose-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        অন্য কারও মাধ্যমে সাক্ষাৎ হলে তারও ছবি ও অনুমতি লাগবে।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-rose-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                        মাদরাসা পরিচয়পত্র ছাড়া সাক্ষাৎ অনুমোদিত নয়।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-rose-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                        সাক্ষাৎ কার্ড বাধ্যতামূলক।
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div> */}

                        {/* Section 6: Female guardians */}
                        <motion.div
                            id="female-guardians"
                            ref={el => sectionRefs.current[5] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-red-900 to-orange-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">👩</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">মহিলা অভিভাবকের জন্য জ্ঞাতব্যঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                    <motion.li variants={itemVariants} className="hover:text-red-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                        সংকীর্ণতা বিবেচনায় মহিলা অভিভাবকের যাতায়াত কম হওয়া শ্রেয়।
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="hover:text-red-700 transition-colors duration-300 flex items-start">
                                        <span className=" w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                        ইসলামী শরীয়াহ মোতাবেক পোশাকে আসা আবশ্যক।
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Section 7: Uniform */}
                        <motion.div
                            id="uniform"
                            ref={el => sectionRefs.current[6] = el}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                            variants={ruleCardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="bg-gradient-to-r from-orange-900 to-amber-900 p-6 flex items-center"
                                whileHover={{ backgroundSize: "200% 200%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                                    <span className="text-xl">👔</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">ইউনিফর্মঃ</h2>
                            </motion.div>
                            <div className="p-6 md:p-8">
                                <motion.div variants={itemVariants} className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">👦</span>
                                        </div>
                                        <p className="font-bold text-lg text-gray-800">ছাত্র:</p>
                                    </div>
                                    <p className="text-gray-700 ml-11">নেভীব্লু পাঞ্জাবী, সাদা পায়জামা, কালো জুতা-মোজা ও সাদা টুপি।</p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">👧</span>
                                        </div>
                                        <p className="font-bold text-lg text-gray-800">ছাত্রী:</p>
                                    </div>
                                    <p className="text-gray-700 ml-11">নেভীব্লু বোরকা (সাদা হাতা), সাদা নিকাব, সাদা পায়জামা, কালো জুতা-মোজা।</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>


                </div>

            </div >

            {/* Custom styles */}
            <style style jsx global > {`
                @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
                
                .galada-regular {
                    font-family: 'Galada', cursive;
                }
                
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
};

export default HostelRules;